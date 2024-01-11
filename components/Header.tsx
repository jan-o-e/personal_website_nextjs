"use client";

import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const [showInterestsMenu, setShowInterestsMenu] = useState(false)

  const handleMenuClose = () => {
    setShowInterestsMenu(false)
  }

  const handleMenuEnter = () => {
    setShowInterestsMenu(true)
  }

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/' && link.href !== '/research' && link.href !== '/projects')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
      <div
        className="relative inline-block text-left"
      >
        <button
          onMouseEnter={handleMenuEnter}
          className="font-medium text-gray-900 dark:text-gray-100 focus:outline-none"
        >
          Interests
        </button>
        {showInterestsMenu && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuClose}
          >
            <div className="py-1">
              <Link href="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Research
              </Link>
              <Link href="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Projects
              </Link>
            </div>
          </div>
        )}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
