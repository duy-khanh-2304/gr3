'use strict';
const axios = require('axios')
require('dotenv').config();

module.exports = ({ strapi }) => ({
  async searchScholar(ctx) {
    const body = ctx.request.body
    const key = process.env.SERP_KEY_API
    const engine = 'google_scholar'
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
      fields: ['title', 'slug']
    })
    ctx.body = researchTeams
  },

  async addPublication(ctx){
    const body = ctx.request.body
    await strapi.entityService.create('api::publication-list.publication-list', {
      data: {
        cite: body.query.quote,
        title: body.query.title,
        research_team: {
          id: Number(body.query.research_team_id)
        }
      }
    })
    console.log("Successfully !")
    ctx.body = JSON.stringify("Successfully !")
  }
});
