import React, { useState } from "react";

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
          <input type='number' value='destreza' />
        </div>
        <div>
          <p>Constituição</p>
          <input type='number' value='constutuicao' />
        </div>
        <div>
          <p>Inteligencia</p>
          <input type='number' value='inteligencia' />
        </div>
        <div>
          <p>Sabedoria</p>
          <input type='number' value='sabedoria' />
        </div>
        <div>
          <p>Carisma</p>
          <input type='number' value='carisma' />
        </div>
      </section>
    );
}