import { useState, useEffect } from "react";

const useParque = () => {
  const [parques, setParques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParques = async () => {
      try {
        const response = await fetch(
          "https://pacopul.github.io/json/pn/parques.json",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los parques");
        }
        const data = await response.json();
        setParques(data.parques);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParques();
  }, []);

  return { parques, loading, error };
};

export default useParque;
