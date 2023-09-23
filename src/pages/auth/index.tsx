import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

type Props = {}

export default function AuthPage({}: Props) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl m-auto">
        <Navbar />
      </div>
    </div>
  )
}
