"use client";
import React from "react";
import useRickAndMortyAPI from "../rickandmorty/hook";
import { Episode} from "../rickandmorty/interfaces";
import Image from "next/image";
import arrow from "../rickandmorty/arrow.png";
import flecha from "../rickandmorty/flecha.png";
import Link from "next/link";
import "./style.css";

const Page = () => {
  const {
    data,
    error,
    loading,
    hasNextPage,
    hasPrevPage,
    goNextPage,
    goPrevPage,
  } = useRickAndMortyAPI();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <h1>Rick and Morty Episodios</h1>
      </div>

      <div className="container">
        {data.map((episode: Episode) => (
          // eslint-disable-next-line react/jsx-key
          <Link className="item" href={"/characters/"+episode.id}>
            <div>
              <strong>Nome: </strong>
              {episode.name}
            </div>
            <div>
              <strong>Data de exibição: </strong>
              {episode.air_date}
            </div>
            <div>
              <strong>Episódio: </strong>
              {episode.episode}
            </div>
          </Link>
        ))}
      </div>

      <div className=" flex justify-between p-10 ">
        {hasPrevPage && (
          <button onClick={goPrevPage}>
            Prev
            <Image src={flecha} alt="flecha" width={20} />
          </button>
        )}

        {hasNextPage && (
          <button onClick={goNextPage}>
            Next
            <Image src={arrow} alt="flecha" width={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
