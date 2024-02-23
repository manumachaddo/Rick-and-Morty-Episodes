"use client";
import React from "react";
import useCharacters from "../../episode/hook";
import { Character } from "../../rickandmorty/interfaces";
import Image from "next/image";
import flecha from "../../rickandmorty/flecha.png";
import "./style.css";

const Page = (props: any) => {
  const { data, error, loading } = useCharacters(props.params.episodeId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro: {error} </p>;
  }


  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <h1>Personagens presentes no episódio: </h1>
      </div>

      <div className="box">
        {data.map((character: Character) => (
          // eslint-disable-next-line react/jsx-key
          <div className="card">
            <div>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={70}
              />
            </div>

            <div>
              <strong>ID: </strong>
              {character.id}
            </div>

            <div>
              <strong> Nome: </strong>
              {character.name}
            </div>

            <div>
              <strong> Status: </strong>
              {character.status}
            </div>

            <div>
              <strong> Especie: </strong>
              {character.species}
            </div>

            <div>
              <strong> Tipo: </strong>
              {character.type}
            </div>

            <div>
              <strong> Genêro: </strong>
              {character.gender}
            </div>
          </div>
        ))}
      </div>

      <div className="flex m-4">
        <button onClick={() => window.history.back()}>
          <Image src={flecha} alt="Flecha" width={20} />
          {"Voltar"}
        </button>
      </div>
      
    </div>
  );
};

export default Page;
