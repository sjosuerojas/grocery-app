import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

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
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          placeholder="Search the products"
          value={filterText}
          onChange={handleChangeInput}
        />
      </TextField.Root>
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
