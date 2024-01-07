"use client";

import { useEffect } from "react";

const DocsPage = () => {
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/docs");
      const data = await response.json();
      console.log("data", data);
    };

    getProducts();
  }, []);

  return <div>Doc Page</div>;
};

export default DocsPage;
