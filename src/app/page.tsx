"use client";
import { useEffect, useRef, useState } from "react";
import { TypeOnView } from "../@components/TypeOnView";
import ReactConfetti from "react-confetti";
import ScrollIndicator from "@/@components/ScrollIndicator";
import Confetti from "@/@components/Confetti";

const audioFiles = [
  "/music.mp3",
  "/music2.mp3",
  "/music3.mp3",
]

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);


  const [sheClickedYes, setSheClickedYes] = useState(false);
  const [sheClickedNo, setSheClickedNo] = useState(false);

  const handleYesClick = () => {
    setSheClickedYes(true);
    setSheClickedNo(false);
    document
      .getElementById("yesResponse")
      ?.scrollIntoView({ behavior: "smooth" });

    // Play the audio when she clicks "Yes"
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.6; // start at 60%
      audio.play();

      // const fadeIn = setInterval(() => {
      //   if (audio.volume < 0.6) { // keep it at 60% max
      //     audio.volume = Math.min(audio.volume + 0.05, 1);
      //   } else {
      //     clearInterval(fadeIn);
      //   }
      // }, 100); // every 100ms, bump volume a bit
    } else {
      console.error("Audio element not found");
    }
  };

  const handleNoClick = () => {
    setSheClickedNo(true);
    setSheClickedYes(false);
    document
      .getElementById("yesResponse")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {

    const chosenAudio = Math.floor(Math.random() * audioFiles.length);

    console.log("Chosen audio file index:", chosenAudio);
    // Set the audio source based on the chosen audio
    if (audioRef.current) {
      audioRef.current.src = audioFiles[chosenAudio];
      audioRef.current.load(); // Load the audio file
    }

  }, []);

  return (
    <div className="font-sans flex flex-col items-center justify-between bg-gradient-to-br from-rose-400 to-pink-500 text-white scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="I want to tell you something..." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="I have been waiting to tell you this..." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="I have a secret..." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="I think you should know..." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="I found something in you that I cherish deeply." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="You created a spark in me." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="You are the reason I smile." />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text={["I want to be with you.", "Forever and ever!"]} />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-6xl font-bold">
          <TypeOnView text="I ❤️ you Priya!" className="text-5xl" />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="Do you love me?" />
        </div>
        <div className="flex flex-row gap-2 ">
          <button
            className="mt-4 px-6 py-2 bg-white text-nowrap text-pink-500 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={handleYesClick}
          >
            Yes, I do!
          </button>
          <button
            className="mt-4 px-6 py-2 bg-white text-nowrap text-pink-500 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={handleNoClick}
          >
            No, I don&apos;t!
          </button>
        </div>
      </main>
      <main
        id="yesResponse"
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative"
      >
        {sheClickedYes && (
          <>
            <div className="mt-4 text-3xl font-bold">
              <TypeOnView
                loop={10}
                text={[
                  "I love you so much!",
                  "I love you to the moon and back!!",
                ]}
              />
            </div>
            <Confetti
            // colors={['#ff6b81', '#ff4757', '#f368e0', '#e84393']}
            // drawShape={(ctx) => {
            //   ctx.beginPath();
            //   const x = 0;
            //   const y = 0;
            //   const size = 0.05; // Smaller value = smaller hearts

            //   ctx.moveTo(x, y);
            //   ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
            //   ctx.bezierCurveTo(
            //     x - size,
            //     y + size,
            //     x,
            //     y + size * 1.5,
            //     x,
            //     y + size * 2
            //   );
            //   ctx.bezierCurveTo(
            //     x,
            //     y + size * 1.5,
            //     x + size,
            //     y + size,
            //     x + size,
            //     y
            //   );
            //   ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);

            //   ctx.closePath();
            //   ctx.fill();
            // }}
            />
          </>
        )}
        {sheClickedNo && (
          <div className="mt-4 text-3xl font-bold">
            <TypeOnView
              text={[
                "Oh no! That's sad, but I respect your feelings.",
                "I made a mistake. Please forgive me.",
              ]}
            />
          </div>
        )}
      </main>
      {sheClickedNo && (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
          <div className="text-5xl font-bold">
            <TypeOnView text="Thank you for being you!" />
          </div>
          <ScrollIndicator />
        </main>
      )}
      {sheClickedYes && (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
          <div className="text-5xl font-bold">
            <TypeOnView
              text={[
                "I want to spend the rest of my life with you.",
                "I want to grow old with you.",
                "I want to create beautiful memories with you.",
                "I want to celebrate your birthday with you.",
              ]}
            />
          </div>
        </main>
      )}
      <audio ref={audioRef} className="hidden"></audio>
      <footer className="flex text-center text-xl text-balance items-center justify-center w-full h-24 mb-2 snap-start">
        <p> Made with ❤️ for Priya Dharshini by Sairam Mangeshkar </p>
      </footer>
    </div>
  );
}
