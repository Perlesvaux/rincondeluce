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

const ave_christus_rex:Item = {
  hasNew:false,
  kind:"playlist",
  title:"AVE CHRISTUS REX",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVJ0Mut6pnSHul9WK2j62YVt&si=N-_4_4StGg6LT-1b",
  image:"/surprised-tbg.webp",
  legend:<>¡El <i>sentido aracnido</i> es real! Y lo mejor es que <strong>se entrena con esta lista de reproducción.</strong></>,
  description:<><p>Lista de reproducción sobre: <strong>Filosofía, Religión y Politica</strong></p> <blockquote>«Al amigo, todo; al enemigo, ni justicia» ― Perón</blockquote> <blockquote>«Un soldado sin formación política e ideológica no es más que un criminal de guerra en potencia» ― Thomas Sankara.</blockquote></>,
}

const deus_vult:Item = {
  hasNew:true,
  kind:"book",
  title:"DEUS VULT",
  url:"https://materialknight.github.io/doctrina-catolica/",
  image:"/study-tbg.webp",
  legend:<><i>Catecismo</i>, <i>Didajé</i>, etc. No basta rezar. ¡Hace falta estudiar! ¡Empieza tu estudio de <strong>«Doctrina Catholica»</strong> hoy!</>,
  description:<>Compendio de doctrina Católica. Nuevo contenido cada tanto. Encontrarás: 
    <ul className="list-disc pl-4">
<li>Catecismo de la Iglesia Católica</li>
<li>Compendio del Catecismo de la Iglesia Católica</li>
<li>Doctrina del Señor transmitida a las naciones por los Doce Apóstoles (Didajé)</li>
<li>Epístola a Diogneto</li>
  </ul>
    </>,
}

const pugiles_fidei:Item = {
  hasNew:false,
  kind:"app",
  title:"PUGILES FIDEI",
  url:"https://rosario-lime.vercel.app/",
  image:'/mystery-tbg.webp',
  legend: <>¿Te gustan los <i>misterios</i>? ¡Aqui hay varios! ¡Acompaña <strong>todos los días</strong> a Santo Domingo de Guzmán a resolverlos!</>,
  description:<><p>¡Aqui puedes descargar la App definitiva para rezar <strong>el Santo Rosario</strong> en familia!</p> <p>La App cuenta con un <i>contador de racha</i>. ¡Procura no perderla!</p> <p></p>NEW: <strong>Coronilla a la Divina Misericordia</strong> </>,
}


const sinite_parvulos_venire_ad_me:Item = {
  hasNew:false,
  kind:"playlist",
  title:"SINITE PARVULOS VENIRE AD ME",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVL3a1Ytl8FNjGNPNwC-2TLs&si=5j8Bdm8yf4ktLRjd",
  image:'/videogame-tbg.webp',
  legend: <>¿Tenés menos de 25 años? <strong>¡ESTA PLAYLIST ES PARA VOS!</strong></>,
  description:<>Lista de reproducción <strong>juvenil</strong></>,
}


const vade_retro_satana:Item = {
  hasNew:false,
  kind:"playlist",
  title:"VADE RETRO SATANA",
  url:"https://youtube.com/playlist?list=PLGtBzYHaqCVJ3QERrJqyMiA7-i5TRW-31&si=dvxT7Q5S54x_w1qq",
  image:'/flamingsword-tbg.webp',
  legend: <><i>Las Montañas</i>, el cielo y tu fe moveran. <i>Santa Tierra</i>, <strong>¡por ella hoy debes luchar!</strong></>,
  description:<><p>Lista de reproducción: <strong>Apologética</strong></p> <blockquote>«Sepa el moro y el judio / Y el ingles que anda en el mar / Que María es concebida Sin pecado original» </blockquote> <blockquote>«Catolico ignorante, seguro protestante»</blockquote> <blockquote> «El error no tiene derechos» </blockquote> <blockquote>«Cuando el hombre deja de creer en Dios, no es que no crea en nada, sino que pasa a creer en cualquier cosa» ―G.K. Chesterton</blockquote> </>,
}



export const ITEMS:Item[] = [
  pugiles_fidei,
  deus_vult,
  vade_retro_satana,
  sinite_parvulos_venire_ad_me,
  ave_christus_rex,


]
