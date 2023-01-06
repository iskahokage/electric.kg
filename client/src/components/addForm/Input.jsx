import React, { forwardRef } from "react";

const Input = forwardRef(({field_name, type}, ref) => {
    return (
        <div className={type === 'file' ? 'fileInput' : 'group'}>
            <input ref={ref} id="name" type={type} required />
            <label for="name">{field_name}</label>
        </div>            
    );
});

export default Input;
