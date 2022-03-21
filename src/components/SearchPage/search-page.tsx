import React, { useState, useRef, FormEvent, useEffect, CSSProperties } from 'react'
import './search-page.scss'

type Props = {
  prop?: string
  children?: React.ReactElement
}
type Dictionary = {
  [k in string]: boolean
}

const SearchPage: React.FC<Props> = ({}) => {
  // todo сохранять историю запросов
  // todo показываеть, что на странице есть поиск!
  // todo debounce

  const [search, setSearch] = useState('')
  const [isShow, setIsShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dictionaryRef = useRef<Dictionary>({})

  function show(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setIsShow(false)
      return
    }

    if (evt.key.length > 1) return

    if (inputRef.current) inputRef.current.focus()
    setIsShow(true)
  }

  function typing(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearch(evt.target.value)
  }

  function addToDict(fraze: string) {
    if (dictionaryRef.current[fraze]) return
    dictionaryRef.current[fraze] = true
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log(`Sort by ${search.trim()}`)
    setSearch('')
    setIsShow(false)
    addToDict(search.trim())
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keydown', show)
    return () => document.removeEventListener('keydown', show)
  }, [])

  if (!isShow) return null
  return (
    <form action="" onSubmit={onSubmit} className={'search-page'} autoComplete={'on'}>
      <input value={search} type={'text'} onChange={typing} autoFocus={true} ref={inputRef} />
      <button onClick={() => console.log('inputRef.current: ', dictionaryRef.current)}>log dict</button>
    </form>
  )
}

export default SearchPage