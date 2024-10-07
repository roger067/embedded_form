interface ChevronDownProps {
  width?: number;
  height?: number;
  className?: string;
}

const ChevronDown = ({
  width = 24,
  height = 24,
  className,
}: ChevronDownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width={width}
    height={height}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default ChevronDown;
