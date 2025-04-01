"use client";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
interface ModalProps {
  title: string;
  contents: string;
}

export default function Modal({
  title,
  contents,
}: ModalProps): React.ReactElement {
  const [emailAddress, setEmailAddress] = useState<string>("");

  const signInWithEmail = async (email: string) => {
    // 이메일을 입력받아 Magic Link 요청
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      throw new Error(error.message);
    } else {
      console.log("Magic Link가 이메일로 발송됨!");
    }
  };

  return (
    <div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center p-4">
            <h3 className="font-bold text-2xl text-center">{title}</h3>
            <p className="py-4 text-center">{contents}</p>
            <input
              type="text"
              placeholder="이메일을 입력해주세요."
              className="input input-bordered w-full max-w-xs"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <button
              className="w-20 h-10 border-[1.5px] rounded-3xl border-slate-200 mt-6"
              onClick={() => signInWithEmail(emailAddress)}
            >
              로그인
            </button>
            <p className="py-4 text-center">아직 회원이 아니신가요?</p>
            <a href="" className="underline">
              회원가입 하러가기
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
