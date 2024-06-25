import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">Sabor Local</h2>
                    <p className="text-gray-400 mt-2">© 2024 Todos los derechos reservados.</p>
                </div>

                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.facebook.com/saborlocalmx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://x.com/BuenSaborLocal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://www.instagram.com/saborlocalmx?igsh=M3hjNXJtaDN4bTRv " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaInstagram size={20} />
                    </a>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">Enlaces</h3>
                    <ul className="mt-2">
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white">Contacto</a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-gray-400 hover:text-white">Política de privacidad</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4">
                <div className="container mx-auto px-4 text-center md:text-left">
                    <p className="text-gray-400">
                        Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21, Las Brisas, 29150 Suchiapa, Chis, Mexico.          
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;