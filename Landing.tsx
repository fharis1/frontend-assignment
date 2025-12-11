import React from 'react'
import Header from '../shared/Header'
import OrgCard from '../shared/OrgCard'
import LoginForm from '../shared/LoginForm'
import Footer from '../shared/Footer'

export default function Landing() {
  return (
    <>
      <Header />

      <section className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold">Organization Management</h1>
          <p className="mt-3 text-sm text-gray-600">
            Manage organizations, admins, and settings.
          </p>

          <div className="mt-6 grid gap-4">
            <OrgCard name="Sample Org" email="admin@sample.com" />
            <OrgCard name="Another Org" email="team@org.com" />
          </div>
        </div>

        <div>
          <LoginForm />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl-2 shadow-card">Block 1</div>
        <div className="p-6 border rounded-xl-2 shadow-card">Block 2</div>
        <div className="p-6 border rounded-xl-2 shadow-card">Block 3</div>
      </section>

      <Footer />
    </>
  )
}