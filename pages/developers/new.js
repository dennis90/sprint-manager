import { useRef, useState } from "react";
import { useRouter } from "next/router";

import Button from "components/ui/Button";
import Input from "components/ui/Input";
import supabase from "services/supabase";

const NewDeveloper = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const nameRef = useRef();

  const createDeveloper = async () => {
    setError(null);
    const name = nameRef.current?.value.trim();
    const user = supabase.auth.user();

    const { error: createError } = await supabase
      .from("developers")
      .insert({
        name,
        user_id: user.id,
      })
      .single();

    if (createError) {
      setError(createError);
    } else {
      router.push("/developers");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-4">Novo desenvolvedor</h1>

      <Input label="Nome" id="name" type="text" name="name" ref={nameRef} />

      {error && <p>Error: {error.message}</p>}

      <Button tagName="button" onClick={createDeveloper} className="my-4">
        Cadastrar
      </Button>
    </div>
  );
};

export default NewDeveloper;
