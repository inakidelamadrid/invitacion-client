import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import Clipboard from 'react-clipboard.js'
import { inviteStatusMap } from '../../../globals/constants/InviteStatus'
//import appThunks from '../../../appThunks'

const Invitee = ({ invitee }) => {
  // const dispatch = useDispatch()

  const code = invitee.e_vite && invitee.e_vite.code

  //const createInviteCode = () => {
  //dispatch(appThunks.createEvite(invitee.id))
  //}

  return (
    <tr>
      <td>{invitee.name}</td>
      <td>{invitee.last_name}</td>
      <td>{inviteStatusMap[invitee.e_vite.status]}</td>
      <td className={styles.cogsColumn}>
        {/*<button className={styles.inviteeActionBtn} onClick={createInviteCode}>
          <FontAwesomeIcon icon={faCogs} />
        </button>{' '}*/}
        {code ? (
          <>
            <button className={styles.inviteeActionBtn}>
              <Clipboard
                component="a"
                button-href="#"
                data-clipboard-text={`${process.env.REACT_APP_HOST}/invitees/preview/${code}`}
              >
                <FontAwesomeIcon icon={faClipboard} />
              </Clipboard>
            </button>
            <a
              className={styles.inviteePreview}
              href={`/invitees/preview/${code}`}
            >
              Vista previa
            </a>
          </>
        ) : (
          ''
        )}
      </td>
    </tr>
  )
}

const InviteeList = ({ invitees }) => {
  return (
    <div className="inviteesListWrapper">
      <table className={styles.inviteeTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado de invitacion</th>
            <th className={styles.cogsColumn}>Link de invitacion</th>
          </tr>
        </thead>
        <tbody>
          {invitees.map((invitee, index) => (
            <Invitee key={index} invitee={invitee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default InviteeList
