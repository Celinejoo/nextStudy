"use client";

import styles from "./page.module.css";
import SearchBar from "./_components/SearchBar";
import MovieList from "./_components/MovieList";
import { useState } from "react";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_OMDB_API_KEY);
  const [keyword, setKeyword] = useState("");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchBar onSearch={setKeyword} />
        <MovieList keyword={keyword} />
      </main>
    </div>
  );
}
