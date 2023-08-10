'use strict';
const axios = require('axios')
require('dotenv').config();

module.exports = ({ strapi }) => ({
  async searchScholar(ctx) {
    const body = ctx.request.body
    const key = process.env.SERP_KEY_API
    const engine = 'google_scholar'
    const url = `https://serpapi.com/search?engine=${engine}&q=${encodeURIComponent(body.query)}&api_key=${key}&num=20`;
    const allPublications = []
    let data = {}
    await axios.get(url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) => {
        allPublications.concat(response.organic_results)
        data = response.data;
      })
      .catch((error) => {
        console.error('Error when calling API:', error.message);
      });
    ctx.body = data
  },

  async searchScholarCite(ctx) {
    const body = ctx.request.body
    const key = process.env.SERP_KEY_API
    const engine = 'google_scholar_cite'
    const url = `https://serpapi.com/search?engine=${engine}&q=${encodeURIComponent(body.query)}&api_key=${key}`;
    let data = {}
    await axios.get(url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        console.error('Error when calling API:', error.message);
      });
    
    ctx.body = data
  },

  async getResearchTeams(ctx) {
    const researchTeams = await strapi.entityService.findMany('api::research-team.research-team', {
      fields: ['title', 'slug'],
      populate: {
        members: '*'
      }
    })
    ctx.body = researchTeams
  },

  async addPublication(ctx){
    const query = ctx.request.body.query
    const {
      research_team_id,
      member_id,
      org_checked,
    } = query
    console.log("Query: ", query)
    const newPublications = []
    await Promise.all(
      org_checked.map(async (org) => {
        const key = process.env.SERP_KEY_API
        const engine = 'google_scholar_cite'
        const url = `https://serpapi.com/search?engine=${engine}&q=${encodeURIComponent(org.result_id)}&api_key=${key}`;
        let data = {}
        await axios.get(url,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then((response) => {
            data = response.data;
          })
          .catch((error) => {
            console.error('Error when calling API:', error.message);
          });
        const response = await strapi.entityService.create('api::publication-list.publication-list', {
          data: {
            cite: data.citations.find(_ => _.title === 'APA')?.snippet ?? "",
            title: org.title
          }
        })
        newPublications.push(response.id)
      })
    )

    const member = await strapi.entityService.findOne('api::member.member', Number(member_id), {
      populate: {
        publications: true
      }
    })

    await strapi.entityService.update('api::member.member', Number(member_id), {
      data: {
        publications: [...member.publications, ...newPublications]
      }
    })

    const team = await strapi.entityService.findOne('api::research-team.research-team', Number(research_team_id), {
      populate: {
        publications: true
      }
    })

    await strapi.entityService.update('api::research-team.research-team', Number(research_team_id), {
      data: {
        publications: [...team.publications, ...newPublications]
      }
    })
    ctx.body = JSON.stringify("Successfully !")
  }
});