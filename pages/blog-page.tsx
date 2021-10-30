import { GetStaticProps } from 'next'
import React, { VFC } from 'react'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Layout } from '../components/Layout'
import { Post } from '../components/Post'
import { fetchBlogs } from '../hooks/useQueryBlog'
import { ReadPost } from '../types/types'

const BlogPage: VFC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<ReadPost[]>('blogs')
  return (
    <Layout title="blog">
      <p className="text-4xl mb-10">blog page</p>
      <ul>
        {data?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('blogs', fetchBlogs)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
