import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Check, ChevronDown} from "lucide-react";
import {Command, CommandGroup, CommandItem, CommandList,} from "@/components/ui/command.tsx";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover.tsx";
import {cn} from "@/lib/utils.ts";
import type {DropdownOption} from "@/posts/PostsPage.tsx";

interface DropdownProps {
  value: DropdownOption;
  options: DropdownOption[];
  onSelectOption: (option: DropdownOption) => void;
}

const Dropdown = ({ value, options, onSelectOption }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-[180px] flex items-center justify-between"
        >
          {value.label}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    onSelectOption(item);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value.value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
