import React from 'react'
import { useForm } from 'react-hook-form';

export default function AdmissionFormInput({ label, register, name, placeholder, errors }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <label className="form-label">
                    {label}:
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={placeholder}
                    {...register(name, { required: true })}
                />
                {errors[name] && <p id='err'>{label} field is required</p>}
            </div>
        </div>
    );
}