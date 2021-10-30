import { GetStaticProps } from 'next'
import React from 'react'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Comment } from '../components/Comment'
import { Layout } from '../components/Layout'
import { fetchComments } from '../hooks/useQueryComment'
import { ReadComment } from '../types/types'

const CommentPage = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<ReadComment[]>('comments')
  return (
    <Layout title="comment">
      <p className="text-4xl m-10">comment page</p>
      <ul>
        {data?.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
    </Layout>
  )
}

export default CommentPage

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('comments', fetchComments)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
