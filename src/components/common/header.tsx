import Modal from "./modal";
import { TransparentButton } from "./button";
import { useRouter } from "next/navigation";

export default function Header(): React.ReactElement {
  const router = useRouter();
  const handleWriteClick = (): void => {
    router.push("/write");
  };
  const handleLogoClick = (): void => {
    router.push("/");
  };

  return (
    <div>
      <div className="h-16 bg-black border-b-[1.5px] border-b-slate-300 sticky top-0 z-10 text-slate-200 flex items-center place-content-between px-6 text-sm">
        <div className="w-12 cursor-pointer" onClick={() => handleLogoClick()}>
          LOGO
        </div>
        <div>
          <TransparentButton
            label="글 작성"
            onClick={() => handleWriteClick()}
          />
          <TransparentButton
            label="로그인"
            onClick={() => document.getElementById("my_modal").showModal()}
          />
        </div>
      </div>
      <Modal title="로그인" contents="이메일로 로그인" />
    </div>
  );
}
