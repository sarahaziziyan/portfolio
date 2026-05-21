import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

// Group related tests under a describe block
describe('App', () => {
  // Check that the main heading renders
  it('renders the heading for Portfolio', () => {
    render(<App />)
    expect(screen.getByText('Portfolio')).toBeDefined()
  })
})