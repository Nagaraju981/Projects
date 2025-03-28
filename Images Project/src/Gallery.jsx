import React from "react";
import axios from "axios";

import { useGlobalContext } from "./Context";
import { useQuery } from "@tanstack/react-query";

const url = `https://api.unsplash.com/search/photos/?client_id=5U_QDHpomb8j_5MPaQjXDSeumRdP6lZ2SI3rfu6Vir0`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section>
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img src={url} alt={item.description} key={item.id} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
