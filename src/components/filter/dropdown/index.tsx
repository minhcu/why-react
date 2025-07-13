import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { DropdownInterface } from "@/pages/Blog";

interface DropdownProps {
  option: DropdownInterface;
  options: DropdownInterface[];
  setSelectedOption: (option: DropdownInterface) => void;
}

const Dropdown = ({ option, options, setSelectedOption }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(option.value);

  useEffect(() => {
    setValue(option.value);
  }, [option]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-[180px] flex items-center justify-between"
        >
          {option.label}
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
                    setValue(item.value);
                    setSelectedOption(item);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
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
