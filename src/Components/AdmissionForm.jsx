import React from 'react'
import { PatternFormat } from 'react-number-format';

export default function AdmissionForm() {
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
                                    <form>
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
                                                    />
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
                                                    />
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
                                                    />
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
                                                        value={"03"}
                                                    />
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
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* select gender input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Select Gender:</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected disabled>Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* select education input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Last Qualification:</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected disabled>Last Qualification</option>
                                                        <option value="Matriculation">Matriculation</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Under Graduate">Under Graduate</option>
                                                        <option value="Graduate">Graduate</option>
                                                        <option value="PhD">PhD</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Address:</label>
                                                    <input type="text" className="form-control" placeholder='Address' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Do you have a Laptop?</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected disabled>Do you have a Laptop?</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mb-4 d-flex align-items-center">
                                                <div className="form-outline w-100">
                                                    <label className='form-label'>Picture</label>
                                                    <div className="d-flex">
                                                        <div class="profilePicDiv">
                                                            {/* <img src="https://avatars.githubusercontent.com/u/122217933?v=4" alt="" id='profileImg' /> */}
                                                        </div>
                                                        <div class="uploadBtnDiv">
                                                            <div class="inputDiv" id="picInputDiv">
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