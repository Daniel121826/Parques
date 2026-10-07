// App.js
import ParqueCard from "./componentes/CardParque";
import useParque from "./hook/useParque";

function App() {
  const { parques, loading, error } = useParque();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      {/* g-4 añade un espaciado uniforme entre columnas y filas */}
      <div className="row g-4">
        {parques.map((parque) => (
          <div className="col-12 col-md-4" key={parque.id}>
            <ParqueCard
              nombre={parque.nombre}
              url={parque.imagen}
              descripcion={parque.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
