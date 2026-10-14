
import React from 'react';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login form submitted!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow p-4">
            <h2 className="text-center text-primary mb-4">
              Login Form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
                <div className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label
                  className="form-check-label"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>

              <p className="text-center mt-3 mb-0">
                Don't have an account?{' '}
                <a href="/register">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;