//@format
import React from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from './CustomButton'
import styles from './styles.module.scss'
import classNames from 'classnames'
import mapValues from 'lodash/mapValues'
import values from 'lodash/values'
import appThunks from '../../../appThunks'

const InviteButtons = ({ currentState = 'pending', code = null }) => {
  const dispatch = useDispatch()

  const buttonActions = {
    accept: {
      text: 'Si ire',
      className: classNames(styles.buttonYes, styles.pulse),
      disabled: currentState === 'accepted',
    },
    reject: {
      text: 'No puedo ir',
      className: styles.buttonNo,
      disabled: currentState === 'rejected',
    },
    maybe: {
      text: 'Tal vez ire',
      className: styles.buttonMaybe,
      disabled: currentState === 'maybe',
    },
  }

  const currentStateText = {
    pending: 'Aun no respondes',
    accepted: 'Si ire',
    rejected: 'No puedo ir',
    maybe: 'Tal vez ire',
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
      <div>Tu estado es: {currentStateText[currentState]}</div>
      {buttons}
    </div>
  )
}

export default InviteButtons
