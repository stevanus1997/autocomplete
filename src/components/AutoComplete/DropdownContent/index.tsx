import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

import { isEqual } from "underscore";

import { TDropdownContent } from "../types";

const highlightText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="bg-lime-300">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const DropdownContent = <T,>({
  options,
  search,
  dropdownContentRef,
  value,
  isMultiple,
  useSearch,
  handleClearSearch,
  handleSetSearch,
  handleSetValue,
  getOptionLabel,
}: TDropdownContent<T>) => (
  <section className="px-3">
    <div
      className="drop-shadow-sm w-full mt-3 rounded-lg border-2 shadow-2xl absolute bg-white left-0 right-0"
      ref={dropdownContentRef}
    >
      {useSearch && (
        <>
          <div className="flex items-center py-2 mx-3">
            <CiSearch />
            <input
              type="text"
              className="w-full outline-none ml-2 text-xs border-none bg-transparent"
              onChange={handleSetSearch}
              value={search}
            />

            {search && (
              <IoIosCloseCircle
                onClick={handleClearSearch}
                className="cursor-pointer"
              />
            )}
          </div>
          <hr />
        </>
      )}
      <ul className="text-start max-h-96 overflow-y-scroll">
        {options
          .filter((option) =>
            getOptionLabel(option)
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          )
          .map((option, key) => (
            <li
              key={key}
              className={`text-sm px-3 py-2 cursor-pointer option ${
                isMultiple &&
                (value as T[]).find((optionValue) =>
                  isEqual(optionValue, option)
                ) &&
                "bg-lime-500"
              }`}
              onClick={() => handleSetValue(option)}
            >
              {highlightText(getOptionLabel(option), search)}
            </li>
          ))}
      </ul>
    </div>
  </section>
);

export default DropdownContent;
