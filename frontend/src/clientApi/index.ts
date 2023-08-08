import axiosInstance from "@/axiosConfig"

const selectorFieldNewsAndEvents = `fields[0]=title&fields[1]=slug&fields[2]=publishAt&fields[3]=post_image&fields[4]=post_subtitle&fields[5]=tag&populate[post_image]=*`
const selectorFieldAiTechBlogs = `fields[0]=title&fields[1]=slug&fields[2]=publishAt&fields[3]=post_image&fields[4]=post_subtitle&fields[5]=tag&populate[post_image]=*`
const selectorFieldProjects = `fields[0]=title&fields[1]=slug&fields[2]=post_image&fields[3]=post_subtitle&populate[post_image]=*`
const selectorFieldToolAndResources = `fields[0]=title&fields[1]=slug&fields[2]=post_image&fields[3]=post_subtitle&populate[post_image]=*`
const selectorFieldSolutions = `fields[0]=title&fields[1]=slug&fields[2]=post_image&fields[3]=post_subtitle&populate[post_image]=*`
const selectorFieldResearchTeams = `fields[0]=title&fields[1]=slug&fields[2]=post_image&fields[3]=post_subtitle&populate[post_image]=*`
const selectorFieldCourses = `fields[0]=title&fields[1]=slug&fields[2]=post_image&fields[3]=post_subtitle&populate[post_image]=*`
const selectorFieldInformation= 'populate[email]=true&populate[phone_number]=true&populate[address]=true'
export async function getHomePage(){
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  return response
}

export async function getContactInformation(){
  const response = (await axiosInstance.get(`/api/contact-information?populate=deep`)).data
  return response
}

export async function getLayout(){
  const response = (await axiosInstance.get(`/api/layout?populate=deep`)).data
  return response
}

export async function getAllNews(){
  let currentPage = 1
  let response
  let allNews = []
  response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&${selectorFieldNewsAndEvents}`)).data
  allNews.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&pagination[page]=${currentPage}&${selectorFieldNewsAndEvents}`)).data
    allNews.push(...response.data)
  }
  return allNews
}

export async function getPaginatedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&pagination[page]=${page}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getPaginatedSortedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=news&sort[0]=publishAt:desc&pagination[page]=${page}&pagination[pageSize]=6&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getOneNewsBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events/${slug}?populate=deep&filters[tag][$containsi]=news`)).data
  return response
}

export async function getAllEvents(){
  let currentPage = 1
  let response
  let allEvents = []
  response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&${selectorFieldNewsAndEvents}`)).data
  allEvents.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&pagination[page]=${currentPage}&${selectorFieldNewsAndEvents}`)).data
    allEvents.push(...response.data)
  }
  return allEvents
}

export async function getPaginatedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&pagination[page]=${page}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getPaginatedSortedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=events&sort[0]=publishAt:desc&pagination[page]=${page}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getOneEventBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events/${slug}?filters[tag][$containsi]=events&populate=deep`)).data
  return response
}

export async function getAllSeminars(){
  let currentPage = 1
  let response
  let allSeminars = []
  response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&${selectorFieldNewsAndEvents}`)).data
  allSeminars.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&pagination[page]=${currentPage}&${selectorFieldNewsAndEvents}`)).data
    allSeminars.push(...response.data)
  }
  return allSeminars
}

export async function getPaginatedSeminars(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&pagination[page]=${page}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getPaginatedSortedSeminars(page: number = 1){
  const response = (await axiosInstance.get(`/api/news-and-events?filters[tag][$containsi]=seminars&sort[0]=publishAt:desc&pagination[page]=${page}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getOneSeminarBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/news-and-events/${slug}?filters[tag][$containsi]=seminars&populate=deep`)).data
  return response
}

export async function getLatestPost(postNumber: number = 5){
  const response = (await axiosInstance.get(`/api/news-and-events?sort[0]=publishAt:desc&pagination[page]=1&pagination[pageSize]=${postNumber}&${selectorFieldNewsAndEvents}`)).data
  return response
}

export async function getAllAiTechBlogs(){
  let currentPage = 1
  let response
  let allAiTechBlogs = []
  response = (await axiosInstance.get(`/api/ai-tech-blogs?${selectorFieldAiTechBlogs}`)).data
  allAiTechBlogs.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/ai-tech-blogs?pagination[page]=${currentPage}&${selectorFieldAiTechBlogs}`)).data
    allAiTechBlogs.push(...response.data)
  }
  return allAiTechBlogs
}

export async function getPaginatedAiTechBlogs(page: number = 1){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs?pagination[page]=${page}&${selectorFieldAiTechBlogs}`)).data
  return response
}

export async function getPaginatedSortedAiTechBlogs(page: number = 1){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs?sort[0]=publishAt:desc&pagination[page]=${page}&${selectorFieldAiTechBlogs}`)).data
  return response
}

export async function getOneAiTechBlogBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/ai-tech-blogs/${slug}?populate=deep`)).data
  return response
}

export async function getAllProjects(){
  let currentPage = 1
  let response
  let allProjects = []
  response = (await axiosInstance.get(`/api/projects?${selectorFieldProjects}`)).data
  allProjects.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/projects?pagination[page]=${currentPage}&${selectorFieldProjects}`)).data
    allProjects.push(...response.data)
  }
  return allProjects
}

export async function getPaginatedProjects(page: number = 1){
  const response = (await axiosInstance.get(`/api/projects?pagination[page]=${page}&${selectorFieldProjects}`)).data
  return response
}

export async function getOneProjectBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/projects/${slug}?populate=deep`)).data
  return response
}

export async function getLatestProjects(projectsNumber: number = 8){
  const response = (await axiosInstance.get(`/api/projects?sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=${projectsNumber}&${selectorFieldProjects}`)).data
  return response
}

export async function getAllToolAndResources(){
  let currentPage = 1
  let response
  let allToolAndResources = []
  response = (await axiosInstance.get(`/api/tool-and-resources?${selectorFieldToolAndResources}`)).data
  allToolAndResources.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/tool-and-resources?pagination[page]=${currentPage}&${selectorFieldToolAndResources}`)).data
    allToolAndResources.push(...response.data)
  }
  return allToolAndResources
}

export async function getPaginatedToolAndResources(page: number = 1){
  const response = (await axiosInstance.get(`/api/tool-and-resources?pagination[page]=${page}&${selectorFieldToolAndResources}`)).data
  return response
}

export async function getOneToolAndResourceBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/tool-and-resources/${slug}?populate=deep,3`)).data
  return response
}

export async function getLatestToolAndResources(itemNumber: number = 8){
  const response = (await axiosInstance.get(`/api/tool-and-resources?sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=${itemNumber}&${selectorFieldToolAndResources}`)).data
  return response
}

export async function getAllSolutions(){
  let currentPage = 1
  let response
  let allSolutions = []
  response = (await axiosInstance.get(`/api/solutions?${selectorFieldSolutions}`)).data
  allSolutions.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/solutions?pagination[page]=${currentPage}&${selectorFieldSolutions}`)).data
    allSolutions.push(...response.data)
  }
  return allSolutions
}

export async function getPaginatedSolutions(page: number = 1){
  const response = (await axiosInstance.get(`/api/solutions?pagination[page]=${page}&${selectorFieldSolutions}`)).data
  return response
}

export async function getOneSolutionBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/solutions/${slug}?populate=deep`)).data
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
  response = (await axiosInstance.get(`/api/research-teams?${selectorFieldResearchTeams}`)).data
  allTeams.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/research-teams?pagination[page]=${currentPage}&${selectorFieldResearchTeams}`)).data
    allTeams.push(...response.data)
  }
  return allTeams
}

export async function getPaginatedTeams(page: number = 1){
  const response = (await axiosInstance.get(`/api/research-teams?pagination[page]=${page}&${selectorFieldResearchTeams}`)).data
  return response
}

export async function getOneTeamBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/research-teams/${slug}?populate=deep`)).data
  return response
}

export async function getOurTeamPage(){
  const response = (await axiosInstance.get(`/api/our-team-page?populate=deep`)).data
  return response
}

export async function getAllPartners(){
  const response = (await axiosInstance.get(`/api/partners?populate=deep`)).data
  return response
}

export async function addComment(
  type: string,
  slug: string, data: any
){
  console.log("AXIOS: ", axiosInstance)
  console.log("Data: ", data)
  console.log("BASEURL: ", axiosInstance.defaults)
  const response = (await axiosInstance.put(
    `/api/${type}/${slug}/comment?populate=deep`,
    data
  ))
}

export async function sendMessage(
  message: any
){
  const response = (await axiosInstance.post(
    `/contact`,
    message,
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    }
  ))
}

export async function getAllCourses(){
  let currentPage = 1
  let response
  let allCourses = []
  response = (await axiosInstance.get(`/api/courses?${selectorFieldCourses}`)).data
  allCourses.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/courses?pagination[page]=${currentPage}&${selectorFieldCourses}`)).data
    allCourses.push(...response.data)
  }
  return allCourses
}

export async function getPaginatedCourses(page: number = 1){
  const response = (await axiosInstance.get(`/api/courses?pagination[page]=${page}&${selectorFieldCourses}`)).data
  return response
}

export async function getOneCoursesBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/courses/${slug}?populate=deep`)).data
  return response
} 

export async function getAllPublications(){
  let currentPage = 1
  let response
  let allPublications = []
  response = (await axiosInstance.get(`/api/publication-lists`)).data
  allPublications.push(...response.data)

  while(currentPage < response.meta.pagination.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/publication-lists?pagination[page]=${currentPage}`)).data
    allPublications.push(...response.data)
  }
  return allPublications
}