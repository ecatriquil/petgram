/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </div>
  )
}
