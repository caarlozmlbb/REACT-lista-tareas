import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Api() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setUsers(data.results);
      setError(null);
    } catch (error) {
      setError("No se pudieron obtener los datos");
      console.error(`Error al obtener datos: ${error}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">API Rick and Morty</h1>

      <input
        type="text"
        placeholder="Buscar personaje..."
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p className="alert alert-danger">{error}</p>}

      <div className="row">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={user.image} alt={user.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text text-muted">{user.species}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron personajes...</p>
        )}
      </div>
    </div>
  );
}

export default Api;
