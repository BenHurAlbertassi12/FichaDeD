import React, { useState } from 'react';
import './status.css';

export const Status = () => {
  const [forca, setForca] = useState('');
  const [destreza, setdestreza] = useState('');
  const [constituicao, setconstituicao] = useState('');
  const [inteligencia, setinteligencia] = useState('');
  const [sabedoria, setsabedoria] = useState('');
  const [carisma, setcarisma] = useState('');

  const [forcaBonus, setForcaBonus] = useState('');
  const [destrezaBonus, setdestrezaBonus] = useState('');
  const [constituicaoBonus, setconstituicaoBonus] = useState('');
  const [inteligenciaBonus, setinteligenciaBonus] = useState('');
  const [sabedoriaBonus, setsabedoriaBonus] = useState('');
  const [carismaBonus, setcarismaBonus] = useState('');

  const [isForca, setIsForca] = useState(true);
  const [isDestreza, setIsDestreza] = useState(true);
  const [isConstituicao, setIsConstituicao] = useState(true);
  const [isInteligencia, setIsInteligencia] = useState(true);
  const [isSabedoria, setIsSabedoria] = useState(true);
  const [isCarisma, setIsCarisma] = useState(true);

  const toggleVisibility = (field) => {
    switch (field) {
      case 'nome':
        setIsForca(!isForca);
        break;
      case 'classeENivel':
        setIsDestreza(!isDestreza);
        break;
      case 'antecedentes':
        setIsConstituicao(!isConstituicao);
        break;
      case 'nomeDoJogador':
        setIsInteligencia(!isInteligencia);
        break;
      case 'raca':
        setIsSabedoria(!isSabedoria);
        break;
      case 'tendencia':
        setIsCarisma(!isCarisma);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <div>
        <h4>Força</h4>
        {isForca && (
          <div>
            <input
              className='input_line'
              type='number'
              value={forca}
              onChange={(e) => setForca(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={forcaBonus}
              onChange={(e) => setForcaBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isForca ? forca : forca}{' '}
          <span className='bonus_atributo'>{forcaBonus}</span>
        </p>
      </div>

      <div>
        <h4>Destreza</h4>
        {isDestreza && (
          <div>
            <input
              className='input_line'
              type='number'
              value={destreza}
              onChange={(e) => setdestreza(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isDestreza ? destreza : destreza}
        </p>
      </div>
      <div>
        <h4>Constituição</h4>
        {isConstituicao && (
          <div>
            <input
              className='input_line'
              type='number'
              value={constituicao}
              onChange={(e) => setconstituicao(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isConstituicao ? constituicao : constituicao}
        </p>
      </div>
      <div>
        <h4>Inteligencia</h4>
        {isInteligencia && (
          <div>
            <input
              className='input_line'
              type='number'
              value={inteligencia}
              onChange={(e) => setinteligencia(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isInteligencia ? inteligencia : inteligencia}
        </p>
      </div>
      <div>
        <h4>Sabedoria</h4>
        {isSabedoria && (
          <div>
            <input
              className='input_line'
              type='number'
              value={sabedoria}
              onChange={(e) => setsabedoria(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isSabedoria ? sabedoria : sabedoria}
        </p>
      </div>
      <div>
        <h4>Carisma</h4>
        {isCarisma && (
          <div>
            <input
              className='input_line'
              type='number'
              value={carisma}
              onChange={(e) => setcarisma(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('nome')}>
          {isCarisma ? carisma : carisma}
        </p>
      </div>
    </section>
  );
};
