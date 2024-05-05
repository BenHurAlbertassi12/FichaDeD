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

  const [checkboxAtletismo, setCheckboxAtletismo] = useState(false);
  const [checkboxAcrobacia, setCheckboxAcrobacia] = useState(false);
  const [checkboxFurtividade, setCheckboxFurtividade] = useState(false);
  const [checkboxPrestidigitação, setCheckboxPrestidigitação] = useState(false);
  const [checkboxArcanismo, setCheckboxArcanismo] = useState(false);
  const [checkboxHistoria, setCheckboxHistoria] = useState(false);
  const [checkboxInvestigacao, setCheckboxInvestigacao] = useState(false);
  const [checkboxNatureza, setCheckboxNatureza] = useState(false);
  const [checkboxReligiao, setCheckboxReligiao] = useState(false);
  const [checkboxIntuicao, setCheckboxIntuicao] = useState(false);
  const [checkboxLidarAnimais, setCheckboxLidarAnimais] = useState(false);
  const [checkboxMedicina, setCheckboxMedicina] = useState(false);
  const [checkboxPercepition, setCheckboxPercepition] = useState(false);
  const [checkboxSobrevivencia, setCheckboxSobrevivencia] = useState(false);
  const [checkboxAtuacao, setCheckboxAtuacao] = useState(false);
  const [checkboxEnganacao, setCheckboxEnganacao] = useState(false);
  const [checkboxIntimidacao, setCheckboxIntimidacao] = useState(false);
  const [checkboxPersuasao, setCheckboxPersuasao] = useState(false);

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
              <div>
                <input
                  className='input_line_insp'
                  type='number'
                  value={inspiracao}
                  onChange={(e) => setInspiracao(e.target.value)}
                />
              </div>
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
              <div>
                <input
                  className='input_line_insp'
                  type='number'
                  value={bonusProficiencia}
                  onChange={(e) => setBonusProficiencia(e.target.value)}
                />
              </div>
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
        <section>
          <article className='mod_box'>
            <h4 className='mod_name'>Força</h4>
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
            <p className='p_atributo' onClick={() => toggleVisibility('forca')}>
              {isForca ? forca : forca}{' '}
              <span className='bonus_atributo'>{forcaBonus}</span>
            </p>
            <p className='num_mod'>{contarNumerosPares(forca, forcaBonus)}</p>
          </article>
          <section className='salva_pericia'>
            <section className='linha_pericia'>
              <article className='linha_pericia'>
                <input
                  type='checkbox'
                  checked={checkboxForca}
                  onChange={() => setCheckboxForca(!checkboxForca)}
                />
                <h4 className='space_input'>
                  {checkboxForca
                    ? contarNumerosPares(forca, forcaBonus) +
                      Number(bonusProficiencia)
                    : contarNumerosPares(forca, forcaBonus)}
                </h4>
              </article>
              Salvaguarda
            </section>
            <section className='linha_pericia'>
              <article className='linha_pericia'>
                <div className='linha_pericia'>
                  <input
                    type='checkbox'
                    checked={checkboxAtletismo}
                    onChange={() => setCheckboxAtletismo(!checkboxAtletismo)}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </div>
              </article>
              Atletismo
            </section>
          </section>
        </section>
        <hr />
        <article className='mod_box'>
          <section>
            <h4 className='mod_name'>Destreza</h4>
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
            <p
              className='p_atributo'
              onClick={() => toggleVisibility('destreza')}>
              {isDestreza ? destreza : destreza}{' '}
              <span className='bonus_atributo'>{destrezaBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(destreza, destrezaBonus)}
            </p>
            <section className='salva_pericia'>
            <section className='linha_pericia'>
              <article className='linha_pericia'>
                <input
                      className='checkbox_style'
                      type='checkbox'
                      checked={checkboxDestreza}
                      onChange={() => setCheckboxDestreza(!checkboxDestreza)}
                    />
                    <h4 className='space_input'>
                      {checkboxDestreza
                        ? contarNumerosPares(destreza, destrezaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(destreza, destrezaBonus)}
                    </h4>
                  </article>
                Salvaguarda
              </section>
              <>
                <section className='linha_pericia'>
                  <article className='linha_pericia'>
                    <input
                      className='checkbox_proficiencia'
                      type='checkbox'
                      checkd={'XX'}
                      onChange={() => setCheckboxCarisma()}
                    />
                    <p className='space_input'>
                      {checkboxAtletismo
                        ? contarNumerosPares(forca, forcaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(forca, forcaBonus)}
                    </p>
                  </article>
                  Acrobacia
                </section>

                <section className='linha_pericia'>
                  <article className='linha_pericia'>
                    <input
                      className='checkbox_proficiencia'
                      type='checkbox'
                      checkd={'XX'}
                      onChange={() => setCheckboxCarisma()}
                    />
                    <p className='space_input'>
                      {checkboxAtletismo
                        ? contarNumerosPares(forca, forcaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(forca, forcaBonus)}
                    </p>
                  </article>
                  Furtividade
                </section>

                <section className='linha_pericia'>
                  <article className='linha_pericia'>
                    <input
                      className='checkbox_proficiencia'
                      type='checkbox'
                      checkd={'XX'}
                      onChange={() => setCheckboxCarisma()}
                    />
                    <p className='space_input'>
                      {checkboxAtletismo
                        ? contarNumerosPares(forca, forcaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(forca, forcaBonus)}
                    </p>
                  </article>
                  Prestidigitação
                </section>
              </>
            </section>
          </section>
        </article>
        <hr />
        <article className='mod_box'>
          <div>
            <h4 className='mod_name'>Constituição</h4>
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
            <p
              className='p_atributo'
              onClick={() => toggleVisibility('constituicao')}>
              {isConstituicao ? constituicao : constituicao}{' '}
              <span className='bonus_atributo'>{constituicaoBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(constituicao, constituicaoBonus)}
            </p>
            <section className='salva_pericia'>
              <div className='linha_pericia salvaguar_linha'>
                <article>
                  <div className='checkbox_salvaguardaa'>
                    <input
                      className='checkbox_style'
                      type='checkbox'
                      checked={checkboxConstituicao}
                      onChange={() =>
                        setCheckboxConstituicao(!checkboxConstituicao)
                      }
                    />
                    <h4 className='space_input'>
                      {checkboxConstituicao
                        ? contarNumerosPares(constituicao, constituicaoBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(constituicao, constituicaoBonus)}
                    </h4>
                  </div>
                </article>
                Salvaguarda
              </div>
            </section>
          </div>
        </article>
        <hr />
        <article className='mod_box'>
          <div>
            <h4 className='mod_name'>Inteligencia</h4>
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
            <p
              className='p_atributo'
              onClick={() => toggleVisibility('inteligencia')}>
              {isInteligencia ? inteligencia : inteligencia}{' '}
              <span className='bonus_atributo'>{inteligenciaBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(inteligencia, inteligenciaBonus)}
            </p>
            <section className='salva_pericia'>
              <div className='linha_pericia salvaguar_linha'>
                <article>
                  <div className='checkbox_salvaguardaa'>
                    <input
                      className='checkbox_style'
                      type='checkbox'
                      checked={checkboxInteligencia}
                      onChange={() =>
                        setCheckboxInteligencia(!checkboxInteligencia)
                      }
                    />
                    <h4 className='space_input'>
                      {checkboxInteligencia
                        ? contarNumerosPares(inteligencia, inteligenciaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(inteligencia, inteligenciaBonus)}
                    </h4>
                  </div>
                </article>
                Salvaguarda
              </div>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Arcanismo
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                História
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Investigação
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Natureza
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Religição
              </section>
            </section>
          </div>
        </article>
        <hr />
        <article className='mod_box'>
          <div>
            <h4 className='mod_name'>Sabedoria</h4>
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
            <p
              className='p_atributo'
              onClick={() => toggleVisibility('sabedoria')}>
              {isSabedoria ? sabedoria : sabedoria}{' '}
              <span className='bonus_atributo'>{sabedoriaBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(sabedoria, sabedoriaBonus)}
            </p>
            <section className='salva_pericia'>
              <div className='linha_pericia salvaguar_linha'>
                <article>
                  <div className='checkbox_salvaguardaa'>
                    <input
                      className='checkbox_style'
                      type='checkbox'
                      checked={checkboxSabedoria}
                      onChange={() => setCheckboxSabedoria(!checkboxSabedoria)}
                    />
                    <h4 className='space_input'>
                      {checkboxSabedoria
                        ? contarNumerosPares(sabedoria, sabedoriaBonus) +
                          Number(bonusProficiencia)
                        : contarNumerosPares(sabedoria, sabedoriaBonus)}
                    </h4>
                  </div>
                </article>
                Salvaguarda
              </div>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Intuição
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Lidar com Animais
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Medicina
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Percepção
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Sobrevivencia
              </section>
            </section>
          </div>
        </article>
        <hr />
        <article className='mod_box'>
          <div>
            <h4 className='mod_name'>Carisma</h4>
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

            <p
              className='p_atributo'
              onClick={() => toggleVisibility('carisma')}>
              {isCarisma ? carisma : carisma}{' '}
              <span className='bonus_atributo'>{carismaBonus}</span>
            </p>
            <p className='num_mod'>
              {contarNumerosPares(carisma, carismaBonus)}
            </p>
            <section className='salva_pericia'>
            <section className='linha_pericia'>
              <article className='linha_pericia'>
                <input
                    className='checkbox_style'
                    type='checkbox'
                    checked={checkboxCarisma}
                    onChange={() => setCheckboxCarisma(!checkboxCarisma)}
                  />

                  <h4 className='space_input'>
                    {checkboxCarisma
                      ? contarNumerosPares(carisma, carismaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(carisma, carismaBonus)}
                  </h4>
                </article>
                Salvaguarda
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                </article>
                <p className='space_input'>
                  {checkboxAtletismo
                    ? contarNumerosPares(forca, forcaBonus) +
                      Number(bonusProficiencia)
                    : contarNumerosPares(forca, forcaBonus)}
                </p>
                Atuação
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Enganação
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Intimidação
              </section>
              <section className='linha_pericia'>
                <article className='linha_pericia'>
                  <input
                    className='checkbox_proficiencia'
                    type='checkbox'
                    checkd={'XX'}
                    onChange={() => setCheckboxCarisma()}
                  />
                  <p className='space_input'>
                    {checkboxAtletismo
                      ? contarNumerosPares(forca, forcaBonus) +
                        Number(bonusProficiencia)
                      : contarNumerosPares(forca, forcaBonus)}
                  </p>
                </article>
                Persuasão
              </section>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};
