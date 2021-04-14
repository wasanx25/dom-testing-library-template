import React from 'react'
import {render} from '@testing-library/react'
import Counter from '../'

test('increments the count', () => {
  const {getByRole} = render(<Counter />)

  expect(getByRole('rowheader', { name: 'Group1' })).toBeVisible()
})

