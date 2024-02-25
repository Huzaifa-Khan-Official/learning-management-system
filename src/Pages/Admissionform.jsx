import React from 'react'
import AdmissionForm from '../Components/AdmissionForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Admissionform() {
    return (
        <div className='bg-primary-subtle admissionFormComponent'>
            <AdmissionForm />
            <ToastContainer autoClose={2000}/>
        </div>
    )
}