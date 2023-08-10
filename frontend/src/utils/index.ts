export function sortByPublishedDate(list: any){
  list.data = list.data.sort((a: any,b: any) => {
    const firstDate = new Date(a.attributes.publishAt)
    const secondDate = new Date(b.attributes.publishAt)
    return (secondDate as any) - (firstDate as any)
  })
  return list
}

export function formattedWorkTime(start_time: any, end_time: any){
  const formattedStartTime = `${start_time.split(":")[0]}:${start_time.split(":")[1]}`
  const formattedEndTime = `${end_time.split(":")[0]}:${end_time.split(":")[1]}`
  return {
    formattedStartTime,
    formattedEndTime
  }
}

export function formattedPhoneNumber(phoneNumber: any) {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  return `(+84) ${phoneNumber.substr(1, 2)} ${phoneNumber.substr(3, 4)} ${phoneNumber.substr(7)}`;
}

export const CONTENT_TYPE = [
  {
    name:'News and Events',
    api: '/news-and-events'
  },
  {
    name:'AI Tech Blogs',
    api: '/ai-tech-blogs'
  },
  {
    name:'Projects',
    api: '/researches/projects'
  },
  {
    name:'Tool and Resources',
    api: '/researches/tool-and-resources'
  },
  {
    name:'Solutions',
    api: '/solutions'
  },
  {
    name:'Research Teams',
    api: '/researches/research-teams'
  },
]