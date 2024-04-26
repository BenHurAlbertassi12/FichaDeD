import React, { useState } from 'react';
import './title.css'

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
        <h3 onClick={() => toggleVisibility('nome')}>
          {isVisibleName ? nome : nome}
        </h3>
      </div>
      <div className='info_person'>
        <div className='info_cima'>
          <div className='editar_nome'>
            {isVisibleClasseENivel && (
              <input
                type='text'
                placeholder='Classe e Nível'
                value={classeENivel}
                onChange={(e) => setClasseENivel(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('classeENivel')}>
              {isVisibleClasseENivel ? classeENivel : classeENivel}
            </h4>
          </div>
          <div className='editar_nome'>
            {isVisibleAntecedentes && (
              <input
                type='text'
                placeholder='Antecedentes'
                value={antecedentes}
                onChange={(e) => setAntecedentes(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('antecedentes')}>
              {isVisibleAntecedentes ? antecedentes : antecedentes}
            </h4>
          </div>
          <div className='editar_nome'>
            {isVisibleNomeDoJogador && (
              <input
                type='text'
                placeholder='Nome do Jogador'
                value={nomeDoJogador}
                onChange={(e) => setNomeDoJogador(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('nomeDoJogador')}>
              {isVisibleNomeDoJogador ? nomeDoJogador : nomeDoJogador}
            </h4>
          </div>
        </div>
        <div className='info_baixo'>
          <div className='editar_nome'>
            {isVisibleRaca && (
              <input
                type='text'
                placeholder='Raça'
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('raca')}>
              {isVisibleRaca ? raca : raca}
            </h4>
          </div>
          <div className='editar_nome'>
            {isVisibleTendencia && (
              <input
                type='text'
                placeholder='Tendência'
                value={tendencia}
                onChange={(e) => setTendencia(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('tendencia')}>
              {isVisibleTendencia ? tendencia : tendencia}
            </h4>
          </div>
          <div className='editar_nome'>
            {isVisiblePontosDeExperiencia && (
              <input
                type='number'
                placeholder='Pontos de Experiência'
                value={pontosDeExperiencia}
                onChange={(e) => setPontosDeExperiencia(e.target.value)}
              />
            )}
            <h4 onClick={() => toggleVisibility('pontosDeExperiencia')}>
              {isVisiblePontosDeExperiencia
                ? pontosDeExperiencia
                : pontosDeExperiencia}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
