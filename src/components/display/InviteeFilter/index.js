import React from 'react'
import { inviteStatusMap } from '../../../globals/constants/InviteStatus'
import reduce from 'lodash/reduce'

const InviteeFilter = props => {
  const options = reduce(
    inviteStatusMap,
    (acc, value, key) => {
      return [...acc, { text: value, value: key }]
    },
    []
  )
  return (
    <select>
      {options.map((opt, index) => (
        <option value={opt.value} key={index}>
          {opt.text}
        </option>
      ))}
    </select>
  )
}

export default InviteeFilter
