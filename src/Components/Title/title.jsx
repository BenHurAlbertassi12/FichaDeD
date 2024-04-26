import React, { useState } from 'react';

export const Title = () => {
  const [nome, setNome] = useState('');
  const [classeENivel, setClasseENivel] = useState('');
  const [antecedentes, setAntecedentes] = useState('');
  const [nomeDoJogador, setNomeDoJogador] = useState('');
  const [raca, setRaca] = useState('');
  const [tendencia, setTendencia] = useState('');
  const [pontosDeExperiencia, setPontosDeExperiencia] = useState('');

  const [isVisibleName, setIsVisibleName] = useState(true);
  const [isVisibleClasseENivel, setIsVisibleClasseENivel] = useState(true);
  const [isVisibleantecedentes, setIsVisibleantecedentes] = useState(true);
  const [isVisiblenomeDoJogador, setIsVisiblenomeDoJogador] = useState(true);



  const toggleVisibilityName = () => {
    setIsVisibleName(!isVisibleName);
  };

  const toggleVisibilityClasseENivel = () => {
    setIsVisibleClasseENivel(!isVisibleClasseENivel);
  };

  const toggleVisibilityAntecedentes = () => {
    setIsVisibleantecedentes(!isVisibleantecedentes);
  };

  const toggleVisibilityNomeDoJogador = () => {
    setIsVisiblenomeDoJogador(!isVisiblenomeDoJogador);
  };


  return (
    <div>
      <div>
        {isVisibleName && (
          <input
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        )}
        <p onClick={toggleVisibilityName}>{isVisibleName ? nome : nome}</p>
      </div>
      <div>
        <div>
          {isVisibleClasseENivel && (
            <input
              type='text'
              placeholder='Classe e Nivel'
              value={classeENivel}
              onChange={(e) => setClasseENivel(e.target.value)}
            />
          )}
          <p onClick={toggleVisibilityClasseENivel}>
            {isVisibleClasseENivel ? classeENivel : classeENivel}
          </p>
          <input
            type='text'
            placeholder='Antecedentes'
            value={antecedentes}
            onChange={(e) => setAntecedentes(e.target.value)}
          />
          {antecedentes}
          <input
            type='text'
            placeholder='Nome do Jogador'
            value={nomeDoJogador}
            onChange={(e) => setNomeDoJogador(e.target.value)}
          />
          {nomeDoJogador}
        </div>
        <div>
          <input
            type='text'
            placeholder='Raça'
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
          {raca}
          <input
            type='text'
            placeholder='Tendência'
            value={tendencia}
            onChange={(e) => setTendencia(e.target.value)}
          />
          {tendencia}
          <input
            type='number'
            placeholder='Pontos de Experiência'
            value={pontosDeExperiencia}
            onChange={(e) => setPontosDeExperiencia(e.target.value)}
          />
          {pontosDeExperiencia}
        </div>
      </div>
    </div>
  );
};
