import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Admissionform from '../Pages/Admissionform'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebaseConfig'
import StudentDashboard from '../Pages/StudentDashboard'
import { collection, onSnapshot } from 'firebase/firestore'

export default function Router() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        const adminCollection = collection(db, "admin");
        onSnapshot(adminCollection, (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            if (change.type === "added") {
              const adminEmail = await change.doc.data().email;

              if (adminEmail == user.email) {
                setIsAdmin(true);
              }
              console.log("admin email --->", adminEmail);
            }
          });
        });

        const studentCollection = collection(db, "students");
        onSnapshot(studentCollection, (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            if (change.type === "added") {
              const studentEmail = await change.doc.data().email;

              if (studentEmail == user.email) {
                setIsStudent(true);
                
              }
              console.log("studentCollection email --->", studentEmail);
            }
          });
        });



        console.log("current User Email --->", user.email);
      } else {
        console.log("no user found");
      }
    });
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/studentDashboard' element={isStudent && <StudentDashboard />} />
          <Route path='/admissionform' element={<Admissionform />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}