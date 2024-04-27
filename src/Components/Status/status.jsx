import React, { useState } from 'react';

export const Status = () => {
  const [forca, setForca] = useState('');
  const [destreza, setdestreza] = useState('');
  const [constutuicao, setconstutuicao] = useState('');
  const [inteligencia, setinteligencia] = useState('');
  const [sabedoria, setsabedoria] = useState('');
  const [carisma, setcarisma] = useState('');

  return (
    <section>
      <div>
        <p>Força</p>
        <input
          type='number'
          value={forca}
          onChange={(e) => setForca(e.target.value)}
        />
      </div>

      <div>
        <p>Destreza</p>
        <input
          type='number'
          value={destreza}
          onChange={(e) => setdestreza(e.target.value)}
        />
      </div>
      <div>
        <p>Constituição</p>
        <input
          type='number'
          value={constutuicao}
          onChange={(e) => setconstutuicao(e.target.value)}
        />
      </div>
      <div>
        <p>Inteligencia</p>
        <input
          type='number'
          value={inteligencia}
          onChange={(e) => setinteligencia(e.target.value)}
        />
      </div>
      <div>
        <p>Sabedoria</p>
        <input
          type='number'
          value={sabedoria}
          onChange={(e) => setsabedoria(e.target.value)}
        />
      </div>
      <div>
        <p>Carisma</p>
        <input
          type='number'
          value={carisma}
          onChange={(e) => setcarisma(e.target.value)}
        />
      </div>
    </section>
  );
};
