import React from "react";
import Container from "../../../components/Container/Container";

const SignIn = () => {
  return (
    <Container
      className={"min-h-[calc(100vh-72px)] flex items-center justify-center"}
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-center text-2xl font-semibold mb-3">Sign In</h3>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="email" className="input" placeholder="Name" />
            <label className="label">Image</label>
            <input type="file" className="file-input file-input-sm" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Sign In</button>
          </fieldset>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
