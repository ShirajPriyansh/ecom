import React from 'react'
import categories from '../../categories.json'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <>
    <Categories categories={categories} />
  </>
  )
}

export default Home