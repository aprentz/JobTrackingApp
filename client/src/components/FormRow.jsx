const Form = ({ type, name, labelText, defaultValue, required=true, onChange }) => {
   return (
      <div className="form-row">
         <label htmlFor={name} className="form-label">
            {labelText || name}
         </label>
         <input
            type={type}
            id={name}
            name={name}
            className="form-input"
            defaultValue={defaultValue || ""}
            required={required}
            onChange={onChange}
            />
      </div>
   )
}

export default Form