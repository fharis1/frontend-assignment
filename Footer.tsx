import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 text-sm text-gray-500">
      <div className="flex justify-between">
        <span>Frontend Assignment</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}