import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

const Header = (props) => {
  const { count } = props

  return (
    <header>
      {count}
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/"><a>Contact</a></Link>
        </li>
      </ul>
    </header>
  )
}

const mapStateToProps = store => ({
  count: store.count.count
})

export default connect(mapStateToProps)(Header)