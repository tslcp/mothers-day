"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FlashcardProps {
  frontText: string;
  imageSrc: string;
  altText: string;
}

export function Flashcard({ frontText, imageSrc, altText }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="cursor-pointer perspective-1000 relative h-64 w-full rounded-xl"
      onClick={handleClick}
    >
      <div 
        className={`relative h-full w-full duration-700 preserve-3d transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front - Chinese Text */}
        <div 
          className={`absolute h-full w-full backface-hidden rounded-xl bg-pink-100 p-6 shadow-md flex items-center justify-center ${
            isFlipped ? 'hidden sm:flex' : ''
          }`}
        >
          <p className="text-center text-lg font-semibold text-pink-800">{frontText}</p>
        </div>
        
        {/* Back - Image */}
        <div 
          className={`absolute h-full w-full backface-hidden rounded-xl overflow-hidden shadow-md ${
            isFlipped ? '' : 'rotate-y-180 hidden sm:block'
          }`}
        >
          <img 
            src={imageSrc} 
            alt={altText} 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}