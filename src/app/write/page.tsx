"use client";
import Tiptap from "@/components/Tiptap";
import { BlueButton, GrayButton } from "@/components/common/button";
import { useRouter } from "next/navigation";

export default function Write(): React.ReactElement {
  const router = useRouter();
  const handleCancel = (): void => {
    router.push("/");
  };
  return (
    <div>
      <Tiptap />
      <div className="m-7 p-4">
        <GrayButton label="취소" onClick={() => handleCancel()} />
        <BlueButton label="글 작성" onClick={() => console.log("작성 버튼")} />
      </div>
    </div>
  );
}
