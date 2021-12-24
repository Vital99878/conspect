import React from 'react'
import './CssTags.scss'

const CssTags: React.FC = () => {
  // const image = import('../../img/pet.jpeg')
  return (
    <section className="tags">
      <details className="details">
        <summary>Details</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus vero, distinctio corporis aliquam id.
      </details>
      <figure>
        <figcaption>Image label - The Pulpit Rock, Norway.</figcaption>
      </figure>
    </section>
  )
}

export default CssTags
