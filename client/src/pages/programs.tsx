import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [program, setProgram] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setProgram(data);
      });
  }, []);

  return (
    <>
      <h1>Liste des films:</h1>
      <ul>
        {program.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.synopsis}</p>
            <img src={item.poster} alt="{item.title}" />
            <p>{item.country}</p>
            <p>{item.year}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Programs;
