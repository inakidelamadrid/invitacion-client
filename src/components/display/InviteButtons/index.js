//@format
import React from 'react'
import CustomButton from './CustomButton'
import styles from './styles.module.scss'
import classNames from 'classnames'
import mapValues from 'lodash/mapValues'
import values from 'lodash/values'

const InviteButtons = ({ currentState = 'pending' }) => {
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

  const changeInviteStatus = action => console.log(action)
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
