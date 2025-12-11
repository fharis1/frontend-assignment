import React, { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Demo only — no backend connected")
  }

  return (
    <form onSubmit={onSubmit} className="p-6 border rounded-xl-2 shadow-card bg-white">
      <h4 className="text-md font-medium">Admin Login</h4>

      <label className="block mt-4">
        <span className="text-sm">Email</span>
        <input
          className="mt-1 w-full p-2 border rounded"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="block mt-4">
        <span className="text-sm">Password</span>
        <input
          className="mt-1 w-full p-2 border rounded"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        className="mt-5 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Sign in
      </button>
    </form>
  )
}