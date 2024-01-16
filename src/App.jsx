import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (isLoading) {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((userInfo) => {
          setDataUser(userInfo.results[0]);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const randomUser = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <p>{dataUser.cell}</p>
      <img
        src={dataUser.picture.large}
        alt={`${dataUser.name.first} ${dataUser.name.last}`}
      />
      <h2>{`${dataUser.name.first} ${dataUser.name.last}`}</h2>
      {/* Puedes mostrar otras propiedades según tus necesidades */}
      {/* <p>Email: {dataUser.email}</p>
      <p>Edad: {dataUser.dob.age}</p> */}
      <button onClick={randomUser}>
        ¡Otro Usuario!
      </button>
    </div>
  );
}