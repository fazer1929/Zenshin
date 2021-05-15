import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const { resetPassword } = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      window.alert("Check your inbox");
    } catch {
      window.alert("failed to reset password");
    }
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => history.push("/login")}>Go to Login Page</button>
    </div>
  );
}

export default ForgotPassword;
