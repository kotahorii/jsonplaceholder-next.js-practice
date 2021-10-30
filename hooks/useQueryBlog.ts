import axios from 'axios'
import { useQuery } from 'react-query'
import { ReadPost } from '../types/types'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchBlogs = async () => {
  const { data } = await axios.get<ReadPost[]>(url)
  return data
}

export const useQueryBlogs = () => {
  return useQuery<ReadPost[], Error>({
    queryKey: 'blogs',
    queryFn: fetchBlogs,
    staleTime: Infinity,
  })
}
