import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <header className={`py-3 w-full fixed z-10 transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <div className="flex justify-between items-center maxWidth">
                    <div className='flex flex-col items-center'>
                        <a href="" className={isScrolled ? 'text-black text-3xl uppercase font-black' : 'text-white text-3xl uppercase font-black'}>Logotipo</a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className={isScrolled ? 'text-black focus:outline-none' : 'text-white focus:outline-none'}>
                            <svg className="w-8 h-8 hover:text-[#D6181A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-center ${isScrolled ? 'bg-white' : 'bg-transparent'} flex flex-col items-center justify-center nav gap-8 absolute left-0 z-10 top-[61px] uppercase w-full py-3 lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
                        <ScrollLink duration={500} offset={0} to='main' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === 'main' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Início</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-70} to='services' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === 'services' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Serviços</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='about' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === 'about' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Sobre</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='projects' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === 'projects' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Projetos</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='contact' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === 'contact' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Contato</span>
                        </ScrollLink>

                        {/* <ScrollLink duration={500} offset={0} to='' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} ${activeSection === '' ? 'border-b-[2px] lg:border-b border-OrangeP' : ''}`}>Pedras Decorativas</span>
                        </ScrollLink> */}

                        {/* <a className={`block px-4 py-2 cursor-pointer ${isScrolled ? 'text-white bg-OrangeP' : 'text-white bg-OrangeP'} rounded`}>Orçamento</a> */}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
