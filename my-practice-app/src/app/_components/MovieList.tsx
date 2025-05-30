"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface SearchProps {
  keyword: string;
}

export default function MovieList({ keyword }: SearchProps) {
  const actualKeyword = keyword || "Guardians";

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", actualKeyword],
    queryFn: async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${actualKeyword}`
      );
      const result = await response.json();
      if (!result.Search) throw new Error(result.Error || "검색 결과 없음");
      return result.Search as Movie[];
    },
    enabled: !!actualKeyword,
  });

  if (isLoading) return <p>🌀 로딩 중...</p>;
  if (error instanceof Error) return <p>❌ 에러: {error.message}</p>;
  if (!data) return <p>😶 결과 없음</p>;
  return (
    <>
      <ul>
        {data?.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} width={100} />
            <div>
              <p>{movie.Title}</p> <p>({movie.Year})</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
