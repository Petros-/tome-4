import React from 'react'
import TopNav from './TopNav'
import Body from './Body'
import EmailForm from './auth/EmailForm'

function Container() {
  return (
    <div className="flex flex-col min-h-screen w-full border border-red-500 p-0">
      <TopNav /> 
      <div className="flex-grow">

        <Body />
        <EmailForm />
      </div>
    </div>
  )
}

export default Container
