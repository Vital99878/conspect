import React, { MouseEventHandler, useEffect, useRef } from 'react';
import './domEvent.scss';

const DomEvent = () => {
  // let count = 0
  function doSmth(event) {
    // console.log(++count)
    event.preventDefault();
    // event.stopPropagation()
    // event.stopImmediatePropagation()
    // console.log(event.target)
    console.log(event.currentTarget);

    const child2 = event.currentTarget;
    // if (child2.className === 'child-2') console.log('child 2')
  }

  function doOutside(event) {
    // console.log('event.currentTarget: ', event.currentTarget)
    // const isClosest = button.closest('.root')
    // isClosest ? console.log('inner') : console.log('outside')
  }

  function checkRoot(evt, clazz) {
    const isEl = evt.target.matches(clazz);
    const isParent = evt.target.closest(clazz);
    if (isEl || isParent) return;
  }

  useEffect(() => {
    const f = (evt) => checkRoot(evt, '.child-2');
    document.addEventListener('click', f);
    return () => document.removeEventListener('click', f);
  }, []);

  const rootRef = useRef(null);

  function getRootEl(evt) {
    // console.log('evt.currentTarget.offsetTop: ', evt.currentTarget.offsetTop)
    const currentEl = evt.currentTarget;
    // console.log('document.body.clientHeight: ', document.body.clientHeight)
    const isParent = evt.target.closest('.root');
    console.log('Parent clientHeight: ', isParent.clientHeight);
    // console.log('currentEl: ', 'currentEl.offsetHeight: ', currentEl.offsetHeight);
  }

  return (
    <div>
      <h2>Dowm Events</h2>
      <div className="root" ref={rootRef}>
        root div
        <div className={'child-1'}>
          Child 1
          <div className={'child-2'} onClick={getRootEl}>
            Child 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomEvent;
