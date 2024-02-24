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
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        placeholder='Enter your contact number'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* cnic input */}
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label className="form-label">
                                                        Cnic
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
                                        <div className="mt-2 pt-2">
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