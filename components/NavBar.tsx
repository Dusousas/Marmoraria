import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null); // Timeout state
    const router = useRouter();

    const toggleMenu = () => {
        console.log("Toggling menu", isOpen);  // Verifique o estado
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleNavigation = (sectionId: string) => {
        if (router.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
        closeMenu();
    };

    const handleMouseEnter = () => {
        if (submenuTimeout) {
            clearTimeout(submenuTimeout); // Cancel any existing timeout
            setSubmenuTimeout(null);
        }
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsSubMenuOpen(false); // Close submenu after delay
        }, 500); // Delay in milliseconds (500ms = 0.5 seconds)
        setSubmenuTimeout(timeout);
    };

    return (
        <header className="py-3 bg-white fixed w-full z-20">
            <div className="flex justify-between items-center maxWidth">
                {/* LOGO */}
                <div>
                    <a className='text-black uppercase font-black text-2xl font-Oswald ' href="#">Karina Marmoraria</a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-8 h-8 hover:text-OrangeP" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                {/* MENU */}
                <nav className={`lg:flex text-black font-semibold ${isOpen ? 'block' : 'hidden'} custom-height h-[100vh] text-center bg-OrangeP flex flex-col gap-10 items-center justify-center absolute left-0 z-10 top-[60px] uppercase w-full lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
                    <span onClick={() => handleNavigation('main')} className={`block py-2 cursor-pointer ${activeSection === 'main' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Início</span>
                    <span onClick={() => handleNavigation('services')} className={`block py-2 cursor-pointer ${activeSection === 'services' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Serviços</span>
                    <span onClick={() => handleNavigation('about')} className={`block py-2 cursor-pointer ${activeSection === 'about' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Sobre</span>
                    {/* SUBMENU */}
                    <div className="relative group flex justify-start" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <span onClick={() => handleNavigation('projects')} className={` py-2 cursor-pointer flex items-center ${activeSection === 'projects' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Projetos<IoIosArrowDown className={`ml-2 transform transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} /></span>
                        {isSubMenuOpen && (
                            <div className="absolute hidden left-[-340px] top-[51px] bg-white shadow-md items-center lg:grid Lg:grid-rows-5 lg:grid-cols-3 lg:w-[800px] text-[14px]">
                                <a onClick={closeMenu} href="/ProjetoBanheiro" className="px-4 py-2 hover:bg-gray-100">Banheiros em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Cozinhas em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Churrasqueiras em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Escadas em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Escritórios em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Hall em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Lareira Esculpida em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Lareira Moderna</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Lavatórios em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Luminárias em Ônix</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Piso em Granito</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Piscinas em Mármore</a>
                                <a onClick={closeMenu} href="#banheiros" className="px-4 py-2 hover:bg-gray-100">Salas em Mármore</a>
                            </div>
                        )}
                    </div>
                    <span onClick={() => handleNavigation('contact')} className={`block py-2 cursor-pointer ${activeSection === 'contact' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Contato</span>
                    <Link href='/pedras' passHref>
                        <span onClick={closeMenu} className={`block py-2 cursor-pointer ${router.pathname === '/pedras' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Pedras Decorativas</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
