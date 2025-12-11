import React from 'react'

export default function OrgCard({ name, email }: { name: string; email: string }) {
  return (
    <article className="p-5 border rounded-xl-2 shadow-card bg-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{email}</p>

      <div className="mt-4 flex gap-3">
        <button className="px-3 py-2 rounded-md bg-black text-white hover:bg-gray-800 text-sm">
          Open
        </button>
        <button className="px-3 py-2 rounded-md border hover:bg-gray-100 text-sm">
          Delete
        </button>
      </div>
    </article>
  )
}