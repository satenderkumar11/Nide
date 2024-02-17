import React, {useState} from 'react'
import { useFormik } from "formik";

const Register = () => {

    const [signUpError, setSignUpError] = useState(null);

    const formik = useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
      },

      validate: (values) => {
        const errors = {};

        if (!values.firstname) {
          errors.firstname = "Required";
        } else if (values.firstname.length > 15) {
          errors.firstname = "Must be 15 characters or less";
        }

        if (!values.lastname) {
          errors.lastname = "Required";
        } else if (values.lastname.length > 20) {
          errors.lastname = "Must be 20 characters or less";
        }

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

      onSubmit: async (values) => {
        //Comes in as JS object
        // console.log(values);
        // alert(JSON.stringify(values, null, 2));
        // setUser({name: values.username, email: values.email});
        await signUp(values.email, values.password);
        navigate("/");
      },
    });

  return (
    <form className="w-1/2 px-6 shadow-xl" onSubmit={formik.handleSubmit}>
      <h3 className="text-4xl my-8 text-neutral-800">Register</h3>

      <div className="flex flex-col mb-2">
        <label htmlFor="firstname" className="font-medium text-slate-800">
          First Name
        </label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          onBlur={formik.handleBlur}
          className="shadow-md rounded-sm focus:outline-none p-1 text-slate-700"
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className="text-xs font-medium text-red-500">
            {formik.errors.firstname}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="lastname" className="font-medium text-slate-800">
          Last Name
        </label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
          className="shadow-md rounded-sm focus:outline-none p-1 text-slate-700"
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="text-xs font-medium text-red-500">
            {formik.errors.lastname}
          </div>
        ) : null}
      </div>

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
        <label htmlFor="email" className="font-medium text-slate-800">
          Mobile
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.mobile}
          onBlur={formik.handleBlur}
          className="shadow-md rounded-sm focus:outline-none p-1 text-slate-700"
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div className="text-xs font-medium text-red-500">
            {formik.errors.mobile}
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

      <div className="flex flex-col mb-2">
        <label htmlFor="password" className="font-medium text-slate-800">
          Confirm Password
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

      {signUpError && (
        <div className="text-xs font-medium text-red-500">{signUpError}</div>
      )}

      <button
        className="w-full shadow-md rounded-full my-4 py-2 font-medium text-slate-800 hover:text-blue-500"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default Register