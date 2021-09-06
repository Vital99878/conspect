import React, { useState, ReactElement } from 'react'
import './TestTS.css'

const TestTS: React.FC = () => {
  enum Role {
    Admin,
    User,
    NewUser,
  }

  return <div className="test-typescript">Test Typescript</div>
}

export default TestTS
