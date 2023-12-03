import React, { useState } from "react";
import { useAuth } from "../../../features/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";

const LoginView = () => {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    
      try {
        const {email,password} = Object.fromEntries(new FormData(e.target));
        if(!email || !password) throw new Error("Todos los campos son obligatorios");
        await login(email, password)

        form.reset();

      } catch (error) {
        console.log(error);
        setError(error.response.data.msg);
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "auto",
          marginBottom: "10px",
          padding: "20px",
          color: "red",
        }}>React Films</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email"
           style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              padding: "10px",
              border: "2px solid",
              display: "flex",
              margin: "auto",
              marginBottom: "20px",
            }}
         />
        <input type="password" name="password" placeholder= "Password"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
              border: "2px solid",
              display: "flex",
              margin: "auto",
              marginBottom: "20px",
              }}
         />

        <AppButton type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            padding: "10px",
            border: "2px solid",
            display: "flex",
            margin: "auto",
            }}
        >
          Iniciar Sesión
          </AppButton>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default LoginView;