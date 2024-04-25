'use client';
import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { fetchAdvice, selectAdvice, selectAdviceId } from '@/lib/features/advices/adviceSlice';
import Image from "next/image";
import DividerDesktop from "../public/images/pattern-divider-desktop.svg"
import DividerMobile from "../public/images/pattern-divider-mobile.svg"
import Dice from "../public/images/icon-dice.svg"

export default function Home() {
  const advice = useAppSelector(selectAdvice);
  const adviceId = useAppSelector(selectAdviceId);
  const dispatch = useAppDispatch();
  const store = useAppStore();
  const storeRef = useRef(store);
  storeRef.current = store;


  useEffect(() => {
    store.dispatch(fetchAdvice());
  }, [store]);


  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl">
      <div className="relative flex flex-col items-center justify-center gap-5 py-5 px-7">
        <h1 className="text-green-400 uppercase text-sm">Advice <span className="text-green-400 text-sm">#{adviceId}</span></h1>
        <p className="text-white text-xl">
          {advice}
        </p>
        <Image src={DividerDesktop} alt="pattern-divider-desktop.svg" className="hidden md:block mb-10" />
        <Image src={DividerMobile} alt="pattern-divider-mobile.svg" className="md:hidden mb-10" />
        <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 rounded-full bg-green-400 p-5">
          <Image src={Dice} alt="icon-dice.svg" />
        </div>
      </div>
    </main>
  );
}
