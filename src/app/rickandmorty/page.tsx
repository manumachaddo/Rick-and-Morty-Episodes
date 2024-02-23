"use client";
import React from "react";
import useRickAndMortyAPI from "./hook";
import { Episode} from "./interfaces";
import Image from "next/image";
import arrow from "./arrow.png";
import flecha from "./flecha.png";

const Page = () => {
  const {
    data,
    error,
    loading,
    currentPage,
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
      <div className="flex pl-44 mt-4 mb-4">
        <h1>Rick and Morty Episodios</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th className="flex justify-start">Nome</th>
            <th>Data que foi exibido</th>
            <span style={{ paddingRight: "10px" }}></span>
            <th>Episodio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((episode: Episode) => (
            <tr key={episode.id}>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
              <span style={{ paddingRight: "30px" }}></span>
              <td>{episode.episode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {hasPrevPage && (
          <button onClick={goPrevPage}>
            Prev
            <Image src={flecha} alt="flecha" width={20} />
          </button>
        )}

        <span style={{ paddingRight: "500px" }}></span>
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
