export const ACCEPTED = 'accepted'
export const MAYBE = 'maybe'
export const NOTSENT = 'notsent'
export const PENDING = 'pending'
export const REJECTED = 'rejected'

export const statuses = [ACCEPTED, MAYBE, NOTSENT, PENDING, REJECTED]

export const inviteStatusMap = {
  accepted: 'Si ire',
  maybe: 'Tal vez ire',
  notsent: 'Invitacion no enviada',
  pending: 'Invitacion enviada',
  rejected: 'No puedo ir',
}
