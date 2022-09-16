import { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
}
