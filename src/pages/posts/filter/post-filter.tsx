import type { DropdownOption } from "../PostsPage.tsx";
import Dropdown from "./dropdown-filter.tsx";
import Search from "./search-input.tsx";

interface FilterProps {
  searchValue: string;
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: DropdownOption;
  onSelectCategory: React.Dispatch<React.SetStateAction<DropdownOption>>;
  selectedAuthors: DropdownOption;
  onSelectAuthors: React.Dispatch<React.SetStateAction<DropdownOption>>;
  selectedNews: DropdownOption;
  onSelectNews: React.Dispatch<React.SetStateAction<DropdownOption>>;
  categoryOptions: DropdownOption[];
  authorOptions: DropdownOption[];
  sortOptions: DropdownOption[];
}

export const Filter = (props: FilterProps) => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
      <Search
        searchValue={props.searchValue}
        setSearchValue={props.onSearchValueChange}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Dropdown
          value={props.selectedCategory}
          options={props.categoryOptions}
          onSelectOption={props.onSelectCategory}
        />
        <Dropdown
          value={props.selectedAuthors}
          options={props.authorOptions}
          onSelectOption={props.onSelectAuthors}
        />
        <Dropdown
          value={props.selectedNews}
          options={props.sortOptions}
          onSelectOption={props.onSelectNews}
        />
      </div>
    </div>
  );
};
