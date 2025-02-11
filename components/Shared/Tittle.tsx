import React from "react";

type Tittle = {
  tittle: string;
};

const Tittle = ({ tittle }: Tittle) => {
  return (
    <h2 className="bg-gradient-to-r from-[#007BFF] via-[#00a8e6] to-[#007BFF] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
      {tittle}
    </h2>
  );
};

export default Tittle;
