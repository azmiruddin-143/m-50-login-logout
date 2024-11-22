
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../Firebase Setup/Firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
const Createaccount = () => {

    const [eroormassage, setError] = useState(null)
    const [sexxes, setsexxes] = useState(false)

    const [axxise, setAxxise] = useState(false)

    const showPassword = () => {
        setAxxise(!axxise)
    }

    const formsubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        setError("")
        setsexxes(false)
        if (password.length < 6) {
            setError("PAssword 6 tar besi dite hobe vai");
            return
        }

        const hasUppercaseAndNumber = /[A-Z]/;
        if (!hasUppercaseAndNumber.test(password)) {
            setError("Password boro hater dew")
            return
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                    setsexxes(true)
     
                //   email verify //

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("verify email sent");
                    })
            })



            .catch((error) => {
                setError(error.message);
                setsexxes(false)
            })
    }


    return (

        <form onSubmit={formsubmit} action="">

            <div className="form-control w-3/12 my-3">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control w-3/12 my-3">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative w-3/12 my-3">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type={axxise ? 'text' : "password"} name='password' placeholder="Password" className="input input-bordered" />

                {
                    !axxise ?
                        <div onClick={showPassword} className='absolute right-5 top-14'>
                            <FaEye size={18} />

                        </div>
                        :
                        <div onClick={showPassword} className='absolute right-5 top-14'>
                            <FaEyeSlash size={18} />
                        </div>
                }



            </div>

            <div className="form-control w-3/12 my-3">
                <input className='bg-[#00ff66] py-2 px-5' type="submit" value="Submit" />
            </div>
            {
                eroormassage && <h1 className='text-red-700 text-2xl'>{eroormassage}</h1>
            }
            {
                sexxes && <h1 className='text-green-700 text-2xl'>congress you new account create</h1>
            }
        </form>




    );
};

export default Createaccount;