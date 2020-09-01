import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// Patron componente de orden superior: una funcion recibe un componente como parametro y devuelve otro componente con mejoras o valores inyectados
const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const withPhotos = graphql(GET_PHOTOS)
