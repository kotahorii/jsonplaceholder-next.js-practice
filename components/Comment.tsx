import { VFC } from 'react'
import { ReadComment } from '../types/types'

export const Comment: VFC<ReadComment> = ({ id, name, body }) => {
  return (
    <li className="mx-10">
      <p>
        {id}
        {': '}
        {body}
      </p>
      <p className="text-center mt-3 mb-10">
        {'by '}
        {name}
      </p>
    </li>
  )
}
