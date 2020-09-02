import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButon'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>USER</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </>
  )
}
