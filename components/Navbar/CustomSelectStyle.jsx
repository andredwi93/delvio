import { isMobileContext } from "@/context/IsMobile";
import { useContext } from "react";

export const customStyles = {
  option: (style, { isSelected }) => {
    return {
      ...style,
      background: isSelected ? "#DEF2E6" : "#fff",
      borderRadius: "11px",
      marginBottom: "12px",
      "&:nth-child(2)": {
        marginBottom: "0",
      },
    };
  },

  menu: (css) => {
    const isMobile = useContext(isMobileContext);
    return {
      ...css,
      width: "200px",
      padding: "8px",
      right: "0",
      borderRadius: "11px",
    };
  },

  valueContainer: (state) => {
    return {
      ...state,
      padding: "0",
      width: "100%",
    };
  },

  control: (defaultStyles) => {
    return {
      ...defaultStyles,
      padding: "0",
      border: "none",
      boxShadow: "none",
      width: "100%",
      "&:hover": {
        boxShadow: "none",
        cursor: "pointer",
      },
    };
  },

  singleValue: (defaultStyles) => {
    return {
      ...defaultStyles,
      margin: "0",
    };
  },

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
};
