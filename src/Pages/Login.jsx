import React from 'react'
import { Tooltip } from 'antd';

export default function Login() {
    return (
        <div>
            <section className="d-flex flex-column justify-content-between loginSection">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with:</p>
                                    <Tooltip title="Google">
                                        <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                            <i class="fa-brands fa-google" />
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="divider my-4">
                                    <hr class="hr-text" data-content="OR" />
                                </div>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                    />
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#!" className="text-body">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                    >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <a href="#!" className="link-danger">
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary align-items-center">
                    {/* Copyright */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2024. All rights reserved.
                    </div>
                    {/* Copyright */}
                    {/* Right */}
                    <div className='border px-2 py-1 rounded'>
                        <Tooltip title={"Google"}>
                            <a href="#!" className="text-white">
                                <i className="fab fa-google" />
                            </a>
                        </Tooltip>
                    </div>
                    {/* Right */}
                </div>
            </section>
        </div>
    )
}