import { useEffect, useState } from "react";

export default function Star() {
  const windowWidth: number = screen.width;
  const windowHeight: number = screen.height;

  const [x, setX] = useState<number>(getRandomVal(windowWidth));
  const [y, setY] = useState<number>(getRandomVal(windowHeight));

  const style: string[] = ["w-1 h-1", "w-2 h-2", "w-3 h-3"];
  const opacity: string[] = [
    "opacity-0.5",
    "opacity-0.7",
    "opacity-1",
    "opacity-1",
    "opacity-1",
  ];
  const animation: string[] = [
    "animate-twinkle1",
    "animate-twinkle1",
    "animate-twinkle2",
    "animate-twinkle2",
    "animate-twinkle2",
    "animate-twinkle3",
    "animate-twinkle4",
  ];

  const _s = getRandomVal(style.length);
  const _o = getRandomVal(opacity.length);
  const _a = getRandomVal(animation.length);

  function getRandomVal(max: number): number {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setX(getRandomVal(windowWidth));
    setY(getRandomVal(windowHeight));
  }, [windowWidth, windowHeight]);

  return (
    <div
      // className="w-3 h-3 rounded-full bg-white absolute top-24 left-24 overflow-hidden opacity-0.7  animate-twinkle1"
      className={`absolute rounded-full bg-white overflow-hidden ${style[_s]} ${opacity[_o]} ${animation[_a]}`}
      style={{ top: `${y}px`, left: `${x}px` }}
    ></div>
  );
}
