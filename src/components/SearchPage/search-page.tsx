import React, { useState, useRef, FormEvent, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { HistorySearch } from './utils/SearchHistory';
import './search-page.scss';

type Props = {
  prop?: string;
  children?: React.ReactElement;
};
type Dictionary = {
  [k in string]: boolean;
};

const SearchPage: React.FC<Props> = ({}) => {
  const dataForAutocomplete = ['first', 'second', 'third'];
  // todo показываеть, что на странице есть поиск!
  // todo debounce
  const [search, setSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>(HistorySearch.createHistory(5));
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const dictionaryRef = useRef<Dictionary>({});

  HistorySearch.createHistory(5);
  // console.log('searchHistory: ', searchHistory)

  function show(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setIsShow(false);
      return;
    }

    if (evt.key.length > 1) return;

    if (inputRef.current) inputRef.current.focus();
    setIsShow(true);
  }

  function typing(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearch(() => evt.target.value);
  }

  function addToDict(fraze: string) {
    if (dictionaryRef.current[fraze]) return;
    dictionaryRef.current[fraze] = true;
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();

    HistorySearch.add(search.trim());
    addToDict(search.trim());

    setSearch('');
    setIsShow(false);
    setSearchHistory(HistorySearch.getHistory());
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keydown', show);
    return () => document.removeEventListener('keydown', show);
  }, []);

  // autocomplete
  useEffect(() => {
    if (!search) return setAutocomplete([]);
    setAutocomplete(() => dataForAutocomplete.filter((item) => item.indexOf(search) > -1));
  }, [search]);

  const historyS = (
    <ul className={'auto'}>
      {searchHistory.map((item, index) => {
        function deleteItem() {
          HistorySearch.delete(item);
          setSearchHistory(() => HistorySearch.getHistory());
        }
        return (
          <li key={item} className={'history-item'}>
            <div onClick={deleteItem}>{item}</div>
          </li>
        );
      })}
    </ul>
  );

  // if (!isShow) return null

  return (
    <form action="" onSubmit={onSubmit} className={'search-page'} autoComplete={'on'}>
      <Breadcrumbs />
      <input value={search} type={'text'} onChange={typing} autoFocus={true} ref={inputRef} />
      {historyS}
    </form>
  );
};

export default SearchPage;
