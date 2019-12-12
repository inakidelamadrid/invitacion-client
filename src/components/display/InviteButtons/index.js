//@format
import React from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from './CustomButton'
import styles from './styles.module.scss'
import classNames from 'classnames'
import mapValues from 'lodash/mapValues'
import values from 'lodash/values'
import appThunks from '../../../appThunks'
import { inviteStatusMap } from '../../../globals/constants/InviteStatus'

const InviteButtons = ({ currentState = 'pending', code = null }) => {
  const dispatch = useDispatch()

  const accepted = currentState === 'accepted'
  const rejected = currentState === 'rejected'
  const maybe = currentState === 'maybe'

  const buttonActions = {
    accept: {
      text: 'Si ire',
      className: classNames({
        [styles.pulse]: !accepted,
        [styles.buttonDisabled]: accepted,
        [styles.buttonWithTransition]: !accepted,
        [styles.buttonYes]: !accepted,
      }),
      disabled: accepted,
    },

    reject: {
      text: 'No puedo ir',
      className: classNames({
        [styles.buttonDisabled]: rejected,
        [styles.buttonWithTransition]: !rejected,
        [styles.buttonNo]: !rejected,
      }),
      disabled: rejected,
    },

    maybe: {
      text: 'Tal vez ire',
      className: classNames({
        [styles.buttonDisabled]: maybe,
        [styles.buttonWithTransition]: !maybe,
        [styles.buttonMaybe]: !maybe,
      }),
      disabled: maybe,
    },
  }

  const changeInviteStatus = action => {
    const newStatus = {
      accept: 'accepted',
      reject: 'rejected',
      maybe: 'maybe',
    }[action]

    if (code) {
      dispatch(appThunks.changeEviteStatus(code, newStatus))
    }
  }

  const buttons = values(
    mapValues(buttonActions, (value, key) => {
      return (
        <CustomButton
          disabled={value.disabled}
          key={key}
          myAction={key}
          currentState={currentState}
          className={value.className}
          changeInviteStatus={changeInviteStatus}
        >
          {value.text}
        </CustomButton>
      )
    })
  )

  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.inviteStatus}>{inviteStatusMap[currentState]}</div>

      {buttons}
    </div>
  )
}

export default InviteButtons
