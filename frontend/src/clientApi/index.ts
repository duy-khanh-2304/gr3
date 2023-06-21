import axiosInstance from "@/axiosConfig"
import sortByPublishedDate from "@/utils/sortByPublishedDate"

export async function getHomePage(){
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  return response
}

export async function getAllNews(){
  let currentPage = 1
  let response
  let allNews = []
  response = (await axiosInstance.get("/api/news-and-events?filters[tag][$containsi]=news&populate=deep")).data
  allNews.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&populate=deep&pagination[page]=${currentPage}`)).data
    allNews.push(...response.data)
  }
  return allNews
}

export async function getPaginatedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&populate=deep&sort[0]=publishAt:desc&pagination[page]=${page}`)).data
  const sortedNewsList = sortByPublishedDate(response)
  return sortedNewsList
}

export async function getOneNewsBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getAllEvents(){
  let currentPage = 1
  let response
  let allEvents = []
  response = (await axiosInstance.get("/api/news-and-events?filters[tag][$containsi]=events&populate=deep")).data
  allEvents.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&populate=deep&pagination[page]=${currentPage}`)).data
    allEvents.push(...response.data)
  }
  return allEvents
}

export async function getPaginatedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&populate=deep&sort[0]=publishAt:desc&pagination[page]=${page}`)).data
  const sortedEventsList = sortByPublishedDate(response)
  return sortedEventsList
}

export async function getOneEventBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getAllSeminars(){
  let currentPage = 1
  let response
  let allSeminars = []
  response = (await axiosInstance.get("/api/news-and-events?filters[tag][$containsi]=seminars&populate=deep")).data
  allSeminars.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&populate=deep&pagination[page]=${currentPage}`)).data
    allSeminars.push(...response.data)
  }
  return allSeminars
}

export async function getPaginatedSeminars(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedSeminars(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&populate=deep&sort[0]=publishAt:desc&pagination[page]=${page}`)).data
  const sortedEventsList = sortByPublishedDate(response)
  return sortedEventsList
}

export async function getOneSeminarBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getLatestPost(postNumber: number = 5){
  const response = (await axiosInstance.get(`/api/news-and-events?sort[0]=publishAt:desc&populate=deep&pagination[page]=1&pagination[pageSize]=${postNumber}`)).data
  return response
}

export async function getAllAiTechBlogs(){
  let currentPage = 1
  let response
  let allAiTechBlogs = []
  response = (await axiosInstance.get("/api/ai-tech-blogs?populate=deep")).data
  allAiTechBlogs.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/ai-tech-blogs?populate=deep&pagination[page]=${currentPage}`)).data
    allAiTechBlogs.push(...response.data)
  }
  return allAiTechBlogs
}

export async function getPaginatedAiTechBlogs(page: number = 1){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedAiTechBlogs(page: number = 1){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs?populate=deep&sort[0]=publishAt:desc&pagination[page]=${page}`)).data
  const sortedAiTechBlogs = sortByPublishedDate(response)
  return sortedAiTechBlogs
}

export async function getOneAiTechBlogBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs?filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getAllProjects(){
  let currentPage = 1
  let response
  let allProjects = []
  response = (await axiosInstance.get("/api/projects?populate=deep")).data
  allProjects.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/projects?populate=deep&pagination[page]=${currentPage}`)).data
    allProjects.push(...response.data)
  }
  return allProjects
}

export async function getPaginatedProjects(page: number = 1){
  const response = (await axiosInstance.get(`/api/projects?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getOneProjectBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/projects?filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getLatestProjects(projectsNumber: number = 8){
  const response = (await axiosInstance.get(`/api/projects?sort[0]=publishedAt:desc&populate=deep&pagination[page]=1&pagination[pageSize]=${projectsNumber}`)).data
  return response
}

export async function getAllToolAndResources(){
  let currentPage = 1
  let response
  let allToolAndResources = []
  response = (await axiosInstance.get("/api/tool-and-resources?populate=deep")).data
  allToolAndResources.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/tool-and-resources?populate=deep&pagination[page]=${currentPage}`)).data
    allToolAndResources.push(...response.data)
  }
  return allToolAndResources
}

export async function getPaginatedToolAndResources(page: number = 1){
  const response = (await axiosInstance.get(`/api/tool-and-resources?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getOneToolAndResourceBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/tool-and-resources?filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getLatestToolAndResources(itemNumber: number = 8){
  const response = (await axiosInstance.get(`/api/tool-and-resources?sort[0]=publishedAt:desc&populate=deep&pagination[page]=1&pagination[pageSize]=${itemNumber}`)).data
  return response
}

export async function getAllSolutions(){
  let currentPage = 1
  let response
  let allSolutions = []
  response = (await axiosInstance.get("/api/solutions?populate=deep")).data
  allSolutions.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/solutions?populate=deep&pagination[page]=${currentPage}`)).data
    allSolutions.push(...response.data)
  }
  return allSolutions
}

export async function getPaginatedSolutions(page: number = 1){
  const response = (await axiosInstance.get(`/api/solutions?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getOneSolutionBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/solutions?filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getAllMembers(){
  let currentPage = 1
  let response
  let allMembers = []
  response = (await axiosInstance.get("/api/members?populate=deep")).data
  allMembers.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/members?populate=deep&pagination[page]=${currentPage}`)).data
    allMembers.push(...response.data)
  }
  return allMembers
}

export async function getAllTeams(){
  let currentPage = 1
  let response
  let allTeams = []
  response = (await axiosInstance.get("/api/research-teams?populate=deep")).data
  allTeams.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/research-teams?populate=deep&pagination[page]=${currentPage}`)).data
    allTeams.push(...response.data)
  }
  return allTeams
}

export async function getPaginatedTeams(page: number = 1){
  const response = (await axiosInstance.get(`/api/research-teams?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getOneTeamBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/research-teams?filters[slug][$eq]=${slug}&populate=deep`)).data
  return response
}

export async function getOurTeamPage(){
  const response = (await axiosInstance.get(`/api/our-team-page?populate=deep`)).data
  return response
}