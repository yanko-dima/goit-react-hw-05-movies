import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter film name!');
      setQuery('');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.searchBar}>
      <form className={css.searchForm} action="submit" onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder={'Search films'}
          onChange={handleChange}
          value={query}
          autoComplete="off"
          autoFocus
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
