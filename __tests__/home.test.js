import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
 
describe('Home', () => {
  it('renders home component', () => {
    render(<Home />)
 
    const home = screen.getByTestId('home')
 
    expect(home).toBeInTheDocument()
  })
})