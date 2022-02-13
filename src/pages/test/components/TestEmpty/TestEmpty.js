import React from 'react'
import './TestEmpty.css'

const TestEmpty = () => {
  {
    function parentheses(str) {
      if (str.length % 2 !== 0) return false
      let count_1 = 0
      let count_2 = 0
      let count_3 = 0
      const cash = [0, 0, 0]
      for (const ch of str) {
        if (ch === '(') {
          if (count_2 !== 0) cash[0] = count_2
          count_1++
        }
        if (ch === '{') count_2++
        if (ch === '[') count_3++
        if (ch === ')') --count_1
        if (ch === '}') --count_2
        if (ch === ']') --count_3
      }
      return count_1 === 0 && count_2 === 0 && count_3 === 0
    }

    // console.log(parentheses('({()()(})())'))
    // console.log(parentheses('({})'))
    // console.log(parentheses('(({()()()()}))'))
    // console.log(parentheses('()()()[(]'))
  }

  return (
    <div className="testEmpty">
      <h2>Test everything</h2>
    </div>
  )
}

export default TestEmpty
