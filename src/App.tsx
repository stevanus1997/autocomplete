import { useState } from "react";
import "./App.css";
import AutoComplete from "./components/AutoComplete";

type TOption = {
  label: string;
  id: string;
};

const options: TOption[] = [
  {
    label: "Option 1",
    id: "1",
  },
  {
    label: "Option 2",
    id: "2",
  },
  {
    label: "Option 3",
    id: "3",
  },
  {
    label: "Option 4 Test With Long Text",
    id: "4",
  },
  {
    label: "Option 5 Test With Long Text",
    id: "5",
  },
  {
    label: "Option 3 Test With Long Text",
    id: "6",
  },
  {
    label: "Option 2 Test With Long Text",
    id: "7",
  },
  {
    label: "Option 7 Test With Long Text",
    id: "8",
  },
  {
    label: "Option 8 Test With Long Text",
    id: "9",
  },
  {
    label: "Option 9 Test With Long Text",
    id: "10",
  },
  {
    label: "Option 10 Test With Long Text",
    id: "11",
  },
  {
    label: "Option 11 Test With Long Text",
    id: "12",
  },
  {
    label: "Option 12 Test With Long Text",
    id: "13",
  },
  {
    label: "Option 13 Test With Long Text",
    id: "14",
  },
  {
    label: "Option 14 Test With Long Text",
    id: "15",
  },
  {
    label: "Option 15 Test With Long Text",
    id: "16",
  },
  {
    label: "Option 16 Test With Long Text",
    id: "17",
  },
  {
    label: "Option 17 Test With Long Text",
    id: "18",
  },
  {
    label: "Option 18 Test With Long Text",
    id: "19",
  },
  {
    label: "Option 19 Test With Long Text",
    id: "20",
  },
  {
    label: "Option 20 Test With Long Text",
    id: "21",
  },
];

function App() {
  const [value, setValue] = useState<TOption[]>([]);

  return (
    <>
      <AutoComplete
        options={options}
        value={value}
        getOptionLabel={(option) => option.label}
        isMultiple
        onChange={(newValue) => setValue(newValue)}
        usePortal={false}
      />
    </>
  );
}

export default App;
