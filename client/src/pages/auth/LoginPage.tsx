import { SpinnerIcon } from "@phosphor-icons/react";
import { Button, Flex } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toastMessage from "../../lib/toastMessage";
import { useLoginMutation } from "../../redux/features/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { loginUser } from "../../redux/services/authSlice";
import decodeToken from "../../utils/decodeToken";

const LoginPage = () => {
  const [userLogin, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(); // ✅ Removed default values

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await userLogin(data).unwrap();

      if (res.statusCode === 200) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        navigate("/");
        toastMessage({ icon: "success", text: "Successfully Login!" });
      }
    } catch (error: any) {
      toastMessage({ icon: "error", text: error.data.message });
    }
  };

  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Flex
        vertical
        style={{
          width: "400px",
          padding: "3rem",
          border: "1px solid #164863",
          borderRadius: ".6rem",
        }}
      >
        <h1
          style={{
            marginBottom: ".7rem",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
          {" "}
          {/* ✅ Allow browser autocomplete */}
          <input
            type="email"
            {...register("email", { required: true })}
            name="email" // ✅ Required for browser autofill
            placeholder="Your Email*"
            autoComplete="email" // ✅ Enable email autofill
            className={`input-field ${
              errors["email"] ? "input-field-error" : ""
            }`}
          />
          <input
            type="password"
            {...register("password", { required: true })}
            name="password" // ✅ Required for browser autofill
            placeholder="Your Password*"
            autoComplete="current-password" // ✅ Enable password manager
            className={`input-field ${
              errors["password"] ? "input-field-error" : ""
            }`}
          />
          <Flex justify="center">
            <Button
              htmlType="submit"
              type="primary"
              disabled={isLoading}
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              {isLoading && <SpinnerIcon className="spin" weight="bold" />}
              Login
            </Button>
          </Flex>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Don't have any account? <Link to="/register">Resister Here</Link>
        </p>
      </Flex>
    </Flex>
  );
};

export default LoginPage;

//k@gmail.com kk@kk1
//zoro@gmail.com zoro@123
