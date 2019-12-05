//@format
import React from 'react'

const CustomButton = ({
  changeInviteStatus,
  children,
  className,
  currentState,
  disabled,
  myAction,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={() => changeInviteStatus(myAction)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
export default CustomButton
