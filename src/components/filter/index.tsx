import type { DropdownInterface } from "@/pages/Blog";
import Dropdown from "./dropdown";
import Search from "./search";

interface FilterProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: DropdownInterface;
  setSelectedCategory: React.Dispatch<React.SetStateAction<DropdownInterface>>;
  selectedAuthors: DropdownInterface;
  setSelectedAuthors: React.Dispatch<React.SetStateAction<DropdownInterface>>;
  selectedNews: DropdownInterface;
  setSelectedNews: React.Dispatch<React.SetStateAction<DropdownInterface>>;
  categoryOptions: DropdownInterface[];
  authorOptions: DropdownInterface[];
  sortOptions: DropdownInterface[];
}

const Filter = (props: FilterProps) => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
      <Search
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Dropdown
          option={props.selectedCategory}
          options={props.categoryOptions}
          setSelectedOption={props.setSelectedCategory}
        />
        <Dropdown
          option={props.selectedAuthors}
          options={props.authorOptions}
          setSelectedOption={props.setSelectedAuthors}
        />
        <Dropdown
          option={props.selectedNews}
          options={props.sortOptions}
          setSelectedOption={props.setSelectedNews}
        />
      </div>
    </div>
  );
};

export default Filter;
