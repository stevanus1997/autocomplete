import ReactDOM from "react-dom";

import { IoIosArrowDown } from "react-icons/io";

import DropdownContent from "./DropdownContent";
import useAutoComplete from "./hooks";
import "./style.css";
import { TAutoComplete } from "./types";
import Option from "./Option";

/**
 * AutoComplete component for rendering a dropdown with auto-complete functionality.
 *
 * @template T
 * @param {TAutoComplete<T>} props - The props for the AutoComplete component.
 * @returns {JSX.Element} The rendered AutoComplete component.
 */
const AutoComplete = <T,>({
  options,
  usePortal = true,
  isMultiple,
  value,
  useSearch = true,
  getOptionLabel,
  renderOption,
  onChange,
}: TAutoComplete<T>): JSX.Element => {
  const { ref, state, handler } = useAutoComplete<T>({
    isMultiple,
    value,
    onChange,
    usePortal,
  });

  // Renders the dropdown content either within a portal or inline.
  const renderDropdownContent = () => {
    const dropdownContent = (
      <DropdownContent
        options={options}
        search={state.search}
        handleClearSearch={handler.handleClearSearch}
        handleSetSearch={handler.handleSetSearch}
        dropdownContentRef={ref.dropdownContentRef}
        handleSetValue={handler.handleSetValue}
        value={value}
        getOptionLabel={getOptionLabel}
        isMultiple={isMultiple}
        useSearch={useSearch}
      />
    );

    if (state.showSearch) {
      if (usePortal) {
        return ReactDOM.createPortal(dropdownContent, ref.portalRef.current);
      }

      return dropdownContent;
    }
  };

  // Renders the selected value(s) for display in the input area.
  const renderValue = () => {
    if (!isMultiple) {
      return getOptionLabel(value);
    }

    if (isMultiple) {
      return value.map((value, index) =>
        renderOption != null ? (
          <div key={index}>
            {renderOption(value, handler.handleRemoveValue)}
          </div>
        ) : (
          <Option
            option={getOptionLabel(value as T)}
            handleRemove={() => {
              handler.handleRemoveValue(value);
            }}
            key={index}
          />
        )
      );
    }
  };

  return (
    <section>
      <div className="w-full wrapper relative" ref={ref.autoCompleteRef}>
        <div className="p-3">
          <button
            className="w-full container-result flex rounded-lg border-2 justify-between items-center px-3 min-h-11 cursor-pointer"
            onClick={handler.handleToggleSearch}
          >
            <div className="flex gap-3 flex-wrap">{renderValue()}</div>

            <IoIosArrowDown />
          </button>
        </div>
        {renderDropdownContent()}
      </div>
    </section>
  );
};

export default AutoComplete;
