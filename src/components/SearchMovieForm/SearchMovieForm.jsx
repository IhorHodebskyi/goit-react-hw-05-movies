const SearchMovieForm = ({ setSearchParams, searchValue, getSearchMovie }) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    getSearchMovie(searchValue);
  };
  console.log(searchValue);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovieForm;
