import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "components/ui/Button";
import supabase from "services/supabase";

const Sprints = () => {
  const [error, setError] = useState(null);
  const [sprints, setSprints] = useState([]);
  useEffect(() => {
    const fetchSprints = async () => {
      const { data, error: fetchError } = await supabase
        .from("sprints")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError(fetchError);
      } else {
        setSprints(data);
      }
    };

    fetchSprints();
  }, []);

  return (
    <>
      <div className="flex justify-between py-4">
        <h1 className="text-xl font-bold">Sprints</h1>
        <Link href="/sprints/new" passHref={true}>
          <Button tagName="a">Nova sprint</Button>
        </Link>
      </div>

      {error && <p>Error: {error.message}</p>}

      {sprints.length > 0 && (
        <table className="table-fixed border border-gray-200 my-4 w-full">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Duração (Dias)</th>
            </tr>
          </thead>
          <tbody>
            {sprints.map((sprint) => (
              <tr key={sprint.id}>
                <td className="text-center">{sprint.description}</td>
                <td className="text-center">{sprint.workdays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Sprints;
