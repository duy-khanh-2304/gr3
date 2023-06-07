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