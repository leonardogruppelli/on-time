import gql from 'graphql-tag'

const SIGN_IN = gql`
  mutation signin($email: String! $password: String!) {
    signin(email: $email password: $password) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`

export default SIGN_IN
