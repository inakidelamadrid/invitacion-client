import React from 'react'

import { addInvitee } from '../../../actions/invitees'
import InviteeForm from '../../display/InviteeForm'

const InviteeFormPage = () => <InviteeForm addInvitee={addInvitee} />

export default InviteeFormPage
