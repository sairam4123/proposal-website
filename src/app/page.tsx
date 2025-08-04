"use client";
import { useState } from "react";
import { TypeOnView } from "../@components/TypeOnView";
import ReactConfetti from "react-confetti";
import ScrollIndicator from "@/@components/ScrollIndicator";

export default function Home() {

  const [sheClickedYes, setSheClickedYes] = useState(false);
  const [sheClickedNo, setSheClickedNo] = useState(false);

  const handleYesClick = () => {
    setSheClickedYes(true);
    document.getElementById("yesResponse")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNoClick = () => {
    setSheClickedNo(true);
    document.getElementById("yesResponse")?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="text-5xl font-bold">
          <TypeOnView text="I love you Priya!" />
        </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="Do you love me?" />
        </div>
        <div className="flex flex-row gap-2 ">
          <button
            className="mt-4 px-6 py-2 bg-white text-pink-500 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={handleYesClick}
          >
            Yes, I do!
          </button>
          <button
            className="mt-4 px-6 py-2 bg-white text-pink-500 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={handleNoClick}
          >
            No, I don&apos;t!
        </button>
        </div>
      </main>
      <main id="yesResponse" className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        
      {sheClickedYes && (
          <>
          <div className="mt-4 text-3xl font-bold">
            <TypeOnView loop={10} text={["Yay! I love you too!", "I love you so much!!"]} />
          </div>
          <ReactConfetti />
          </>
        )}
        {sheClickedNo && (
          <div className="mt-4 text-3xl font-bold">
            <TypeOnView text={["Oh no! That's sad, but I respect your feelings.", "I made a mistake. Please forgive me."]} />
          </div>
        )}
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text="Thank you for being you!" />
          </div>
        <ScrollIndicator />
      </main>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen snap-start relative">
        <div className="text-5xl font-bold">
          <TypeOnView text={["I wanted to propose to you in Chennai.", "I wanted to travel in Vande Bharat with you!", "I asked you many times but you declined."]} />
        </div>
        <ScrollIndicator />
      </main>
      <footer className="flex text-center text-balance items-center justify-center w-full h-24 border-t">
        <p> Made with ❤️ by Sairam Mangeshkar for Priya Dharshini. </p>
      </footer>
    </div>
  );
}
