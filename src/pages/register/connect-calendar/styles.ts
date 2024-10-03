import { Box, styled } from '@ignite-js-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$2',

  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$4 $6',
})
