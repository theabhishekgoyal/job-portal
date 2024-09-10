import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              Career<span className="text-[#F83002]">Cue</span>
            </h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://abhishekgoyal.vercel.app" className="hover:text-gray-400" aria-label="Your Website">
              <Globe className='h-6 w-6' />
            </a>
            <a href="https://instagram.com/agoyal0308">
              <FaInstagram className='h-6 w-6' />

            </a>

            <a href="https://twitter.com/agoyal0308" className="hover:text-gray-400" aria-label="Twitter">
              <X className='h-6 w-6' />
            </a>
            <a href="https://github.com/theabhishekgoyal/" className="hover:text-gray-400" aria-label="Github">
             <FaGithub className='h-6 w-6'/>
            </a>
            
            <a href="https://linkedin.com/in/agoyal0308" className="hover:text-gray-400" aria-label="LinkedIn">
              <Linkedin className='h-6 w-6' />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;