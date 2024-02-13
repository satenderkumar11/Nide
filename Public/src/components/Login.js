import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {googleSignIn, logOut} from '../utils/authHelper'
import {FcGoogle} from 'react-icons/fc'


const Login = () => {
  // const {setUser} = useContext(UserContext);
  const [signInError, setSignInError] = useState(null);
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
    <div className="grow flex flex-col-reverse justify-center sm:flex-row">
      <form
        className="flex flex-col justify-center px-6 sm:grow lg:w-1/3 lg:grow-0 xl:w-1/4"
        onSubmit={formik.handleSubmit}
      >
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
          className="shadow-md rounded-full my-4 py-2 font-medium text-slate-800 hover:text-cyan-500"
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
    </div>
  );
};

export default Login