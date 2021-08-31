import React from 'react'
import './CssTags.scss'
import pet from '../../img/pet.jpeg'

const CssTags: React.FC = () => {
  // const image = import('../../img/pet.jpeg')
  return (
    <section className="tags">
      <details className="details">
        <summary>Details</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus vero, distinctio corporis aliquam id.
      </details>
      <figure>
        <img src={pet} alt="The Pulpit Rock" width="304" height="228" />
        <figcaption>Image label - The Pulpit Rock, Norway.</figcaption>
      </figure>
    </section>
  )
}

export default CssTags
