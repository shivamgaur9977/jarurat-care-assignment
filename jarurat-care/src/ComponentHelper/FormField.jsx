export default function FormField({ name, type, label, placeholder, value, handleChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} min={name=="age" ? 0 :""} onChange={handleChange} value={value} required />
            <div className="invalid-feedback">
                Enter valid {name}
            </div>
        </div>
    )
}