//@format
import React from 'react'

const CustomButton = ({
  changeInviteStatus,
  children,
  className,
  currentState,
  myAction,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={() => changeInviteStatus(myAction)}
    >
      {children}
    </button>
  )
}
export default CustomButton
