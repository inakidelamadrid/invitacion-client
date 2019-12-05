import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import InviteButtons from '../../display/InviteButtons'
import appThunks from '../../../appThunks'

const InvitePreviewPage = props => {
  const dispatch = useDispatch()
  const invitee = useSelector(state => state.invitee)
  const { code } = useParams()

  useEffect(() => {
    dispatch(appThunks.loadInvitee(code))
  }, [code, dispatch])

  return (
    <div>
      InvitePreviewPage: {code} : {invitee ? invitee.name : ''}
      {/* setup story book to check changes in buttons */}
      {/* code API to change invite status */ }
      {/* pass invite down and change state using redux */}
      {/* start changing invite status and make sure UI updates */}
      <InviteButtons/>
    </div>
  )
}
export default InvitePreviewPage
