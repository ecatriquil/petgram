import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

// Permite escribir las queries con graphql
import { gql } from 'apollo-boost'
// Componente que permite utilizar el patron de render Props
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!){
        photo(id:$id){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (data) {
    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }
  if (error) {
    return <p>Error</p>
  }
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>
)
