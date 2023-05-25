import { Form, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Contact() {
  const { personaId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("https://reqres.in/api/users/" + personaId)
  
  const [user, setUser] = useState(
    {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
      }
  );
  

  // console.log(personaId)

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            url
          );
          if (response.ok) {
            const res = await response.json();
            console.log(res);
            setImageUrl(res.data.avatar);
            setError(null);
            setIsLoading(false);

            const resUser = {
              id: res.data.id,
              email: res.data.email,
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              avatar: res.data.avatar,
           }
           
           setUser(resUser)

          } else {
            setError("Hubo un error al obtener el usuario");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud para obtener el usuario");
        }
      }
      fetchData();
    }
  }, [isLoading]);


  if (isLoading) {
    return (
      <div className="User">
        <h1>Cargando...</h1>
      </div>
    );
  }


  if (error) { // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="User">
        <h1>{error}</h1>
        {/* <button onClick={}>Volver a intentarlo</button> */}
      </div>
    );
  }

  // const volver = () =>{
  // };

  return (
    <div key={user.id} className="text-center">
      <div className="bg-orange-700 text-white p-4 rounded-md">
          <img className="float-left" src={imageUrl} alt="Imagen del usuario" />
          <h1 className="text-xl font-bold capitalize">Detalles de Usuario</h1>
          <div className="text-xl font-bold capitalize">Email: {user.email}</div>
          <div className="text-xl font-bold capitalize">Primer Nombre: {user.first_name}</div>
          <div className="text-xl font-bold capitalize">Segundo Nombre: {user.last_name}</div>
          <button className="bg-lime-700 px-2 py-1 rounded-md hover:bg-lime-400"
            onClick={ () => history.back()
          }> 
            Volver </button>
      </div>

    </div>
  );
}


