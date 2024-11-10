import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';

const SignUp = () => {

const handleSignUp = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const Password = event.target.Password.value;
  console.log(email, Password);

  createUserWithEmailAndPassword(auth, email, Password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log("Error", error);
    });

}

    return (
        
          <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <h1 className="text-2xl ml-8 font-bold">Sign Up Now!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
    );
};

export default SignUp;