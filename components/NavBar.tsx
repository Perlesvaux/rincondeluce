import {PopOver, Donate, DonateChivo} from './'

export function NavBar () {

  return <nav className="bg-gray-800 flex text-white p-4">
  
    <div className="w-2/3 flex justify-start-safe items-center gap-4"> 
      <article className="text-xs sm:text-lg">
        ¡Bienvenido al rincón de <span className="text-yellow-300 animate-pulse">LUCE</span>!
      </article>
    </div>

    <div className="w-1/3 flex justify-end-safe gap-4">

    <PopOver
        transparency="opaque"
        type="donation"
        id="donation"
        title="Ayudanos a llegar a mas personas!"
        description=""
        //description="Hereje y reaccionario  son lo mismo: si no se les ataca, no caen. Es como barrer el suelo; por regla general, donde no llega la escoba, el polvo no desaparece por sí solo."
    >

      <Donate />
      <DonateChivo />

    </PopOver>
      <PopOver
        transparency="opaque"
        type="help"
        id="about"
        title="«SER ES DEFENDERSE» "
        description="Encuentra aqui un arsenal para defender tu fe."
      > 

        <About/>
      </PopOver>
    </div>
    
  </nav>
}


function About () {
  return <>

    <p className="text-yellow-300 font-black">P: "¿Dónde estoy?"</p>
    <p className="text-yellow-100 font-black">R: Una trinchera Anti-liberal</p>
    <p className="text-yellow-300 font-black">P: "... Y eso a mi qué?  ¯\_(ツ)_/¯"</p>
    <p className="text-yellow-100 font-black">R: Dejare que <strong>Marcelo Gullo (2022)</strong> responda:</p>

    <p className="text-yellow-100 p-4">«El <strong>imperialismo británico</strong>, que acaba por ser de corte <strong>calvinista</strong>, toma cuerpo en las islas británicas porque hay dentro de Inglaterra un sector político-económico que <strong>desea quedarse con los bienes de la Iglesia y con América.</strong> Para ello <strong>hay que destruir al catolicismo y a España</strong></p>
    <p className="text-yellow-100 p-4">Los <strong>protestantes puritanos</strong> que van a los Estados Unidos se consideran un nuevo pueblo elegido por Dios. Creen que están haciendo un viaje similar al del pueblo hebreo cruzando el Mar Rojo cuando cruzan en Atlántico. <strong>El ‘Destino manifiesto’ es construir la Nueva Jerusalén en América</strong>. </p>
    <p className="text-yellow-100 p-4">Su concepción es que <strong>el hombre ha sido aniquilado por el pecado original</strong> y que Cristo ha venido para salvar sólo a unos pocos, que son -por supuesto- ellos. Consideran que todos esos aborígenes que hay en América están <strong>muertos por el pecado original</strong> y, si están muertos espiritualmente, lo que hay que hacer es matarlos físicamente. Si para ello tienen que matar a todos los indios, hay que matarlos; y si hay que robar todos los territorios de América a todos los indios, incluidos a los de la América española, hay que quitárselos. El lema que ellos mismos proclaman asevera que “el mejor indio es el indio muerto”. Pero ese lema tiene una profunda <strong>raíz teológica incomprensible fuera de la cosmovisión calvinista-puritana.</strong>»</p>

  </>
}





