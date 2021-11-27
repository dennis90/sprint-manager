import { useRef, useState } from "react";

import supabase from "services/supabase";

const Auth = () => {
  const [helperText, setHelperText] = useState({ error: null, text: null });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (type) => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const { user, error } =
      type === "LOGIN"
        ? await supabase.auth.signIn({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (error) {
      setHelperText({ error: true, text: error.message });
    } else if (!user && !error) {
      setHelperText({
        error: false,
        text: "An email has been sent to you for verification!",
      });
    }
  };

  //   const handleOAuthLogin = async (provider) => {
  //     // You need to enable the third party auth you want in Authentication > Settings
  //     // Read more on: https://supabase.io/docs/guides/auth#third-party-logins
  //     let { error } = await supabase.auth.signIn({ provider });
  //     if (error) console.log("Error: ", error.message);
  //   };

  //   const forgotPassword = async (e) => {
  //     // Read more on https://supabase.io/docs/reference/javascript/reset-password-email#notes
  //     e.preventDefault();
  //     const email = prompt("Please enter your email:");

  //     if (email === null || email === "") {
  //       setHelperText({ error: true, text: "You must enter your email." });
  //     } else {
  //       let { error } = await supabase.auth.api.resetPasswordForEmail(email);
  //       if (error) {
  //         console.error("Error: ", error.message);
  //       } else {
  //         setHelperText({
  //           error: false,
  //           text: "Password recovery email has been sent.",
  //         });
  //       }
  //     }
  //   };

  return (
    <div>
      <h1>Auth</h1>

      <p>
        <label htmlFor="email">Email</label>
        <input
          id="name"
          type="email"
          name="email"
          placeholder="email"
          ref={emailRef}
        />
      </p>

      <p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          ref={passwordRef}
        />
      </p>

      <p>{helperText.text}</p>

      <button onClick={() => handleLogin("LOGIN")}>Login</button>
      <button onClick={() => handleLogin("REGISTER")}>Register</button>
    </div>
  );
};

export default Auth;
