import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useWindowSize } from 'react-use'
import { useSelector, useDispatch } from 'react-redux'
import Confetti from 'react-confetti'
import MickeyInvite from '../../display/MickeyInvite'
import InviteButtons from '../../display/InviteButtons'
import appThunks from '../../../appThunks'
import { NOTSENT as INVITE_NOTSENT } from '../../../globals/constants/InviteStatus'
import styles from './styles.module.scss'

const InvitePreviewPage = props => {
  const dispatch = useDispatch()
  const invitee = useSelector(state => state.invitee)
  const { width, height } = useWindowSize()
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
    <div className={styles.container}>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={100}
        colors={['#000000', '#f10b0b', '#b07a17']}
      />
      <MickeyInvite name={invitee ? invitee.name : ''} />
      <InviteButtons {...e_viteProps(invitee)} />
    </div>
  )
}
export default InvitePreviewPage
