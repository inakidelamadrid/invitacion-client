import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import InviteButtons from '../../display/InviteButtons'
import appThunks from '../../../appThunks'
import { NOTSENT as INVITE_NOTSENT } from '../../../globals/constants/InviteStatus'

const InvitePreviewPage = props => {
  const dispatch = useDispatch()
  const invitee = useSelector(state => state.invitee)
  const { code } = useParams()

  useEffect(() => {
    dispatch(appThunks.loadInvitee(code))
  }, [code, dispatch])

  const e_viteProps = invitee => {
    if (!invitee)
      return {
        currentState: INVITE_NOTSENT,
        code: null,
      }
    return { currentState: invitee.e_vite.status, code: invitee.e_vite.code }
  }

  return (
    <div>
      {invitee ? invitee.name : ''}
      {/* change state using redux */}
      {/* start changing invite status and make sure UI updates */}
      <InviteButtons {...e_viteProps(invitee)} />
    </div>
  )
}
export default InvitePreviewPage
