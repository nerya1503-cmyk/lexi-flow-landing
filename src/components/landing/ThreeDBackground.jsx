import React from 'react'

export default function ThreeDBackground() {
  return (
    <div aria-hidden="true">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-purple-900/40"></div>
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[60rem] h-[60rem] rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>
    </div>
  )
}
