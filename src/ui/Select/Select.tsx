import { useState, useRef, useEffect } from "preact/hooks";

import "./style.css";
import { ChevronDown } from "../../icons";

interface SelectProps {
  label: string;
  onChangeValue: (value: string) => void;
  options: string[];
  value: string;
  placeholder?: string;
}

const Select = ({
  label,
  onChangeValue,
  value,
  placeholder,
  options,
}: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="form-item">
      {label && <label>{label}</label>}
      <div className="select-wrapper" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
        >
          <span>{placeholder || "Select an item"}</span>
          <ChevronDown />
        </button>
        <ul
          className={`dropdown dropdown-${
            isDropdownOpen ? "opened" : "closed"
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => onChangeValue(option)}
              className={`item ${value === option ? "item-selected" : ""}`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
