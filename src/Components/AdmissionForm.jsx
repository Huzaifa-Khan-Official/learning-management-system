import React, { useRef, useState } from 'react'
import { PatternFormat } from 'react-number-format';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import AdmissionFormInput from './AdmissionFormInput';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage, db, auth } from '../Configuration/firebaseConfig';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function AdmissionForm() {
    const [contactNumber, setContactNumber] = useState("03");
    const [cnic, setCnic] = useState("");
    const [profileFile, setProfileFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            fullName: '',
            fatherName: '',
            email: "",
            dob: "",
            gender: "",
            education: "",
            address: "",
            isLaptop: "",
            password: "",
            conPassword: ""
        }
    });

    const fileInputRef = useRef(null);

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const uploadPicBtn = () => {
        triggerFileInput();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileFile(file);
            document.querySelector(".profileImgErr").innerHTML = "";
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    }


    const downloadImageUrl = (file) => {
        return new Promise((resolve, reject) => {
            const restaurantImageRef = ref(
                storage,
                // storage location
                `studentsImages/${file.name}`
            );
            const uploadTask = uploadBytesResumable(restaurantImageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    switch (snapshot.state) {
                        case "paused":
                            break;
                        case "running":
                            break;
                    }
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            resolve(downloadURL);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                }
            );
        });
    };


    const onSubmit = async (data) => {
        try {

            if (contactNumber == "") {
                document.querySelector(".contactNumberErr").innerHTML = "This field is required";
            } else if (cnic == "") {
                document.querySelector(".cnicErr").innerHTML = "This field is required";
            } else if (!profileFile) {
                document.querySelector(".profileImgErr").innerHTML = "This field is required";
            } else {
                if (data.password !== data.conPassword) {
                    toast.error("Please make sure to confirm your password!")
                } else {
                    document.querySelector(".contactNumberErr").innerHTML = ""
                    document.querySelector(".cnicErr").innerHTML = "";
                    createUserWithEmailAndPassword(auth, data.email, data.password)
                        .then(async (userCredential) => {
                            const user = userCredential.user;
                            const userUid = user.uid;

                            data.contactNumber = contactNumber;
                            data.cnic = cnic;
                            data.type = "student";
                            data.uid = userUid;
                            const profileImgURL = await downloadImageUrl(profileFile);
                            data.profileImg = profileImgURL;

                            await setDoc(doc(db, "students", userUid), {
                                ...data
                            });
                            setContactNumber("");
                            setCnic("");
                            setPreviewUrl(null);

                            reset();
                            toast.success("Application submitted successfully!");
                        })
                        .catch((error) => {
                            throw error
                        });
                }
            }
        } catch (error) {
            console.log(error.message);
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
                                            <AdmissionFormInput
                                                label="Full Name"
                                                register={register}
                                                name="fullName"
                                                placeholder="Enter your full name"
                                                errors={errors}
                                            />
                                            {/* Father Name input */}
                                            <AdmissionFormInput
                                                label="Father Name"
                                                register={register}
                                                name="fatherName"
                                                placeholder="Enter your father name"
                                                errors={errors}
                                            />
                                        </div>
                                        <div className="row">
                                            {/* Email input */}
                                            <AdmissionFormInput
                                                label="Email"
                                                register={register}
                                                name="email"
                                                placeholder="Enter email address"
                                                errors={errors}
                                            />
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
                                            {/* password input */}
                                            <AdmissionFormInput
                                                label="Password"
                                                register={register}
                                                name="password"
                                                placeholder="Enter password"
                                                errors={errors}
                                            />
                                            {/* confirm password input */}
                                            <AdmissionFormInput
                                                label="Confirm Password"
                                                register={register}
                                                name="conPassword"
                                                placeholder="Confirm your password"
                                                errors={errors}
                                            />
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
                                                    <span className='cnicErr' id='err'></span>
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
                                                    {errors.address && <p id='err'>Address field is required</p>}
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
                                                        <div className="profilePicDiv" style={{ display: previewUrl ? "block" : "none" }}>
                                                            <img src={previewUrl} alt="Image not found" id='profileImg' />
                                                        </div>
                                                        <div className="uploadBtnDiv">
                                                            <div className="inputDiv" id="picInputDiv" onClick={uploadPicBtn}>
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    id="picInput"
                                                                    name='profilePic'
                                                                    onChange={handleFileChange} // Add onChange handler here
                                                                    style={{ display: "none" }}
                                                                    ref={fileInputRef}
                                                                />
                                                                <span>+ Upload</span>
                                                            </div>
                                                        </div>
                                                        <span className='profileImgErr' id='err'></span>
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