//, Donate, DonateChivo, Mk
import {PopOver} from './'

export function NavBar () {

  return <nav className="bg-gray-800 flex text-white p-4">
  
    <div className="w-2/3 flex justify-start-safe items-center gap-4"> 
      <article className="text-sm sm:text-lg">
        ¡Bienvenido al rincón de <span className="text-yellow-300 animate-pulse">LUCE</span>!
      </article>
    </div>

    <div className="w-1/3 flex justify-end-safe gap-4">

      <PopOver
        transparency="opaque"
        type="help"
        id="about"
        title="«SER ES DEFENDERSE» "
        description={
`# **¡DESPIERTA, HISPANO!**

No eres un individuo suelto. Eres parte de un pueblo con 500 años de destino compartido. Mientras el liberalismo te vende "libertad" para consumir y "progreso" para olvidar quién eres, aquí defendemos lo único que importa: **Dios, Patria y Pan**.

## La lucha es una sola

Como enseña **Marcello Gullo**, el enemigo es el mismo desde siempre: el liberalismo, ese virus que disuelve los vínculos sagrados entre el hombre y su tierra, entre el trabajador y su comunidad, entre el alma y su Creador. No hay tres batallas separadas. Hay **una guerra**: la Hispanidad contra la modernidad disolvente.

**Santiago Armesilla** lo dice sin rodeos: la Hispanidad es la única alternativa real al capitalismo globalista. El imperio español no explotó al indio — lo incorporó. No destruyó al pueblo — lo elevó a la dignidad de cristiano y súbdito de una Corona común. Eso es lo que quieren borrar: que fuimos un proyecto de **hermandad entre naciones**, no de saqueo anglosajón.

## Tres frentes, un solo combate

- **La Hispanidad**: rechazamos la Leyenda Negra. España no fue verdugo, fue madre de pueblos. Frente al globalismo que nos quiere mano de obra desarraigada, reivindicamos la Patria Grande que nos parió.
- **La Iglesia Católica**: sin Cristo no hay hombre libre. El liberalismo te quiere autónomo y vacío; la Iglesia te quiere hijo y hermano. La fe no es opio: es la única muralla que el capital no puede derribar.
- **Los trabajadores**: no como masa de consumo, sino como **gremio, familia, comunidad**. El liberal te dice "triunfa solo"; nosotros decimos "nadie se salva solo".

## Únete

Aquí no vendemos ideología importada. Aquí recuperamos lo que nos robaron: **la conciencia de ser un pueblo con misión**.

Porque defender a Hispanidad, a la Iglesia y al trabajador **es exactamente la misma cosa**: defender al hombre entero contra el sistema que lo quiere roto.

**Lee. Reflexiona. Organízate. Hispano, la Patria te llama.**

`
        }
      /> 

    </div>
    
  </nav>
}


//function About () {
//  return <div><Mk body={
//    `# **¡DESPIERTA, HISPANO!**
//
//No eres un individuo suelto. Eres parte de un pueblo con 500 años de destino compartido. Mientras el liberalismo te vende "libertad" para consumir y "progreso" para olvidar quién eres, aquí defendemos lo único que importa: **Dios, Patria y Pan**.
//
//## La lucha es una sola
//
//Como enseña **Marcello Gullo**, el enemigo es el mismo desde siempre: el liberalismo, ese virus que disuelve los vínculos sagrados entre el hombre y su tierra, entre el trabajador y su comunidad, entre el alma y su Creador. No hay tres batallas separadas. Hay **una guerra**: la Hispanidad contra la modernidad disolvente.
//
//**Santiago Armesilla** lo dice sin rodeos: la Hispanidad es la única alternativa real al capitalismo globalista. El imperio español no explotó al indio — lo incorporó. No destruyó al pueblo — lo elevó a la dignidad de cristiano y súbdito de una Corona común. Eso es lo que quieren borrar: que fuimos un proyecto de **hermandad entre naciones**, no de saqueo anglosajón.
//
//## Tres frentes, un solo combate
//
//- **La Hispanidad**: rechazamos la Leyenda Negra. España no fue verdugo, fue madre de pueblos. Frente al globalismo que nos quiere mano de obra desarraigada, reivindicamos la Patria Grande que nos parió.
//- **La Iglesia Católica**: sin Cristo no hay hombre libre. El liberalismo te quiere autónomo y vacío; la Iglesia te quiere hijo y hermano. La fe no es opio: es la única muralla que el capital no puede derribar.
//- **Los trabajadores**: no como masa de consumo, sino como **gremio, familia, comunidad**. El liberal te dice "triunfa solo"; nosotros decimos "nadie se salva solo".
//
//## Únete
//
//Aquí no vendemos ideología importada. Aquí recuperamos lo que nos robaron: **la conciencia de ser un pueblo con misión**.
//
//Porque defender a Hispanidad, a la Iglesia y al trabajador **es exactamente la misma cosa**: defender al hombre entero contra el sistema que lo quiere roto.
//
//**Lee. Reflexiona. Organízate. Hispano, la Patria te llama.**
//
//
//    `
//
//
//
//  }
//className="mk-content"
//  /></div>
//}
//
//
//
//
//    //<PopOver
//    //    transparency="opaque"
//    //    type="donation"
//    //    id="donation"
//    //    title="Ayudanos a llegar a mas personas!"
//    //    description=""
//    //    //description="Hereje y reaccionario  son lo mismo: si no se les ataca, no caen. Es como barrer el suelo; por regla general, donde no llega la escoba, el polvo no desaparece por sí solo."
//    //>
//    //
//    //  <Donate />
//    //  <DonateChivo />
//    //
//    //</PopOver>
//    //
//    //
//    //
//    //
