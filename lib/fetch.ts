import { QueryClient } from 'react-query'
import { fetchBlogs } from '../hooks/useQueryBlog'
import { ReadPost } from '../types/types'

export const getAllPostIds = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('blogs', fetchBlogs)
  const posts = queryClient.getQueryData<ReadPost[]>('blogs')
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}
