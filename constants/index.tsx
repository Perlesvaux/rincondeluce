//import love from '/love.webp'
//import reading from '/reading.webp'
//import hi from '/hi.webp'
//import bye from '/bye.webp'
//import water from '/water.webp'
//import gardening from '/gardening.webp'
//import work from '/work.webp'
//import movie from '/movie.webp'


//import knight from '/knight.webp'
//import dishes from '/dishes.webp'
//import goku from '/goku.webp'
//import shinji from '/shinji.webp'
//import track from '/track.webp'


// in use
//import flamingsword from '/flamingsword.webp'
//import mystery from '/mystery.webp'
//import study from '/study.webp'
//import videogame from '/videogame.webp'
//import surprised from '/surprised.webp'
import type {Item} from '@/types'
import { filomat } from './filomat'

const ave_christus_rex:Item = {
  hasNew:false,
  kind:"playlist",
  title:"AVE CHRISTUS REX",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVJ0Mut6pnSHul9WK2j62YVt&si=N-_4_4StGg6LT-1b",
  image:"/surprised-tbg.webp",
  legend:`¡El *sentido aracnido* es real! Y lo mejor es que **se entrena con esta lista de reproducción.**`,
  description:`Lista de reproducción **economico-politica**

> «Un soldado sin formación política e ideológica no es más que un criminal de guerra en potencia»
  ― Thomas Sankara.

  `,
}
//
const deus_vult:Item = {
  hasNew:true,
  kind:"book",
  title:"DEUS VULT",
  url:"https://materialknight.github.io/doctrina-catolica/",
  image:"/study-tbg.webp",
  legend:`*Catecismo*, *Didajé*, etc. No basta rezar. ¡Hace falta **estudiar**! ¡Empieza tu estudio de ***«Doctrina Catholica»*** hoy!`,
  description:`Compendio de doctrina Católica. Se actualiza con frecuencia. Encontrarás:
## Obras principales

- Biblia Straubinger
- Catecismo de la Iglesia Católica
- Compendio del Catecismo de la Iglesia Católica

## Obras cortas

- Admoniciones - Francisco de Asís
- Cántico de las Criaturas - Francisco de Asís
- Doctrina de los Doce Apóstoles
- Epístola a Diogneto
- Epístola a los Corintios - Clemente de Roma
- Epístola de Bernabé
- Predicación Apostólica - Ireneo de Lyón

## Documentos eclesiásticos
### Concilio Vaticano II

- Constitución Dogmática Dei Verbum
- Constitución Dogmática Lumen Gentium

## Otros documentos

- Carta Apostólica Laetamur Magnopere
- Carta Apostólica para la aprobación y publicación del Compendio del Catecismo de la Iglesia Católica
- Constitución Apostólica Fidei Depositum

  `,
}

const pugiles_fidei:Item = {
  hasNew:false,
  kind:"app",
  title:"PUGILES FIDEI",
  url:"https://rosario-lime.vercel.app/",
  image:'/mystery-tbg.webp',
  legend: `¿Te gustan los *misterios*? ¡Aqui hay varios! ¡Acompaña **todos los días** a Santo Domingo de Guzmán a resolverlos!`,
  description:`## El Santo Rosario 

¡Aqui puedes descargar la App definitiva para rezar el Santo Rosario en familia!

La App cuenta con un **contador de racha**. ¡Procura no perderla!

**NEW:** Coronilla a la Divina Misericordia `,
}
//
//
const sinite_parvulos_venire_ad_me:Item = {
  hasNew:false,
  kind:"playlist",
  title:"SINITE PARVULOS VENIRE AD ME",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVL3a1Ytl8FNjGNPNwC-2TLs&si=5j8Bdm8yf4ktLRjd",
  image:'/videogame-tbg.webp',
  legend: `¿Tenés menos de 30 años? **¡ESTA PLAYLIST ES PARA VOS!**`,
  description:`Lista de reproducción pensada para **jovenes**.

> «Se llama *sueño americano* porque hay que estar dormido para creerlo». 
― George Carlin

> «Dadme, cielos, **desengaño**» 
― Pedro Calderón de la Barca

[ Mateo 18:6 ](https://materialknight.github.io/doctrina-catolica/biblia-straubinger/mateo#c18-v6)

  `,
}


const vade_retro_satana:Item = {
  hasNew:false,
  kind:"playlist",
  title:"VADE RETRO SATANA",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVJ3QERrJqyMiA7-i5TRW-31&si=dvxT7Q5S54x_w1qq",
  image:'/flamingsword-tbg.webp',
  legend: `«Las Montañas, el cielo y tu fe moveran. Santa Tierra, **¡por ella hoy debes luchar!**»`,
  description:`Lista de reproducción: **Apologética**

> «Sepa el moro y el judio / Y el ingles que anda en el mar / Que María es concebida Sin pecado original»
― Dicho Popular

> «Catolico ignorante, seguro protestante»
― Verdad evidente

> «El error no tiene derechos» 
― Principio Catolico de toda la vida

> «Cuando el hombre deja de creer en Dios, no es que no crea en nada, sino que pasa a creer en cualquier cosa» 
―G.K. Chesterton
  `,
}


const error_non_habet_ius: Item = {
  hasNew: true,
  kind:"playlist",
  title:"ERROR NON HABET IUS",
  url:"https://www.youtube.com/playlist?list=PLFu0ECkKkwlc",
  image:'/gardening-tbg.webp',
  legend:`¿Cual es el papel de la filosofia en el *conjunto del hacer*? **... el deshacer ... el triturar  ... el demoler.**`,
  description: filomat


}



export const ITEMS:Item[] = [
  pugiles_fidei,
  deus_vult,
  vade_retro_satana,
  error_non_habet_ius,
  sinite_parvulos_venire_ad_me,
  ave_christus_rex,



]
