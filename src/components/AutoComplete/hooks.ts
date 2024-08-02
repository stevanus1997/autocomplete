import { useEffect, useRef, useState } from "react";

import _, { isEqual } from "underscore";
import { TAutoCompleteHook } from "./types";

const useAutoComplete = <T>({
  usePortal = false,
  value,
  isMultiple,
  onChange,
}: TAutoCompleteHook<T>) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // this used to support click outside
  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  // this used to create portal
  const portalRef = useRef<HTMLDivElement>(document.createElement("div"));

  // Close the dropdown when clicking outside
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      autoCompleteRef.current &&
      !autoCompleteRef.current.contains(e.target as Node) &&
      !dropdownContentRef.current?.contains(e.target as Node)
    ) {
      setShowSearch(false);
    }
  };

  const handleCloseSearch = () => setShowSearch(false);

  const handleToggleSearch = () => setShowSearch(!showSearch);

  const handleClearSearch = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    setSearch("");
  };

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  // this function is used to set the value of the input
  const handleSetValue = (option: T) => {
    if (isMultiple) {
      const index = (value as T[]).findIndex((value) => isEqual(value, option));
      if (index !== -1) {
        const newValue = (value as T[]).filter(
          (value) => !isEqual(value, option)
        );
        onChange(newValue as any);
      } else {
        onChange([...(value as T[]), option] as any);
      }
    } else {
      onChange(option as any);
      setShowSearch(false);
    }
  };

  // this function is used to remove the value from the input when it is multiple
  const handleRemoveValue = (option: T) => {
    if (isMultiple) {
      const newValue = (value as T[]).filter(
        (value) => !isEqual(value, option)
      );
      onChange(newValue as any);
    }
  };

  // this effect is used to add event listener to the document for handling click outside
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // this effect is used to append the portal to the body
  useEffect(() => {
    if (usePortal) {
      document.body.appendChild(portalRef.current);
      return () => {
        document.body.removeChild(portalRef.current);
      };
    }
  }, [usePortal]);

  return {
    ref: {
      autoCompleteRef,
      portalRef,
      dropdownContentRef,
    },
    state: {
      showSearch,
      search,
    },
    handler: {
      handleClearSearch,
      handleSetSearch,
      handleCloseSearch,
      handleToggleSearch,
      handleSetValue,
      handleRemoveValue,
    },
  };
};

export default useAutoComplete;
