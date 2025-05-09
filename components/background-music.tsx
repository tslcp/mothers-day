"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    // Try to play - first attempt
    const attemptPlay = () => {
      const playPromise = audioElement.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        }).catch(() => {
          // First attempt failed, try with muted audio
          audioElement.muted = true;
          const mutedPlayPromise = audioElement.play();
          
          if (mutedPlayPromise !== undefined) {
            mutedPlayPromise.then(() => {
              // Successfully playing muted
              setIsPlaying(true);
              // Show play button to unmute
              setShowPlayButton(true);
              setIsMuted(true);
            }).catch(() => {
              // Even muted playback failed, show play button
              setShowPlayButton(true);
            });
          }
        });
      }
    };

    attemptPlay();

    // Add event listeners to try playing after user interaction
    const handleUserInteraction = () => {
      if (!isPlaying) {
        audioElement.muted = false;
        audioElement.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setShowPlayButton(false);
        }).catch(() => {
          setShowPlayButton(true);
        });
      }
      
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.muted = false;
        audioRef.current.play();
        setIsMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef}
        src="/bgm.mp3" 
        loop 
        preload="auto"
      />
      
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        {showPlayButton && (
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/80 text-pink-700" 
            onClick={togglePlay}
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </Button>
        )}
        {isPlaying && (
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/80 text-pink-700" 
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
        )}
      </div>
    </>
  );
}