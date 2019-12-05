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
      {/* change state using redux */}
      {/* start changing invite status and make sure UI updates */}
      <InviteButtons currentState={invitee ? invitee.e_vite.status : 'pending'}/>
    </div>
  )
}
export default InvitePreviewPage
