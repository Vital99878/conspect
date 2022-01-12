import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Counter } from './patterns'

const DesignPatternPage: React.FC = () => {
  const counter = new Counter()
  const counter2 = new Counter()
  counter.incCounter()
  counter.incCounter()
  counter2.incCounter()
  counter2.incCounter()
  // counter2.inc()
  console.log(counter.count)
  console.log(counter2.count)
  console.log(counter === counter2)

  return (
    <Layout pageHeading="Design pattern">
      <main className="registration-page"></main>
    </Layout>
  )
}

export default DesignPatternPage
