//@format
import React from 'react'
import CustomButton from './CustomButton'
import styles from './styles.module.scss'
import values from 'lodash/values'
import mapValues from 'lodash/mapValues'

const InviteButtons = ({ currentState = 'pending' }) => {
  const buttonActions = {
    accept: { text: 'Si ire', className: styles.buttonYes },
    reject: { text: 'No puedo ir', className: styles.buttonNo },
    maybe: { text: 'Tal vez ire', className: styles.buttonMaybe },
  }

  const changeInviteStatus = action => console.log(action)
  const buttons = values(
    mapValues(buttonActions, (value, key) => {
      return (
        <CustomButton
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

  return <div className={styles.buttonsWrapper}>{buttons}</div>
}

export default InviteButtons