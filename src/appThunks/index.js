import { loadInvitee } from './invitee'
import { createInvitee, loadInvitees } from './invitees'
import { createEvite, changeStatus as changeEviteStatus } from './e_vites'

const appThunks = {
  changeEviteStatus,
  createEvite,
  createInvitee,
  loadInvitee,
  loadInvitees,
}
export default appThunks
