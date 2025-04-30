import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Header/Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gray-100 border-t-2 border-gray-300">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      {/* Logo + Copyright */}
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-6 inline-flex items-center">
            <Logo width="140px" />
          </div>
          <p className="text-sm text-gray-600">
  &copy; {new Date().getFullYear()} MemorysClick. All rights reserved. <br />
  Crafting memories, one click at a time. Thank you for being part of our journey. 
  <span className="block mt-2">Stay connected with us for the latest updates and exciting offers!</span>
</p>
        </div>
      </div>

      {/* Company */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800 tracking-wider">
            Company
          </h3>
          <ul>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Features
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Pricing
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Support */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800 tracking-wider">
            Support
          </h3>
          <ul>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Account
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Help
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <div className="h-full">
          <h3 className="mb-4 text-sm font-semibold uppercase text-gray-800 tracking-wider">
            Legal
          </h3>
          <ul>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  );
  
}

export default Footer