'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Next.js Image component
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signIn } from 'next-auth/react'
import { Input } from '../ui/input'

const navItems = [
  { name: 'Shop', href: '/' },
  { name: 'Sales', href: '/sales' },
  { name: 'New Arrival', href: '/arrival' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                <Image src="/SHOP.CO.png" alt="Shop Logo" width={80} height={50} />
              </Link>
            </div>
           
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal ${
                    pathname === item.href
                      ? 'border-primary text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center justify-center gap-2">
          <div className="flex bg-zinc-100 border items-center justify-center rounded-2xl px-1  w-96">
            <Search/>
          <Input className='border-none ' placeholder='Serach...' type='text' />
          </div>
              <Image src="/Frame.png" alt=" Shop" width={20} height={40} />
              <Image src="/Frame1.png" alt=" Shop" width={20} height={40} />
              
              </div>
            </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="sm:hidden" align="end">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 text-base font-medium ${
                        pathname === item.href
                          ? 'text-primary bg-gray-50'
                          : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Button variant="outline" className="w-full justify-center">
                    Sign in
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
