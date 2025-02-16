import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { loginThunk } from "../redux/auth/operations";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values));

    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-grey rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-2/3 md:w-1/4">
          <label className="flex flex-col gap-2">
            <h3 className="text-center font-bold">Login</h3>
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
            Login
          </button>
          <p>
            You do not have an account?{" "}
            <Link
              className="text-blue-500 hover:font-bold transition-all duration-200"
              to="/register"
            >
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
