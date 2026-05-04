function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search projects..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
export default SearchBar;