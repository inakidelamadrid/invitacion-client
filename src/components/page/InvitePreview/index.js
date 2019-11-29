import React from 'react'
import { useParams } from 'react-router'

const InvitePreviewPage = props => {
  const { code } = useParams()
  return <div>InvitePreviewPage: {code}</div>
}
export default InvitePreviewPage
