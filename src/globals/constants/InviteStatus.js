export const ACCEPTED = 'accepted'
export const MAYBE = 'maybe'
export const NOTSENT = 'notsent'
export const PENDING = 'pending'
export const REJECTED = 'rejected'

export const statuses = [ACCEPTED, MAYBE, NOTSENT, PENDING, REJECTED]

export const inviteStatusMap = {
  accepted: 'Si iré',
  maybe: 'Tal vez iré',
  notsent: 'Invitacion no enviada',
  pending: 'Invitación aún no respondida',
  rejected: 'No puedo ir',
}
