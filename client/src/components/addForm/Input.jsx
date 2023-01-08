import React, { forwardRef } from "react";

const Input = forwardRef(({field_name, type, onChange, value, name}, ref) => {
    return (
        <div className={type === 'file' ? 'fileInput' : 'group'}>
            <input value={value} onChange={onChange} ref={ref} id="name" type={type} name={name} required/>
            <label htmlFor="name">{field_name}</label>
        </div>            
    );
});

export default Input;
