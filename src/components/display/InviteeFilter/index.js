import React, { useState } from 'react'
import {
  inviteStatusMap,
  PENDING,
} from '../../../globals/constants/InviteStatus'
import reduce from 'lodash/reduce'

const InviteeFilter = ({ initial = PENDING, updateFunction, dispatch }) => {
  const [status, setStatus] = useState(initial)

  const options = reduce(
    inviteStatusMap,
    (acc, value, key) => {
      return [...acc, { text: value, value: key }]
    },
    []
  )

  const changeStatus = event => {
    const status = event.target.value
    setStatus(status)
    if (updateFunction && dispatch) {
      console.log(' I will dispatch')
    }
  }

  return (
    <select value={status} onChange={changeStatus}>
      {options.map((opt, index) => (
        <option value={opt.value} key={index}>
          {opt.text}
        </option>
      ))}
    </select>
  )
}

export default InviteeFilter
