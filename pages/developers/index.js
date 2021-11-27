import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "components/ui/Button";
import supabase from "services/supabase";

const Developers = () => {
  const [error, setError] = useState(null);
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    const fetchDevelopers = async () => {
      const { data, error: fetchError } = await supabase
        .from("developers")
        .select("*")
        .order("name", { ascending: true });

      if (fetchError) {
        setError(fetchError);
      } else {
        setDevelopers(data);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <>
      <div className="flex justify-between py-4">
        <h1 className="text-xl font-bold">Desenvolvedores</h1>
        <Link href="/developers/new" passHref={true}>
          <Button tagName="a">Novo desenvolvedor</Button>
        </Link>
      </div>

      {error && <p>Error: {error.message}</p>}

      {developers.length > 0 && (
        <table className="table-fixed border border-gray-200 my-4 w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((developer) => (
              <tr key={developer.id}>
                <td className="text-center">{developer.id}</td>
                <td className="text-center">{developer.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Developers;
