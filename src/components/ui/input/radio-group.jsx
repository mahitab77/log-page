import * as React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ name, value, onChange, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          name,
          checked: child.props.value === value, // Check if the current radio matches the value
          onChange,
        })
      )}
    </div>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Now the value prop is used to manage selection
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Radio = ({ name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4"
      />
      <label className="ml-2 text-sm">{label}</label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export { RadioGroup, Radio };
