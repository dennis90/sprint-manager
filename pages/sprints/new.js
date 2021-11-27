import { useRef, useState } from "react";
import { useRouter } from "next/router";

import Button from "components/ui/Button";
import Input from "components/ui/Input";
import supabase from "services/supabase";

const NewSprint = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const descriptionRef = useRef();
  const workdaysRef = useRef();

  const createSprint = async () => {
    setError(null);
    const description = descriptionRef.current?.value.trim();
    const workdays = +workdaysRef.current?.value;
    const user = supabase.auth.user();

    const { error: createError } = await supabase
      .from("sprints")
      .insert({
        description,
        workdays,
        user_id: user.id,
      })
      .single();

    if (createError) {
      setError(createError);
    } else {
      router.push("/sprints");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-4">Nova sprint</h1>

      <Input
        label="Descrição:"
        id="description"
        type="text"
        name="description"
        ref={descriptionRef}
      />

      <Input
        label="Duração (Dias):"
        id="workdays"
        type="number"
        ref={workdaysRef}
      />

      {error && <p>Error: {error.message}</p>}

      <Button tagName="button" onClick={createSprint} className="my-4">
        Cadastrar
      </Button>
    </div>
  );
};

export default NewSprint;
