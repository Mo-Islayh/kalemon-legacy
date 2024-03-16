import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBySelect = ({ options, onChange }: any) => {
  const onChangeOption = (value: any) => {
    onChange && onChange(value);
  };
  return (
    <Select onValueChange={onChangeOption}>
      <SelectTrigger onChange={onChangeOption} className="h-full">
        <SelectValue placeholder={options[0].text} onChange={onChangeOption} />
      </SelectTrigger>
      <SelectContent onChange={onChangeOption}>
        <SelectGroup defaultValue={options[0].value} onChange={onChangeOption}>
          {options &&
            options.map((ele: any, key: number) => {
              return (
                <SelectItem
                  value={ele.value}
                  key={key}
                  onChange={onChangeOption}
                >
                  {ele.text}
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortBySelect;
