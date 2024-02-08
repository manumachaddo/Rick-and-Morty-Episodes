"use client";
import { useEffect, useState } from "react";
import type { BaseSearchResponde, Info, Episode } from "./interfaces";
import axios from "axios";

const useRickAndMortyAPI = () => {
  const [data, setData] = useState<Episode[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const numPages = 3;

  let apiUrl = `https://rickandmortyapi.com/api/episode?page=${currentPage}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseSearchResponde<Episode>>(apiUrl);
        setData(response.data.results);
        setHasNextPage(response.data.info.next !== null);
        setHasPrevPage(currentPage > 1);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, currentPage]);

  const goNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goPrevPage = () => {
   setCurrentPage((prevPage) => prevPage - 1);
  };

  return{
      data,
      error,
      loading,
      currentPage,
      hasNextPage,
      hasPrevPage,
      goNextPage,
      goPrevPage,
  };

};

export default useRickAndMortyAPI