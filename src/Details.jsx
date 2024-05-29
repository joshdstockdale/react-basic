import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (isPending) {
    return (
      <div className="loading-pane">
        <h2 className="loader">☺️</h2>
      </div>
    );
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  const pet = data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};
export default Details;
