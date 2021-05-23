import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Book.module.css';
import { testProps } from '../../types/bookProps';

interface ForFn {
  <Type>(p:Type): Type
}

const Test:FC<testProps > = () => {
  function any<P>(p: P): P {
    return p
  }
  function identity<Type>(page: Type): Type {
    return page
  }

  const getNumber: ForFn = (page) => { return page }

  const name = any<number>(6)
  const number = any({ pageNumber: 6 })

  return (
    <div className={styles.bookWrapper} >
      {name}
      {number}
    </div>
  )
}

export default Test
