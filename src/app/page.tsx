"use client";
import Star from "@/components/styles/star";

export default function Page() {
  const starCount = 80; // 원하는 별의 개수
  return (
    <div className="bg-black h-full relative">
      {Array.from({ length: starCount }).map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
}
