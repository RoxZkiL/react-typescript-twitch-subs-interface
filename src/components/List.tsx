import React from 'react'
import { Sub } from '../types'

interface Props {
    subs: Array<Sub>
}

export const List = ({subs}: Props) => {
  return (
    <ul>
    {
    subs.map(sub => {
      return (
      <li key={sub.nick}>
        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
        <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
        <p>{sub.description}</p>
      </li>
        )
      })
    }
  </ul>
  )
}

