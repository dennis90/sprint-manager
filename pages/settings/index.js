import { useEffect, useRef, useState } from "react";

import Button from "components/ui/Button";
import TextArea from "components/ui/TextArea";
import supabase from "services/supabase";

const Settings = () => {
  const [error, setError] = useState(null);
  const [settings, setSettings] = useState("");
  const settingsInputRef = useRef(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const userId = supabase.auth.user().id;

      const { data, error: fetchError } = await supabase
        .from("settings")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (fetchError) {
        setError(fetchError);
        console.log(fetchError);
      } else {
        setSettings(data);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div>
      <TextArea
        rows={10}
        cols={33}
        ref={settingsInputRef}
        value={settings}
        className="resize"
        onChange={(ev) => setSettings(ev.target.value)}
      />
      {error && String(error.message)}

      <Button>Salvar</Button>
    </div>
  );
};

export default Settings;
