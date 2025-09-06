import React from 'react'

export function Button({ children, onClick, primary, outline, variant, big }){
  const base = 'rounded-xl px-6 py-3 font-semibold transition-all duration-300'
  const sizes = big ? ' text-xl px-10 py-5 ' : ''
  let cls = base + sizes
  if (primary) cls += ' bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25'
  else if (outline || variant === 'ghost') cls += ' border border-white/20 hover:bg-white/10 text-gray-200'
  else cls += ' bg-white/10 hover:bg-white/20'
  return <button onClick={onClick} className={cls}>{children}</button>
}
