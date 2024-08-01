import RegistrationForm from '@/components/societyDetails/RegistrationForm'
import UserOwnSociety from '@/components/societyDetails/UserOwnSociety'
import React from 'react'

const Society = () => {
    // will call API at mount. If not available then register else edit and delete actions
  return (
    <main>
        <section className='society__details'>society__details</section>
        <section className='society__events'>society__events</section>

        <RegistrationForm />
        <UserOwnSociety />
    </main>
  )
}

export default Society