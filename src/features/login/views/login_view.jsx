import React, { useState } from "react";
import { useAuth } from "../../../features/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";
import AppCard from "../../../core/components/app_card/provider/app_card";

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
      <AppCard
        backgroundImageSrc={"https://fastly.picsum.photos/id/563/3872/2592.jpg?hmac=0IrQ3rYsIWh7eNXUWlmVPJCOZt1V2vgenFWm6a-2Pz0"}>
      <h1
        style={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          
          display: "flex",
          margin: "auto",
          marginBottom: "20px",
          opacity: "0.7",
        }}>React Films</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email"
           style={{
              backgroundColor: "transparent",
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
              backgroundColor: "transparent",
              color: "black",
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
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "5px",
            padding: "10px",
            border: "2px solid",
            display: "flex",
            margin: "auto",
            cursor: "pointer",
            }}
        >
          Iniciar Sesión
          </AppButton>
         
        <p>{error}</p>
      </form>
      </AppCard>
      
      </div>
    
  );
};

export default LoginView;