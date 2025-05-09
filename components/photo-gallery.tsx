"use client"

import { Flashcard } from "./flashcard";

const flashcardContent = [
  {
    frontText: "多么温馨的目光",
    imageSrc: "/images/mom1.jpg",
    altText: "Mother's warm gaze"
  },
  {
    frontText: "永远在背后带出温暖",
    imageSrc: "/images/mom2.jpg",
    altText: "Mother's warmth from behind"
  },
  {
    frontText: "在春风化雨的时候暖透我的心",
    imageSrc: "/images/mom3.jpg",
    altText: "Mother warming heart in spring rain"
  },
  {
    frontText: "一生眷顾无言地送赠",
    imageSrc: "/images/mom4.jpg",
    altText: "Mother's lifelong silent gifts"
  },
  {
    frontText: "教我坚毅望著前路",
    imageSrc: "/images/mom5.jpg",
    altText: "Mother teaching perseverance"
  },
  {
    frontText: "教我跌倒不应放弃",
    imageSrc: "/images/mom6.jpg",
    altText: "Mother teaching to never give up"
  }
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-20 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
      {flashcardContent.map((card, index) => (
        <div key={index} className="p-4">
          <Flashcard
            frontText={card.frontText}
            imageSrc={card.imageSrc}
            altText={card.altText}
          />
        </div>
      ))}
    </div>
  );
}
