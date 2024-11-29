import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Whatsapp() {
    return (
        <>
            <section className=''>
                <div className=''>
                    <a
                        href="https://wa.me/1234567890" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 bg-green-500 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>

                </div>
            </section>

        </>
    );
}

