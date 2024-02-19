import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/todo' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Muhammad Shahzaib</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/todo' className="mr-5 hover:text-gray-900">Todo</Link>
      <Link to='/calculator' className="mr-5 hover:text-gray-900">Calculator</Link>
      <Link to='/weather' className="mr-5 hover:text-gray-900">Weather Check</Link>
      <Link to='/currencyconverter' className="mr-5 hover:text-gray-900">Currency Converter</Link>
    </nav>
  </div>
</header>
  )
}

export default Navbar