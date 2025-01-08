"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Customers({}: Props) {
  const [hasFlipped, setHasFlipped] = React.useState(false);
  const [lockBoard, setLockBoard] = React.useState(false);

  const handleFlipCard = () => {
    if (lockBoard) return;
    setHasFlipped(!hasFlipped);
    setLockBoard(true);
    setTimeout(() => setLockBoard(false), 1000);
  };
  return (
    <div className="flex justify-center h-screen items-center bg-background">
      <section className="bg-accent relative p-5 flex flex-col justify-center items-center">
        {/* Card Container */}
        <div className="w-80 h-80 [perspective:1000px]">
          {/* Card */}
          <div
            onClick={handleFlipCard}
            className={`relative w-full h-full cursor-pointer 
              [transform-style:preserve-3d] 
              [transition:transform_0.6s] 
              ${hasFlipped ? "[transform:rotateY(180deg)]" : ""}`}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full 
              [backface-visibility:hidden]"
            >
              <Image
                src="/img/js-badge.svg"
                width={300}
                height={300}
                className="w-full h-full"
                alt="Js Badge"
              />
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full 
              [backface-visibility:hidden] 
              [transform:rotateY(180deg)]"
            >
              <Image
                src="/img/aurelia.svg"
                width={300}
                height={300}
                className="w-full h-full p-20"
                alt="Aurelia Construction"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
