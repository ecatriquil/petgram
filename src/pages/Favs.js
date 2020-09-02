import React from 'react'
import { Helmet } from 'react-helmet'
import { FavsWithQuery } from '../container/GetFavorites'

export default () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus favoritos</title>
        <meta name='description' content='Aca vas a ver tus favoritos' />
      </Helmet>
      <h1>FAVS</h1>
      <FavsWithQuery />
    </>
  )
}
