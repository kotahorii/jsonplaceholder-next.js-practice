import { GetStaticProps } from 'next'
import React from 'react'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Layout } from '../components/Layout'
import { fetchTasks } from '../hooks/useQueryTask'
import { Task } from '../types/types'

const TaskPage = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  return (
    <Layout title="todo">
      <p className="mb-5 text-blue-500 text-xl">Task list by SSG</p>
      {data?.map((task) => (
        <p className="font-bold" key={task.id}>
          {task.title}
        </p>
      ))}
    </Layout>
  )
}

export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('tasks', fetchTasks)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
