export function sortCommentsByTime(data){
  return data.sort((a,b) => a.commentedAt - b.commentedAt)
}