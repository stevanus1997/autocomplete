/**
 * Interface for AutoComplete props when multiple selection is enabled.
 *
 * @template T
 * @property {true} isMultiple - Indicates if multiple selections are allowed.
 * @property {T[]} value - The selected values.
 * @property {(option: T[]) => void} onChange - Callback for when the value changes.
 * @property {(option: T[]) => JSX.Element} [renderOption] - Custom render function for the selected option(s).
 */
type TOptionMultipleValue<T> = {
  isMultiple: true;
  value: T[];
  onChange: (option: T[]) => void;
  renderOption?: (
    option: T,
    handleRemoveValue: (option: T) => void
  ) => JSX.Element;
};

/**
 * Interface for AutoComplete props when single selection is enabled.
 *
 * @template T
 * @property {false} isMultiple - Indicates if only a single selection is allowed.
 * @property {T} value - The selected value.
 * @property {(option: T) => void} onChange - Callback for when the value changes.
 * @property {(option: T) => JSX.Element} [renderOption] - Custom render function for the selected option.
 */
type TOptionSingleValue<T> = {
  isMultiple: false;
  value: T;
  onChange: (option: T) => void;
  renderOption?: (option: T) => JSX.Element;
};

/**
 * Type representing either multiple or single selection props for AutoComplete.
 *
 * @template T
 */
type TOptionValue<T> = TOptionMultipleValue<T> | TOptionSingleValue<T>;

/**
 * Interface for AutoComplete component props.
 *
 * @template T
 * @property {T[]} options - The available options for the autocomplete.
 * @property {boolean} [usePortal] - Whether to render the dropdown content in a portal.
 * @property {(option: T) => string} getOptionLabel - Function to get the label of an option.
 * @property {boolean} [useSearch] - Whether to enable search functionality.
 */
export type TAutoComplete<T> = {
  options: T[];
  usePortal?: boolean;
  getOptionLabel: (option: T) => string;
  useSearch?: boolean;
} & TOptionValue<T>;

/**
 * Interface for DropdownContent component props.
 *
 * @template T
 * @property {string} search - The current search input.
 * @property {React.RefObject<HTMLDivElement>} dropdownContentRef - Reference to the dropdown content element.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} handleSetSearch - Callback for setting the search input.
 * @property {() => void} handleClearSearch - Callback for clearing the search input.
 * @property {(option: T) => void} handleSetValue - Callback for setting the selected value.
 */
export type TDropdownContent<T> = {
  search: string;
  dropdownContentRef: React.RefObject<HTMLDivElement>;
  handleSetSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  handleSetValue: (option: T) => void;
} & Pick<
  TAutoComplete<T>,
  "options" | "isMultiple" | "getOptionLabel" | "value" | "useSearch"
>;

/**
 * Interface for AutoComplete hook props.
 *
 * @template T
 */
export type TAutoCompleteHook<T> = Pick<
  TAutoComplete<T>,
  "onChange" | "usePortal" | "value" | "isMultiple"
>;
