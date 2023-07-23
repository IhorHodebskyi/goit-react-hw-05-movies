const SearchMovieForm = ({
  setSearchParams,
  searchValue,
  getSearchMovie,
  firstRender,
}) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
    firstRender.current = false;
  };
  const handleSubmit = event => {
    event.preventDefault();
    getSearchMovie(searchValue);
  };

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
