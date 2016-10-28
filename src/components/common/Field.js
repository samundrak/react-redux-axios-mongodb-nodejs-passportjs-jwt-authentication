import React, {PropTypes}  from 'react';
const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control input-lg"/>
            {touched && ((error && <div className="alert alert-danger formError">{error}</div>)
            ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);
renderField.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default renderField;