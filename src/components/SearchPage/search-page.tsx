import React, { useState, useRef, FormEvent, useEffect, CSSProperties } from 'react'
import './search-page.scss'
import testPage from '../../pages/test/test-page'
import { useSearchHistory } from './hooks/useSeachHistory'
import { HistorySearch } from './utils/history'

type Props = {
  prop?: string
  children?: React.ReactElement
}
type Dictionary = {
  [k in string]: boolean
}

const SearchPage: React.FC<Props> = ({}) => {
  const dataForAutocomplete = ['first', 'second', 'third']
  // todo сохранять историю запросов
  // todo показываеть, что на странице есть поиск!
  // todo debounce
  const [search, setSearch] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [autocomplete, setAutocomplete] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  // const {searchHistory, addItem, deleteItem} = useSearchHistory(5)

  const dictionaryRef = useRef<Dictionary>({})
  const searchHistoryRef = useRef(new HistorySearch())

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
    setSearch(() => evt.target.value)
  }

  function addToDict(fraze: string) {
    if (dictionaryRef.current[fraze]) return
    dictionaryRef.current[fraze] = true
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault()
    setSearch('')
    setIsShow(false)
    addToDict(search.trim())
    searchHistoryRef.current.add(search.trim())
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keydown', show)
    return () => document.removeEventListener('keydown', show)
  }, [])

  // autocomplete
  useEffect(() => {
    if (!search) return setAutocomplete([])
    setAutocomplete(() => dataForAutocomplete.filter((item) => item.indexOf(search) > -1))
  }, [search])

  // console.log('getHistory(): ', searchHistoryRef.current.getHistory())

  const historyS = search.length <= 1 && (
    <ul className={'auto'}>
      {searchHistoryRef.current.getHistory().map((item, index) => (
        <li onClick={() => searchHistoryRef.current.delete(index)} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )

  if (!isShow) return null
  return (
    <form action="" onSubmit={onSubmit} className={'search-page'} autoComplete={'on'}>
      <input value={search} type={'text'} onChange={typing} autoFocus={true} ref={inputRef} />
      {historyS}
    </form>
  )
}

export default SearchPage
