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
  const [isVisibleAntecedentes, setIsVisibleAntecedentes] = useState(true);
  const [isVisibleNomeDoJogador, setIsVisibleNomeDoJogador] = useState(true);
  const [isVisibleRaca, setIsVisibleRaca] = useState(true);
  const [isVisibleTendencia, setIsVisibleTendencia] = useState(true);
  const [isVisiblePontosDeExperiencia, setIsVisiblePontosDeExperiencia] =
    useState(true);

  const toggleVisibility = (field) => {
    switch (field) {
      case 'nome':
        setIsVisibleName(!isVisibleName);
        break;
      case 'classeENivel':
        setIsVisibleClasseENivel(!isVisibleClasseENivel);
        break;
      case 'antecedentes':
        setIsVisibleAntecedentes(!isVisibleAntecedentes);
        break;
      case 'nomeDoJogador':
        setIsVisibleNomeDoJogador(!isVisibleNomeDoJogador);
        break;
      case 'raca':
        setIsVisibleRaca(!isVisibleRaca);
        break;
      case 'tendencia':
        setIsVisibleTendencia(!isVisibleTendencia);
        break;
      case 'pontosDeExperiencia':
        setIsVisiblePontosDeExperiencia(!isVisiblePontosDeExperiencia);
        break;
      default:
        break;
    }
  };

  return (
    <div className='info_total_person'>
      <div className='info_name_person'>
        {isVisibleName && (
          <input
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isVisibleName ? nome : nome}
        </p>
      </div>
      <div className='info_person'>
        <div className='info_cima'>
          {isVisibleClasseENivel && (
            <input
              type='text'
              placeholder='Classe e Nível'
              value={classeENivel}
              onChange={(e) => setClasseENivel(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('classeENivel')}>
            {isVisibleClasseENivel ? classeENivel : classeENivel}
          </p>
          {isVisibleAntecedentes && (
            <input
              type='text'
              placeholder='Antecedentes'
              value={antecedentes}
              onChange={(e) => setAntecedentes(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('antecedentes')}>
            {isVisibleAntecedentes ? antecedentes : antecedentes}
          </p>
          {isVisibleNomeDoJogador && (
            <input
              type='text'
              placeholder='Nome do Jogador'
              value={nomeDoJogador}
              onChange={(e) => setNomeDoJogador(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('nomeDoJogador')}>
            {isVisibleNomeDoJogador ? nomeDoJogador : nomeDoJogador}
          </p>
        </div>
        <div className='info_baixo'>
          {isVisibleRaca && (
            <input
              type='text'
              placeholder='Raça'
              value={raca}
              onChange={(e) => setRaca(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('raca')}>
            {isVisibleRaca ? raca : raca}
          </p>
          {isVisibleTendencia && (
            <input
              type='text'
              placeholder='Tendência'
              value={tendencia}
              onChange={(e) => setTendencia(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('tendencia')}>
            {isVisibleTendencia ? tendencia : tendencia}
          </p>
          {isVisiblePontosDeExperiencia && (
            <input
              type='number'
              placeholder='Pontos de Experiência'
              value={pontosDeExperiencia}
              onChange={(e) => setPontosDeExperiencia(e.target.value)}
            />
          )}
          <p onClick={() => toggleVisibility('pontosDeExperiencia')}>
            {isVisiblePontosDeExperiencia
              ? pontosDeExperiencia
              : pontosDeExperiencia}
          </p>
        </div>
      </div>
    </div>
  );
};
