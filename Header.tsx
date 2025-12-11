import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-medium">Frontend Assignment</h2>
        <p className="text-xs text-gray-500">Desktop UI</p>
      </div>

      <nav>
        <ul className="flex gap-6 text-sm">
          <li><a href="#" className="hover:underline">Docs</a></li>
          <li><a href="#" className="hover:underline">Repo</a></li>
        </ul>
      </nav>
    </header>
  )
}