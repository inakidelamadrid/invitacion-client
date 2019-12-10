import React from 'react'
import styles from './styles.module.scss'
//https://www.greetingsisland.com/preview/invitations/comic-dots/314-10868
import MickeySilhouette from '../MickeySilhouette'

const InviteDesign = ({ name = 'Nacho' }) => {
  return (
    <div className={styles.inviteWrapper}>
      <div className={styles.invite}>
        <div className={styles.mickeySilhouette}>
          <MickeySilhouette />
        </div>
      </div>
      <div className={styles.inviteDetails}>
        <div className={styles.birthdayText1}>
          <p>Orejas para escuchar, </p>
          <p>es tiempo de celebrar!</p>
        </div>
        <div className={styles.invitee}><p>{name}</p></div>
        <div className={styles.birthdayText2}>
          <p>
            <b>Acompáñanos al </b>
          </p>
        </div>
        <div className={styles.birthdayText3}>
          <p>Cumple 3 de Tomás!</p>
        </div>
        <div className={styles.dottedHorizontal}></div>
        <div className={styles.dateBox}>
          <p>Domingo, 5 de Enero</p>
        </div>
        <div className={styles.dottedHorizontal}></div>
        <div className={styles.timeAndAddress}>
          <p className={styles.timeat}>2 PM - ?</p>
          <p className={styles.address}>López Rayón #23, Comala.</p>
        </div>
      </div>
    </div>
  )
}
export default InviteDesign
