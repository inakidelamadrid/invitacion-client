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
      className: classNames(
        accepted ? styles.buttonDisabled : styles.buttonYes,
        styles.pulse
      ),
      disabled: accepted,
    },
    reject: {
      text: 'No puedo ir',
      className: rejected ? styles.buttonDisabled : styles.buttonNo,
      disabled: rejected,
    },
    maybe: {
      text: 'Tal vez ire',
      className: maybe ? styles.buttonMaybe : styles.buttonMaybe,
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
