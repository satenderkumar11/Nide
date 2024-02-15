import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {googleSignIn, logOut} from '../utils/authHelper'
import {FcGoogle} from 'react-icons/fc'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Register from './Register'


const Login = () => {
  // const {setUser} = useContext(UserContext);
  const [signInError, setSignInError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(true);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await googleSignIn();
    navigate(-1);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or more";
      }

      return errors;
    },

    onSubmit: async(values) => {
    //Comes in as JS object
    //console.log(values);

    //alert(JSON.stringify(values, null, 2));
    //setUser({name: values.username, email: values.email});
     
      //Sign in method will return boolean value when user is authenticated or not
      // const authenticated = await signIn(values.email, values.password);

      if(authenticated) navigate(-1);
      else setSignInError("Firebase: Error (auth/invalid-login-credentials).");

    },
  });

  return (
    <div
      className={`w-1/2 mx-auto flex my-4 ${!loggingIn ? "flex-row-reverse" : ""}`}
    >
      <div className="w-1/2 bg-neutral-100 bg-gradient-to-tr from-neutral-700 to-neutral-900 rounded-lg shadow-xl flex flex-col gap-2 items-center justify-center">
        <h3 className="text-neutral-600 text-xl font-semibold ">
          {loggingIn ? "Register" : "Login"}
        </h3>
        <span
          className="text-4xl cursor-pointer"
          onClick={() => setLoggingIn((prevState) => !prevState)}
        >
          {loggingIn ? (
            <IoIosArrowDropleftCircle />
          ) : (
            <IoIosArrowDroprightCircle />
          )}
        </span>
      </div>

      {loggingIn ? (
        <form className="w-1/2 p-6 shadow-xl" onSubmit={formik.handleSubmit}>
          <h3 className="text-4xl my-8 text-slate-800">Login</h3>

          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="shadow-md rounded-sm focus:outline-none p-1 text-slate-700"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs font-medium text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="password" className="font-medium text-slate-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="shadow-md rounded-sm focus:outline-none p-1 text-slate-700"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs font-medium text-red-500">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {signInError && (
            <div className="text-xs font-medium text-red-500">
              {signInError}
            </div>
          )}

          <button
            className="w-full shadow-md rounded-full my-4 py-2 font-medium text-slate-800 hover:text-blue-600"
            type="submit"
          >
            Login
          </button>

          <div className="text-center">
            <button
              type="button"
              className="w-fit shadow-md rounded-full text-xl p-2"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle />
            </button>
          </div>
        </form>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Login