import "./App.css";
import { object, string, InferType } from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import LoginSuccessModal from "./components/LoginSuccessModal";

const validationSchema = object().shape({
  email: string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: string()
    .required("Please enter a password")
    .min(8, "Password should be 8 or more characters"),
});

type FormValues = InferType<typeof validationSchema>;

const initialValues: FormValues = {
  email: "",
  password: "",
};

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: function () {
      setShowModal(true);
    },
  });

  return (
    <>
      {showModal && <LoginSuccessModal closeModal={() => setShowModal(false)} content={JSON.stringify(formik.values)} />}
      <div className="container mx-auto">
        <div className="min-h-screen py-8 flex items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full max-w-md p-4 md:p-8 border border-solid border-gray-200 rounded-lg space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block w-fit mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="john@example.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {formik.touched?.email && formik.errors?.email && <small className="text-red-500"> {formik.errors.email} </small>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block w-fit mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="relative">
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute text-xs bg-white border border-solid border-gray-100 rounded top-1/2 -translate-y-1/2 right-4 select-none">{showPassword ? 'HIDE': 'SHOW'}</button>
                <input
                  id="password"
                  type={showPassword ? "text": "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="********"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {formik.touched?.password && formik.errors?.password && <small className="text-red-500"> {formik.errors.password} </small>}
            </div>

            <button type="submit" className="bg-blue-600 hover:bg-blue-500 transition-colors border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
