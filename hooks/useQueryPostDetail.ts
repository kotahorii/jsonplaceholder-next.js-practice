import { ReadPost } from '../types/types'
import fetch from 'node-fetch'

export const fetchBlog = async (id: string | string[]) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = (await res.json()) as ReadPost

  return post
}
