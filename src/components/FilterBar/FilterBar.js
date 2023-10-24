const FilterBar = ({ filter, onChangeFilter }) => {
  return (
    <input
      placeholder="Filter"
      type="text"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    ></input>
  );
};

export default FilterBar;
