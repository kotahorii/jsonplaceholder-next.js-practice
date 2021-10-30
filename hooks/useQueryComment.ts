import axios from 'axios'
import { useQuery } from 'react-query'
import { ReadComment } from '../types/types'

const url = 'https://jsonplaceholder.typicode.com/comments'

export const fetchComments = async () => {
  const { data } = await axios.get<ReadComment[]>(url)
  return data
}

export const useQueryComment = () => {
  return useQuery<ReadComment[], Error>({
    queryKey: 'comments',
    queryFn: fetchComments,
    staleTime: Infinity,
  })
}
