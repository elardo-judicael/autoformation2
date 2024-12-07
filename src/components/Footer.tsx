import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Informations de contact */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="mt-2">Email: Autoformationcomptegasy@hotmail.com</p>
            <p className="mt-1">Téléphone: +261 32 86 863 99</p>
          </div>

          {/* Liens sociaux */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://facebook.com/groups/2568696943271080/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          © 2024 AutoforrmationCompteGasy. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
