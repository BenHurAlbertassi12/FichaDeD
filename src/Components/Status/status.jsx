import React, { useState } from 'react';

export const Status = () => {
  const [forca, setForca] = useState('');
  const [destreza, setdestreza] = useState('');
  const [constituicao, setconstituicao] = useState('');
  const [inteligencia, setinteligencia] = useState('');
  const [sabedoria, setsabedoria] = useState('');
  const [carisma, setcarisma] = useState('');
    
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
        <p>Força</p>
        <input
          type='number'
          value={forca}
          onChange={(e) => setForca(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isForca ? forca : forca}
        </p>
      </div>

      <div>
        <p>Destreza</p>
        <input
          type='number'
          value={destreza}
          onChange={(e) => setdestreza(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isDestreza ? destreza : destreza}
        </p>
      </div>
      <div>
        <p>Constituição</p>
        <input
          type='number'
          value={constituicao}
          onChange={(e) => setconstituicao(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isConstituicao ? constituicao : constituicao}
        </p>
      </div>
      <div>
        <p>Inteligencia</p>
        <input
          type='number'
          value={inteligencia}
          onChange={(e) => setinteligencia(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isInteligencia ? inteligencia : inteligencia}
        </p>
      </div>
      <div>
        <p>Sabedoria</p>
        <input
          type='number'
          value={sabedoria}
          onChange={(e) => setsabedoria(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isSabedoria ? sabedoria : sabedoria}
        </p>
      </div>
      <div>
        <p>Carisma</p>
        <input
          type='number'
          value={carisma}
          onChange={(e) => setcarisma(e.target.value)}
        />
        <p onClick={() => toggleVisibility('nome')}>
          {isCarisma ? carisma : carisma}
        </p>
      </div>
    </section>
  );
};
