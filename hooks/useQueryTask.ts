import axios from 'axios'
import { useQuery } from 'react-query'
import { Task } from '../types/types'

const url = 'https://jsonplaceholder.typicode.com/todos'



export const fetchTasks = async () => {
  const { data } = await axios.get<Task[]>(url)
  return data
}

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    staleTime: Infinity,
  })
}
