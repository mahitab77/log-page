
import PropTypes from "prop-types";

const Select = ({ name, value, onChange, children }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Select, SelectItem };
