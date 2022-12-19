import React from "react";

const Nomes = ({ aluno, idade }) => {
  return (
    <>
      <span>aluno: {aluno}</span>
      <span>idade: {idade}</span>
    </>
  );
};

export default Nomes;
