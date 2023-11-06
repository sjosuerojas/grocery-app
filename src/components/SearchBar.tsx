interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (e: string) => void;
  onInStockOnlyChange: (e: boolean) => void;
}

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    onFilterTextChange(e.target.value);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInStockOnlyChange(e.target.checked);

  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={handleChangeInput}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleChangeCheckbox}
        />
        <br />
        Only show prodcuts in stock
      </label>
    </form>
  );
}
