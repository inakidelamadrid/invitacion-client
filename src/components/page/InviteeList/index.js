import React, { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useSelector, useDispatch } from 'react-redux'
import appThunks from '../../../appThunks'
import InviteeList from '../../display/InviteeList'
import InviteeFilter from '../../display/InviteeFilter'
import InviteeForm from '../../display/InviteeForm'
import styles from './styles.module.scss'

const InviteeListPage = props => {
  const dispatch = useDispatch()
  const invitees = useSelector(state => state.invitees)

  useEffect(() => {
    dispatch(appThunks.loadInvitees())
  }, [dispatch])

  return (
    <div className={styles.page}>
      <div className={styles.inviteeForm}>
        <InviteeForm addInvitee={appThunks.createInvitee} />
      </div>

      <div className={styles.inviteeList}>
        <InviteeFilter
          updateFunction={appThunks.loadInvitees}
          dispatch={dispatch}
        />
        {isEmpty(invitees) ? (
          <div>Loading</div>
        ) : (
          <InviteeList invitees={invitees} />
        )}
      </div>
    </div>
  )
}
export default InviteeListPage
