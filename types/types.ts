export type Task = {
  userId: number
  id: number
  title: string
  completed: boolean
}
export type ReadComment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
export type ReadPost = {
  userId: number
  id: number
  title: string
  body: string
}
