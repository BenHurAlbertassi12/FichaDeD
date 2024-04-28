import React, { useState } from 'react';
import './status.css';

export const Status = () => {
  const [forca, setForca] = useState('');
  const [destreza, setDestreza] = useState('');
  const [constituicao, setConstituicao] = useState('');
  const [inteligencia, setInteligencia] = useState('');
  const [sabedoria, setSabedoria] = useState('');
  const [carisma, setCarisma] = useState('');
  const [inspiracao, setInspiracao] = useState('');
  const [bonusProficiencia, setBonusProficiencia] = useState('');

  const [checkboxForca, setCheckboxForca] = useState(false);
  const [checkboxDestreza, setCheckboxDestreza] = useState(false);
  const [checkboxConstituicao, setCheckboxConstituicao] = useState(false);
  const [checkboxInteligencia, setCheckboxInteligencia] = useState(false);
  const [checkboxSabedoria, setCheckboxSabedoria] = useState(false);
  const [checkboxCarisma, setCheckboxCarisma] = useState(false);

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
  const [isInspiracao, setIsInspiracao] = useState(true);
  const [isBonusProficiencia, setIsBonusProficiencia] = useState(true);

  const toggleVisibility = (field) => {
    switch (field) {
      case 'bonusProficiencia':
        setIsBonusProficiencia(!isBonusProficiencia);
        break;
      case 'inspiracao':
        setIsInspiracao(!isInspiracao);
        break;
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
    <div className='distr'>
      <section className='insp_prof'>
        <article className='insp_div'>
          <article className='div_inspiracao'>
            {isInspiracao && (
              <>
                <input
                  className='input_line_insp'
                  type='number'
                  value={inspiracao}
                  onChange={(e) => setInspiracao(e.target.value)}
                />
              </>
            )}
            <h2 className='' onClick={() => toggleVisibility('inspiracao')}>
              {isInspiracao ? inspiracao : inspiracao}{' '}
            </h2>
          </article>
          <p className='p_inspiracao'>Inspiração</p>
        </article>
        <article className='insp_div'>
          <article className='div_inspiracao'>
            {isBonusProficiencia && (
              <>
                <input
                  className='input_line_insp'
                  type='number'
                  value={bonusProficiencia}
                  onChange={(e) => setBonusProficiencia(e.target.value)}
                />
              </>
            )}
            <h2
              className=''
              onClick={() => toggleVisibility('bonusProficiencia')}>
              {isBonusProficiencia ? bonusProficiencia : bonusProficiencia}{' '}
            </h2>
          </article>
          <p className='p_inspiracao'>Bônus de proficiência</p>
        </article>
      </section>
      <section className='mod_atributos'>
        <div>
          <article className='mod_box'>
            <h4 className='mod_name'>Força</h4>
            {isForca && (
              <>
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
              </>
            )}
            <p className='p_atributo' onClick={() => toggleVisibility('forca')}>
              {isForca ? forca : forca}{' '}
              <span className='bonus_atributo'>{forcaBonus}</span>
            </p>
            <p className='num_mod'>{contarNumerosPares(forca, forcaBonus)}</p>
          </article>
          <article>
            <input
              type='checkbox'
              checked={checkboxForca}
              onChange={() => setCheckboxForca(!checkboxForca)}
            />
            <p>
              {checkboxForca
                ? contarNumerosPares(forca, forcaBonus) +
                  Number(bonusProficiencia)
                : contarNumerosPares(forca, forcaBonus)}
            </p>
            Salvaguarda
          </article>
        </div>
        <hr />
        <article className='mod_box'>
          <>
            <h4 className='mod_name'>Destreza</h4>
            {isDestreza && (
              <>
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
              </>
            )}
            <p
              className='p_atributo'
              onClick={() => toggleVisibility('destreza')}>
              {isDestreza ? destreza : destreza}{' '}
              <span className='bonus_atributo'>{destrezaBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(destreza, destrezaBonus)}
            </p>
            <article>
              <input
                type='checkbox'
                checked={checkboxDestreza}
                onChange={() => setCheckboxDestreza(!checkboxDestreza)}
              />
              <p>
                {checkboxDestreza
                  ? contarNumerosPares(forca, forcaBonus) +
                    Number(bonusProficiencia)
                  : contarNumerosPares(forca, forcaBonus)}
              </p>
              Salvaguarda
            </article>
          </>
        </article>
        <hr />
        <article className='mod_box'>
          <h4 className='mod_name'>Constituição</h4>
          {isConstituicao && (
            <>
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
            </>
          )}
          <p
            className='p_atributo'
            onClick={() => toggleVisibility('constituicao')}>
            {isConstituicao ? constituicao : constituicao}{' '}
            <span className='bonus_atributo'>{constituicaoBonus}</span>
          </p>
          <p className='num_mod'>
            {contarNumerosPares(constituicao, constituicaoBonus)}
          </p>
          <article>
            <input
              type='checkbox'
              checked={checkboxConstituicao}
              onChange={() => setCheckboxConstituicao(!checkboxConstituicao)}
            />
            <p>
              {checkboxConstituicao
                ? contarNumerosPares(forca, forcaBonus) +
                  Number(bonusProficiencia)
                : contarNumerosPares(forca, forcaBonus)}
            </p>
            Salvaguarda
          </article>
        </article>
        <hr />
        <article className='mod_box'>
          <h4 className='mod_name'>Inteligencia</h4>
          {isInteligencia && (
            <>
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
            </>
          )}
          <p
            className='p_atributo'
            onClick={() => toggleVisibility('inteligencia')}>
            {isInteligencia ? inteligencia : inteligencia}{' '}
            <span className='bonus_atributo'>{inteligenciaBonus}</span>
          </p>
          <p className='num_mod'>
            {contarNumerosPares(inteligencia, inteligenciaBonus)}
          </p>
          <article>
            <input
              type='checkbox'
              checked={checkboxInteligencia}
              onChange={() => setCheckboxInteligencia(!checkboxInteligencia)}
            />
            <p>
              {checkboxInteligencia
                ? contarNumerosPares(forca, forcaBonus) +
                  Number(bonusProficiencia)
                : contarNumerosPares(forca, forcaBonus)}
            </p>
            Salvaguarda
          </article>
        </article>
        <hr />
        <article className='mod_box'>
          <h4 className='mod_name'>Sabedoria</h4>
          {isSabedoria && (
            <>
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
            </>
          )}
          <p
            className='p_atributo'
            onClick={() => toggleVisibility('sabedoria')}>
            {isSabedoria ? sabedoria : sabedoria}{' '}
            <span className='bonus_atributo'>{sabedoriaBonus}</span>
          </p>
          <p className='num_mod'>
            {contarNumerosPares(sabedoria, sabedoriaBonus)}
          </p>
          <article>
            <input
              type='checkbox'
              checked={checkboxSabedoria}
              onChange={() => setCheckboxSabedoria(!checkboxSabedoria)}
            />
            <p>
              {checkboxSabedoria
                ? contarNumerosPares(forca, forcaBonus) +
                  Number(bonusProficiencia)
                : contarNumerosPares(forca, forcaBonus)}
            </p>
            Salvaguarda
          </article>
        </article>
        <hr />
        <article className='mod_box'>
          <h4 className='mod_name'>Carisma</h4>
          {isCarisma && (
            <>
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
            </>
          )}

          <p className='p_atributo' onClick={() => toggleVisibility('carisma')}>
            {isCarisma ? carisma : carisma}{' '}
            <span className='bonus_atributo'>{carismaBonus}</span>
          </p>
          <p className='num_mod'>{contarNumerosPares(carisma, carismaBonus)}</p>
          <article>
            <input
              type='checkbox'
              checked={checkboxCarisma}
              onChange={() => setCheckboxCarisma(!checkboxCarisma)}
            />
            <p>
              {checkboxCarisma
                ? contarNumerosPares(forca, forcaBonus) +
                  Number(bonusProficiencia)
                : contarNumerosPares(forca, forcaBonus)}
            </p>
            Salvaguarda
          </article>
        </article>
      </section>
    </div>
  );
};
