import React from 'react'
import { useForm } from 'react-hook-form';

export default function AdmissionFormInput({labelHeading, registerName}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div className="col-md-6 mb-4">
            <div className="form-outline">
                <label className="form-label">
                    {labelHeading}
                </label>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder='Enter your full name'
                    {...register(`${registerName}`, { required: true })}
                />
                {errors.registerName && <p id='err'>This field is required</p>}
            </div>
        </div>
    )
}