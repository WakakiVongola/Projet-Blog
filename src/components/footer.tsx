import React from 'react';

const footer = () => {
    return (
        <footer>
            <div className='flex flex-col items-center bg-blanc border-y-2 border-black relative inset-x-0 bottom-0 pb-10 mb-1'>
                <div className='flex flex-row gap-12 p-10'>
                    <a className='hover:text-gray-600 hover:scale-110' href='/equipe'>Notre équipe</a>
                    <a className='hover:text-gray-600 hover:scale-110' href='/cgn'>Conditions d'utilisations</a>
                    <a className='hover:text-gray-600 hover:scale-110' href='https://twitter.com/fr/privacy'>Politique de confidentialité</a>
                    <a className='hover:text-gray-600 hover:scale-110' href='https://github.com/NathanLeDev/Projet-Blog'>FAQ</a>
                    <a className='hover:text-gray-600 hover:scale-110' href='mailto:rennes@supdevinci.fr'>Nous contacter</a>
                </div>
                © 2024 Elite Houses votre blog par Aaron Jacky Nathan et Rayan.
            </div>
        </footer>
    );
};

export default footer;
