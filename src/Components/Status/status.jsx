import React, { useState } from 'react';
import './status.css';

export const Status = () => {
  const [forca, setForca] = useState('');
  const [destreza, setDestreza] = useState('');
  const [constituicao, setConstituicao] = useState('');
  const [inteligencia, setInteligencia] = useState('');
  const [sabedoria, setSabedoria] = useState('');
  const [carisma, setCarisma] = useState('');

  const [forcaBonus, setForcaBonus] = useState('');
  const [destrezaBonus, setDestrezaBonus] = useState('');
  const [constituicaoBonus, setConstituicaoBonus] = useState('');
  const [inteligenciaBonus, setInteligenciaBonus] = useState('');
  const [sabedoriaBonus, setSabedoriaBonus] = useState('');
  const [carismaBonus, setCarismaBonus] = useState('');

  const [isForca, setIsForca] = useState(true);
  const [isDestreza, setIsDestreza] = useState(true);
  const [isConstituicao, setIsConstituicao] = useState(true);
  const [isInteligencia, setIsInteligencia] = useState(true);
  const [isSabedoria, setIsSabedoria] = useState(true);
  const [isCarisma, setIsCarisma] = useState(true);

  const toggleVisibility = (field) => {
    switch (field) {
      case 'forca':
        setIsForca(!isForca);
        break;
      case 'destreza':
        setIsDestreza(!isDestreza);
        break;
      case 'constituicao':
        setIsConstituicao(!isConstituicao);
        break;
      case 'inteligencia':
        setIsInteligencia(!isInteligencia);
        break;
      case 'sabedoria':
        setIsSabedoria(!isSabedoria);
        break;
      case 'carisma':
        setIsCarisma(!isCarisma);
        break;
      default:
        break;
    }
  };

  const contarNumerosPares = (valor, bonus) => {
    const total = Number(valor) + Number(bonus);
    let count = -6;
    for (let i = 0; i <= total; i++) {
      if (i % 2 === 0) {
        count++;
      }
    }
    return count;
  };

  return (
    <section className='mod_atributos'>
      <div className='mod_box'>
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
        <p onClick={() => toggleVisibility('forca')}>
          {isForca ? forca : forca}{' '}
          <span className='bonus_atributo'>{forcaBonus}</span>
        </p>
        <p className='num_mod'></p>{' '}
        <p>{contarNumerosPares(forca, forcaBonus)}</p>
      </div>
      <hr />
      <div className='mod_box'>
        <h4>Destreza</h4>
        {isDestreza && (
          <div>
            <input
              className='input_line'
              type='number'
              value={destreza}
              onChange={(e) => setDestreza(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={destrezaBonus}
              onChange={(e) => setDestrezaBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('destreza')}>
          {isDestreza ? destreza : destreza}{' '}
          <span className='bonus_atributo'>{destrezaBonus}</span>
        </p>
        <p className='num_mod'>{contarNumerosPares(destreza, destrezaBonus)}</p>
      </div>
      <hr />
      <div className='mod_box'>
        <h4>Constituição</h4>
        {isConstituicao && (
          <div>
            <input
              className='input_line'
              type='number'
              value={constituicao}
              onChange={(e) => setConstituicao(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={constituicaoBonus}
              onChange={(e) => setConstituicaoBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('constituicao')}>
          {isConstituicao ? constituicao : constituicao}{' '}
          <span className='bonus_atributo'>{constituicaoBonus}</span>
        </p>
        <p className='num_mod'>
          {contarNumerosPares(constituicao, constituicaoBonus)}
        </p>
      </div>
      <hr />
      <div className='mod_box'>
        <h4>Inteligencia</h4>
        {isInteligencia && (
          <div>
            <input
              className='input_line'
              type='number'
              value={inteligencia}
              onChange={(e) => setInteligencia(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={inteligenciaBonus}
              onChange={(e) => setInteligenciaBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('inteligencia')}>
          {isInteligencia ? inteligencia : inteligencia}{' '}
          <span className='bonus_atributo'>{inteligenciaBonus}</span>
        </p>
        <p className='num_mod'>
          {contarNumerosPares(inteligencia, inteligenciaBonus)}
        </p>
      </div>
      <hr />
      <div className='mod_box'>
        <h4>Sabedoria</h4>
        {isSabedoria && (
          <div>
            <input
              className='input_line'
              type='number'
              value={sabedoria}
              onChange={(e) => setSabedoria(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={sabedoriaBonus}
              onChange={(e) => setSabedoriaBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('sabedoria')}>
          {isSabedoria ? sabedoria : sabedoria}{' '}
          <span className='bonus_atributo'>{sabedoriaBonus}</span>
        </p>
        <p className='num_mod'>
          {contarNumerosPares(sabedoria, sabedoriaBonus)}
        </p>
      </div>
      <hr />
      <div className='mod_box'>
        <h4>Carisma</h4>
        {isCarisma && (
          <div>
            <input
              className='input_line'
              type='number'
              value={carisma}
              onChange={(e) => setCarisma(e.target.value)}
            />
            <input
              className='input_line'
              type='number'
              value={carismaBonus}
              onChange={(e) => setCarismaBonus(e.target.value)}
            />
          </div>
        )}
        <p onClick={() => toggleVisibility('carisma')}>
          {isCarisma ? carisma : carisma}{' '}
          <span className='bonus_atributo'>{carismaBonus}</span>
        </p>
        <p className='num_mod'>{contarNumerosPares(carisma, carismaBonus)}</p>
      </div>
    </section>
  );
};
