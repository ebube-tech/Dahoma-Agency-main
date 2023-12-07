import React from 'react'
import Navbar from '../home/components/Navbar'
import BlogContent from './Ccomponents/BlogContent'
//import BlogInner from './Ccomponents/BlogInner'
import Privacy from './Ccomponents/Privacy'

function Blog() {
  return (
    <div>
        <Navbar />
        <BlogContent />
        <Privacy />

    </div>
  )
}

export default Blog