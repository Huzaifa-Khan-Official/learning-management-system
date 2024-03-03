import React, { useContext } from 'react'
import { Tooltip } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Configuration/firebaseConfig';
import Loader from '../Context/Context';
import Spinner from '../Components/Spinner'
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const [loader, setLoader] = useContext(Loader);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });


    const onSubmit = async (data) => {
        try {
            setLoader(true);
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    reset();
                    const user = userCredential.user;
                    setLoader(false);
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            setLoader(false);
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Spinner />
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with:</p>
                                    <Tooltip title="Google">
                                        <button type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                            <i className="fa-brands fa-google" />
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="divider my-4">
                                    <hr className="hr-text" data-content="OR" />
                                </div>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label className="form-label">
                                        Email address:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <p id='err'>Email field is required</p>}
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <label className="form-label">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <p id='err'>Password field is required</p>}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#!" className="text-body">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg fs-6"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                    >
                                        Login
                                    </button>
                                    <hr className="hr-text" />
                                    <p className="small fw-bold mt-1 mb-0">
                                        Don't have an account?{" "}
                                        <Link className="link-danger" to={"/admissionform"}>
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-primary align-items-center">
                    {/* Copyright */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2024. All rights reserved.
                    </div>
                    {/* Copyright */}
                    {/* Right */}
                    <Tooltip title={"Google"}>
                        <div className='border px-2 py-1 rounded'>
                            <a href="#!" className="text-white">
                                <i className="fab fa-google" />
                            </a>
                        </div>
                    </Tooltip>
                    {/* Right */}
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}