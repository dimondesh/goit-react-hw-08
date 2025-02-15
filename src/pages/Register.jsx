import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { registerThunk } from "../redux/auth/operations";
const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-grey rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/4">
          <label className="flex flex-col gap-2">
            <h3 className="text-center font-bold">Register</h3>
            <span>Name:</span>
            <Field
              className="p-2 border-1 border-grey rounded-md shadow-md"
              name="name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              className="p-2 border-1 border-grey rounded-md shadow-md"
              name="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              className="p-2 border-1 border-grey rounded-md shadow-md"
              name="password"
              type="password"
            />
          </label>
          <button
            className="px-4 py-2 shadow-2xl rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-all duration-200"
            type="submit"
          >
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link
              className="text-blue-500 hover:font-bold transition-all duration-200"
              to="/login"
            >
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
