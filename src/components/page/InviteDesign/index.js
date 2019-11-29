import React from 'react'
import styles from './styles.module.scss'
//https://www.greetingsisland.com/preview/invitations/comic-dots/314-10868

const InviteDesign = ({name="Anonimo"}) => {
  return (
    <div className={styles.inviteWrapper}>
      <div className={styles.invite}>
      </div>
      <div className={styles.inviteDetails}>
        <p>Superheroe {name}, estas invitad@!</p>
        <p>Nos reuniremos en Capitan Llerenas #97, Comala</p>
        <p>Domingo | Enero 5 | 2020 </p>
      </div>
    </div>
  )
}
export default InviteDesign
