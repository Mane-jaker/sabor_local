import Flickity from 'react-flickity-component';
import image from '../assets/hamburguesa.jpg';
import image2 from '../assets/pastor.jpg';
import image3 from '../assets/negra.jpg';
import 'flickity/css/flickity.css';

function Carousel() {
    const flickityOptions = {
        initialIndex: 0,
        pageDots: true, 
        wrapAround: true, 
        autoPlay: 3000, 
    };
    
    const images = [
        { 
            id: 1, 
            src: image, 
            alt: 'Imagen 1',
            title: 'HAMBURGUESAS 2X1!!!',
            description: 'Disponible en Ciudad Bocado los dias <strong>Martes</strong> y <strong>Miercoles</strong>'
        },
        { 
            id: 2, 
            src: image2, 
            alt: 'Imagen 2',
            title: '¡Tacos al pastor 2X1!',
            description: 'Aprovecha esta promoción especial de juquilita <strong>TODOS LOS DIAS</strong>'
        },
        { 
            id: 3, 
            src: image3, 
            alt: 'Imagen 3',
            title: 'Descuentos en Bebidas',
            description: 'Disfruta de un <strong>50% de descuento</strong> en todas las bebidas en el Perla Negra'
        },
    ];

    return (
        <div className="container mx-auto h-96 w-full">
          <Flickity
            className={'carousel h-96 w-full'} 
            elementType={'div'} 
            options={flickityOptions}
            disableImagesLoaded={false} 
            reloadOnUpdate 
          >
            {images.map((image) => (
              <div key={image.id} className="carousel-cell h-96 w-full rounded-xl overflow-hidden flex items-center space-x-4">
                <div className='w-1/3'>
                    <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">{image.title}</h1>
                    <p className="text-gray-700 mt-4 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: image.description }}>
                    </p>
                </div>
                <img src={image.src} alt={image.alt} className='object-none h-full w-3/4 rounded-xl'/>
              </div>
            ))}
          </Flickity>
        </div>
    );
}

export default Carousel;
