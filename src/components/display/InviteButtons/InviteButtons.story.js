import React from 'react'
import { storiesOf } from '@storybook/react'
//import { action } from '@storybook/addon-actions'
import InviteButtons from './index'

storiesOf('Invite Buttons', module) //Force-break
  .add('pending', () => <InviteButtons />)
  .add('accepted', () => <InviteButtons currentState="accepted" />)
  .add('rejected', () => <InviteButtons currentState="accepted" />)
  .add('maybe', () => <InviteButtons currentState="accepted" />)
