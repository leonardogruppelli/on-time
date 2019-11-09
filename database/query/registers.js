import gql from 'graphql-tag'

const REGISTERS = gql`
  query registers {
    allRegisteredTime {
      id
      registered_time
      user {
        name
        email
      }
    }
  }
`

export default REGISTERS
