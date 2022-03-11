import React, { MouseEventHandler, useEffect } from 'react'
import './domEvent.scss'

const DomEvent = () => {
  // let count = 0
  function doSmth(event) {
    // console.log(++count)
    event.preventDefault()
    // event.stopPropagation()
    // event.stopImmediatePropagation()
    // console.log(event.target)
    console.log(event.currentTarget)

    const child2 = event.currentTarget
    // if (child2.className === 'child-2') console.log('child 2')
  }

  // useEffect(() => {
  //   const child1 = document.querySelector('.child-1')
  //   const child2 = document.querySelector('.child-2')
  //   const button = document.querySelector('.button')
  //   // console.log('child2: ', child2)
  //   child1.addEventListener('click', doSmth, {
  //     capture: false,
  //   })
  //   child2.addEventListener('click', doSmth, {
  //     capture: false,
  //   })
  //   button.addEventListener('click', doSmth, {
  //     capture: false,
  //   })
  // }, [])

  function doOutside(event) {
    // console.log('event.currentTarget: ', event.currentTarget)
    // const isClosest = button.closest('.root')
    // isClosest ? console.log('inner') : console.log('outside')
  }
  function checkRoot(evt, clazz) {
    const isEl = evt.target.matches(clazz)
    const isParent = evt.target.closest(clazz)
    if (isEl || isParent) return
    console.log('логика для закрытия модального окна')
  }
  useEffect(() => {
    const f = (evt) => checkRoot(evt, '.child-2')
    document.addEventListener('click', f)
    return () => document.removeEventListener('click', f)
  }, [])

  return (
    <>
      <h2>Dowm Events</h2>
      <div className="root">
        root div
        <div className={'child-1'}>
          Child 1
          <div className={'child-2'} onClick={doOutside}>
            Child 2<button className={'child-3 button'}>Click</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DomEvent
