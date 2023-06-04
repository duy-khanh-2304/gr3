export default function sortByPublishedDate(list: any){
  list.data = list.data.sort((a: any,b: any) => {
    const firstDate = new Date(a.attributes.publishAt)
    const secondDate = new Date(b.attributes.publishAt)
    return (secondDate as any) - (firstDate as any)
  })
  return list
}