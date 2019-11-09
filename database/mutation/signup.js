import gql from 'graphql-tag'

const SIGN_UP = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      data: { name: $name, email: $email, password: $password, role: USER }
    ) {
      id
    }
  }
`

export default SIGN_UP
