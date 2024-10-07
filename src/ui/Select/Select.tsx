import { useState, useRef, useEffect } from "preact/hooks";

import "./style.css";
import { ChevronDown } from "../../icons";

interface SelectProps {
  label: string;
  error?: string;
  onChangeValue: (value: string) => void;
  options: string[];
  value: string;
  placeholder?: string;
}

const Select = ({
  label,
  error,
  onChangeValue,
  value,
  placeholder,
  options,
}: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayPlaceholder = placeholder || "Select an item";

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

  const handleChangeValue = (value: string) => {
    onChangeValue(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="form-item">
      <div className="label-item">
        {label && <label>{label}</label>}
        <span className="error-message">{error}</span>
      </div>
      <div className="select-wrapper" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
        >
          <span className={value ? "highlight" : ""}>
            {value || displayPlaceholder}
          </span>
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
              onClick={() => handleChangeValue(option)}
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
