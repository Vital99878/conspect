import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { nextPage, prevPage, selectBook } from './bookSlice'
import styles from './Book.module.css'

export default function Book() {
  const page = useAppSelector(selectBook)
  const dispatch = useAppDispatch()
  const [incrementPage, setIncrementPage] = useState(1)

  return (
    <div className={styles.bookWrapper}>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(prevPage())}
        >
          -
        </button>
        <span className={styles.value}>{page}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(nextPage())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementPage}
          onChange={(e) => setIncrementPage(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
