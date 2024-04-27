import React from "react";

export const Title = () => { 
    return (
      <section>
        <div><p>Força</p>
        <input type="number" value='forca'/>
        </div>
        <div><p>Destreza</p>
        <input type="number" value='destreza'/>
        </div>
        <div><p>Constituição</p>
        <input type="number" value='constutuicao'/>
        </div>
        <div><p>Inteligencia</p>
        <input type="number" value='inteligencia'/>
        </div>
        <div><p>Sabedoria</p>
        <input type="number" value='sabedoria'/>
        </div>
        <div><p>Carisma</p>
        <input type="number" value='carisma'/>
        </div>
      </section>
    );
}