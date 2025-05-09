"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  startTyping?: boolean;
  keepCursorFlashing?: boolean;
  dangerouslySetInnerHTML?: boolean;
}

export default function Typewriter({ 
  text, 
  delay = 50, 
  startDelay = 0,
  className = "", 
  startTyping = true,
  keepCursorFlashing = false,
  dangerouslySetInnerHTML = false
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // Process the text to handle HTML tags
  useEffect(() => {
    // Only start typing if startTyping is true
    if (!startTyping) return;

    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          // When dealing with HTML, we need to check if we're inside a tag
          if (dangerouslySetInnerHTML) {
            let newText = text.substring(0, currentIndex + 1);
            // If we have a partial HTML tag at the end, hide it until complete
            const openTagCount = (newText.match(/</g) || []).length;
            const closeTagCount = (newText.match(/>/g) || []).length;
            
            if (openTagCount > closeTagCount) {
              // We're in the middle of a tag, use the text before the last '<'
              const lastOpenTag = newText.lastIndexOf('<');
              newText = text.substring(0, lastOpenTag);
            }
            
            setDisplayedText(newText);
          } else {
            // Normal text processing without HTML
            setDisplayedText(text.substring(0, currentIndex + 1));
          }
          
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        
        return () => clearTimeout(timeout);
      } else {
        setDisplayedText(text);
        setIsComplete(true);
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, delay, text, startTyping, dangerouslySetInnerHTML, startDelay]);

  // Determine if cursor should be shown
  const showCursor = !isComplete || keepCursorFlashing;

  return (
    <span className={`${className} ${showCursor ? 'after:inline-block after:w-0.5 after:h-5 after:bg-white after:ml-1 after:align-middle after:animate-pulse' : ''}`}>
      {dangerouslySetInnerHTML ? (
        <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      ) : (
        displayedText
      )}
    </span>
  );
}
