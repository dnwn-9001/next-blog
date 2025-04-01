"use client";
import Tiptap from "@/components/Tiptap";
import { BlueButton, GrayButton } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

export default function Write(): React.ReactElement {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleCancel = (): void => {
    router.push("/");
  };
  const handleSubmit = () => {
    // TODO : 로그인 여부 확인 구현하기
    if (title && content) {
      const { data, error } = supabase
        .from("posts")
        .insert([{ title: title, content: content, id: "1" }]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
  };
  return (
    <div>
      <Tiptap setTitle={setTitle} setContent={setContent} />
      <div className="m-7 p-4">
        <GrayButton label="취소" onClick={() => handleCancel()} />
        <BlueButton label="글 작성" onClick={() => handleSubmit()} />
      </div>
    </div>
  );
}
