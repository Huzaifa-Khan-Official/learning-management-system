import React from 'react'
import { useForm } from 'react-hook-form';

export default function AdmissionFormInput({ label, register, name, placeholder, errors, type }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <label className="form-label">
                    {label}:
                </label>
                <input
                    type={type}
                    className="form-control form-control-lg"
                    placeholder={placeholder}
                    {...register(name, { required: true })}
                />
                {errors[name] && <p id='err'>{label} field is required</p>}
            </div>
        </div>
    );
}