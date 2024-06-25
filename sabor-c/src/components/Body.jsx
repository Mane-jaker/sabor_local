import Carousel from "./Carousel"
import Card from "./Card"
import Adelita from "../assets/adelita.jpg"
import Bocado from "../assets/bocado.jpg"
import Brisas from "../assets/brisas.jpg"
import Encasa from "../assets/encasa.jpg"
import Juquilita from "../assets/juquilita.jpg"
import Noanoa from "../assets/noanoa.jpg"
import Perla from "../assets/perla.jpg"
import Santafe from "../assets/santafe.jpg"
import Flamingasos from "../assets/flamingasos.jpg"
import Logo from "../assets/sabor_local_dos.svg"

function Body() {

    const adelita = {
        image: Adelita,
        title: "Doña Adelita",
        description: "Doña adelita es un increible restaurante, conocido por los estudiantes la UP, caracterizado por sus ricas tortas y aguas.",
        location: "Localizado enfrente de la Universidad Politecnica de Chiapas"
    };

    const bocado = {
        image: Bocado,
        title: "Ciudad bocado",
        description: "Ciudad bocado es un resutaurat con una variedad de alimentos, con increibles promociones todos los dias e incluso envio adomicilio.",
        location: "Localizado a enfrente de la UP entrando por el callejon"
    };

    const brisas = {
        image: Brisas,
        title: "las brisas",
        description: "Las brisas es un restaurante familiar donde puedes ir pasar un buen rato, con la familia y amigos, disfrutando de sus deliciossas comidas.",
        location: "Localizado a enfrente de la UP entrando por el callejon"
    }

    const encasa = {
        image: Encasa,
        title: "Como en casa",
        description: "Como en casa en un restaurant que te hara sentir como en casa, donde podras deleitarte con el increible sabor de la birria y otros mas.",
        location: "Localizado a enfrente de la UP entrando por el callejon"
    }

    const juquilita = {
        image: Juquilita,
        title: "Taqueria juquilita",
        description: "En taqueria juquilita encontraras una variedad de tacos deliciosos y de sus increibles promociones, el mejor lugar para comer unos deliciosos tacos.",
        location: "Calle Cuarta Ote. Nte., Asturias, 29150 Tuxtla Gutiérrez, Chis."
    }

    const noanoa = {
        image: Noanoa,
        title: "Cocteleria el noa noa",
        description: "Si un dia tienes antojo de mariscos el noa noa es tu lugar, una cocteletia quqe te deleitara con su increible sabor ideal para los dias de calor.",
        location: "CHIS 133, Mercado, 29150 Suchiapa, Chis."
    }

    const perla = {
        image: Perla,
        title: "Restaurante El Perla Negra",
        description: "restaurante el perla negra es un restaurante con esquisitos platillos que te dejaran con ganas de regresar continuamente.",
        location: "Carretera Tuxtla Gutiérrez.-Portillo Zaragoza Km 8, 29150 Las Brisas, Chis."
    }

    const santafe = {
        image: Santafe,
        title: "Rancho Santa Fe Restaurante y Banquetes",
        description: "En rancho santa fe, un lugar para ir a comer y disfrutar de las comidas y banquetes mas deliciosos de suchiapa.",
        location: "4 Av. Ote. Nte. s/n, San Jacinto, 29150 Suchiapa, Chis."
    }

    const flamingasos = {
        image: Flamingasos,
        title: "Flamingasos pizza",
        description: "Flamingasos pizza es un lugar de pizzas deliciosas, para esos dias que tengas antojo de comer un muy buena pizza.",
        location: "Calle Cuarta Ote. Nte. 35, Mercado, 29150 Suchiapa, Chis."
    }

    return (
        <main className="flex-1">
            <body>
                <section className="container mx-auto p-6 md:p-12 my-8 bg-white rounded shadow-lg flex flex-col md:flex-row items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="container px-4 py-8 text-center md:text-left">
                        <img src={Logo} alt="Descripción alternativa opcional" className="w-1/2 mx-auto" />
                    </div>
                </section>
                <section>
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-2xl font-bold text-gray-800 py-8">Promociones</h1>
                        <Carousel />
                    </div>
                </section>
                <section className="container mx-auto p-6 md:p-12 my-8 bg-white rounded shadow-lg flex flex-col md:flex-row items-center justify-between transform hover:scale-105 transition-transform duration-300">
                    <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold">Conócenos</h2>
                    </div>
                    <div className="w-full md:w-1/2 text-left text-md">
                        <p className="text-gray-700 leading-relaxed">
                            Sabor Local es una página dedicada a recopilar y celebrar los restaurantes locales que ofrecen un sabor <strong>exquisito</strong> y <strong>auténtico</strong>. Nuestro objetivo es descubrir y compartir los tesoros culinarios escondidos en cada rincón de nuestra comunidad.
                        </p>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Acompáñanos en este viaje culinario mientras exploramos sabores, tradiciones y recetas que han sido perfeccionadas a lo largo de los años. Ya sea que busques un lugar acogedor para una cena familiar, una joya escondida para una cita especial o simplemente deseas probar algo nuevo, Sabor Local es tu guía definitiva.
                        </p>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            ¡Descubre, disfruta y apoya a nuestros restaurantes locales favoritos!
                        </p>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto p-4 py-8">
                        <h1 className="text-2xl font-bold text-gray-800 py-8">Recomendacion UP</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card {...adelita} />
                            <Card {...bocado} />
                            <Card {...brisas} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 py-8">Antojitos</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card {...juquilita} />
                            <Card {...noanoa} />
                            <Card {...flamingasos} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 py-8">Delicias</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card {...encasa} />
                            <Card {...perla} />
                            <Card {...santafe} />
                        </div>
                    </div>
                </section>
            </body>
        </main>
    )
}

export default Body