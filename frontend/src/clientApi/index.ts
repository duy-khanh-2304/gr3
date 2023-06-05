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
  response = (await axiosInstance.get("/api/newses?populate=deep")).data
  allNews.push(...response.data)

  while(currentPage < response.meta.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/newses?populate=deep&pagination[page]=${currentPage}`)).data
    allNews.push(...response.data)
  }
  return allNews
}

export async function getPaginatedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/newses?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedNews(page: number = 1){
  const response = (await axiosInstance.get(`/api/newses?populate=deep&pagination[page]=${page}&sort[0]=publishAt:desc`)).data
  const sortedNewsList = sortByPublishedDate(response)
  return sortedNewsList
}

export async function getOneNewsBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/newses?populate=deep&filters[slug][$eq]=${slug}`)).data
  return response
}

export async function getAllEvents(){
  let currentPage = 1
  let response
  let allEvents = []
  response = (await axiosInstance.get("/api/events?populate=deep")).data
  allEvents.push(...response.data)

  while(currentPage < response.meta.pageCount){
    currentPage  = currentPage + 1
    response = (await axiosInstance.get(`/api/events?populate=deep&pagination[page]=${currentPage}`)).data
    allEvents.push(...response.data)
  }
  return allEvents
}

export async function getPaginatedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/events?populate=deep&pagination[page]=${page}`)).data
  return response
}

export async function getPaginatedSortedEvents(page: number = 1){
  const response = (await axiosInstance.get(`/api/events?populate=deep&pagination[page]=${page}&sort[0]=publishAt:desc`)).data
  const sortedEventsList = sortByPublishedDate(response)
  return sortedEventsList
}

export async function getOneEventBySlug(slug: string){
  const response = (await axiosInstance.get(`/api/events?populate=deep&filters[slug][$eq]=${slug}`)).data
  return response
}