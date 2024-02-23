"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Character } from "../rickandmorty/interfaces";

const useCharacters = (episodeId: number) => {
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );

        const characterList = response.data.characters;

        const characteresRequest = characterList.map((url: string) =>
          axios.get(url)
        );

        const charactersData = await Promise.all(characteresRequest);

        const characters = charactersData.map(
          (characters: any) => characters.data
        );

        setData(characters);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    if (episodeId) {
      fetchData();
    }
  }, [episodeId]);

  return {
    data,
    error,
    loading,
  };
};

export default useCharacters;
