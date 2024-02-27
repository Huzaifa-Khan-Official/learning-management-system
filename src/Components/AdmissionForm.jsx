import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';


export default function AdmissionForm() {
    const [contactNumber, setContactNumber] = useState("03");
    const [cnic, setCnic] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (contactNumber == "") {
            document.querySelector(".contactNumberErr").innerHTML = "This field is required"
        } else {
            data.contactNumber = contactNumber;
            data.cnic = cnic;
            data.type = "student";
        }
    }


    return (
        <div>
            <section className="gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            {/* Full Name input */}
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        Full Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        placeholder='Enter your full name'
                                                        {...register("fullName", { required: true })}
                                                    />
                                                    {errors.fullName && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                            {/* Father Name input */}
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        Father Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        placeholder='Enter your father name'
                                                        {...register("fatherName", { required: true })}
                                                    />
                                                    {errors.fatherName && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* Email input */}
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg"
                                                        placeholder='Enter email address'
                                                        {...register("email", { required: true })}
                                                    />
                                                    {errors.email && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                            {/* Contact No. input */}
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        Contact Number:
                                                    </label>
                                                    <PatternFormat
                                                        valueIsNumericString
                                                        format="###########"
                                                        mask="_"
                                                        className="form-control form-control-lg"
                                                        onChange={(e) => setContactNumber(e.target.value)}
                                                        value={contactNumber}
                                                    />
                                                    <span className='contactNumberErr' id='err'></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* cnic input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label className="form-label">
                                                        CNIC
                                                    </label>
                                                    <PatternFormat
                                                        valueIsNumericString
                                                        format="#####-#######-#"
                                                        mask="_"
                                                        className="form-control form-control-lg"
                                                        placeholder='12345-6789123-4'
                                                        value={cnic}
                                                        onChange={(e) => setCnic(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* Birthday input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label className="form-label">
                                                        Birthday
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control form-control-lg"
                                                        {...register("dob", { required: true })}
                                                    />
                                                    {errors.dob && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* select gender input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Select Gender:</label>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={""}
                                                        {...register("gender", { required: true })}
                                                    >
                                                        <option value={""} disabled>Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    {errors.gender && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                            {/* select education input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Last Qualification:</label>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={""}
                                                        {...register("education", { required: true })}
                                                    >
                                                        <option value={""} disabled>Last Qualification</option>
                                                        <option value="Matriculation">Matriculation</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Under Graduate">Under Graduate</option>
                                                        <option value="Graduate">Graduate</option>
                                                        <option value="PhD">PhD</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    {errors.education && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* address input */}
                                            <div className="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Address:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder='Address'
                                                        {...register("address", { required: true })}
                                                    />
                                                    {errors.address && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Do you have a Laptop?</label>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={""}
                                                        {...register("isLaptop", { required: true })}
                                                    >
                                                        <option value={""} disabled>Do you have a Laptop?</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                    {errors.isLaptop && <p id='err'>This field is required</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Picture</label>
                                                    <div className="d-flex">
                                                        <div className="profilePicDiv">
                                                            {/* <img src="https://avatars.githubusercontent.com/u/122217933?v=4" alt="" id='profileImg' /> */}
                                                        </div>
                                                        <div className="uploadBtnDiv">
                                                            <div className="inputDiv" id="picInputDiv">
                                                                <input type="file" accept="image/*" id="picInput" />
                                                                <span>+ Upload</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <button
                                                className="btn btn-primary btn-lg fs-6"
                                                type='submit'
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}