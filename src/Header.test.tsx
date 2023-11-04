import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header component within app', () => {
  render(<App />)
  const linkElement = screen.getByText(/You...shall...not...SCSS!/i)
  expect(linkElement).toBeInTheDocument()
})
