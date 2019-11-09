import gql from 'graphql-tag'

const REGISTER = gql`
  mutation register($id: ID!) {
    createRegisteredTime(data: { user: $id }) {
      id
    }
  }
`

export default REGISTER
