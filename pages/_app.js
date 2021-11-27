import { useEffect, useState } from "react";

import Auth from "components/Auth";
import Template from "components/Template";
import supabase from "services/supabase";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div className="container">
      {user ? (
        <Template>
          <Component {...pageProps} />
        </Template>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default MyApp;
