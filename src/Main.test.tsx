import { render, screen } from '@testing-library/react'
import Main from './Main'

test('renders body text', () => {
  render(<Main />)
  const linkElement = screen.getByText(/selection/i)
  expect(linkElement).toBeInTheDocument()
})
