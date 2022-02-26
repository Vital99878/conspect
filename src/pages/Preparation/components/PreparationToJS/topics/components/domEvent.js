import React, { MouseEventHandler, useEffect } from 'react'
import './domEvent.scss'

const DomEvent = () => {
  // let count = 0
  function doSmth(event) {
    // console.log(++count)
    event.preventDefault()
    event.stopPropagation()
    // event.stopImmediatePropagation()
    // console.log(event.target)
    console.log(event.currentTarget)

    const child2 = event.currentTarget
    // if (child2.className === 'child-2') console.log('child 2')
  }

  useEffect(() => {
    const child1 = document.querySelector('.child-1')
    const child2 = document.querySelector('.child-2')
    const button = document.querySelector('.button')
    // console.log('child2: ', child2)
    child1.addEventListener('click', doSmth, {
      capture: false,
    })
    child2.addEventListener('click', doSmth, {
      capture: false,
    })
    button.addEventListener('click', doSmth, {
      capture: false,
    })
  }, [])

  return (
    <>
      <h2>Dowm Events</h2>
      <div className="root">
        root div
        <div className={'child-1'}>
          Child 1
          <div className={'child-2'}>
            Child 2
            <button className={'button'} onClick={() => console.log('second event')}>
              Click
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DomEvent
