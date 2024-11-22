import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase Setup/Firebase.init";
import { useRef, useState } from "react";


const Signin = () => {

      const [signError,setsignError] = useState(null)
      const [signSexxes,setsignSexxes] = useState(false)
      const emailRef = useRef()

    const  loginForm =(e) =>{
        e.preventDefault();
        // const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        setsignSexxes(false)
        setsignError("")
        
        
        signInWithEmailAndPassword(auth, email, password)
          
        .then((result)=>{
            console.log(result.user);
            if (!result.user.emailVerified) {
                setsignError("Email Verify koro");
                return;

            }
            else{
                setsignSexxes(true)
            }
            
        })
        .catch((error) =>{
            setsignError(error.message);
            setsignSexxes(false)
        })

    }


   const forgetPassword = () =>{
    const email = emailRef.current.value
    sendPasswordResetEmail (auth, email)
    .then(()=>{
        alert("chek gmail")
    })

   }



    return (
        <div>
             <div class="hero bg-base-200 w-full min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={loginForm} class="card-body w-full">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" placeholder="email" name="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" class="input input-bordered" required />
          <label onClick={forgetPassword} class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
        {
            signError && <h1 className='text-red-700 text-2xl'>{signError}</h1>
        }
        
        {
            signSexxes && <h1 className='text-green-700 text-2xl'>congress Login </h1>
        }
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signin;