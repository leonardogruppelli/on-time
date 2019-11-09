import gql from 'graphql-tag'

const USERS = gql`
  query users {
    allUsers {
      id
      name
      email
      role
    }
  }
`

export default USERS
