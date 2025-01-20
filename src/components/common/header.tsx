export default function Header() {
  return (
    <div className="h-16 bg-black border-b-[1.5px] border-b-slate-300 sticky top-0 z-10 text-slate-200 flex items-center place-content-between px-6 text-sm">
      <div className="w-12">LOGO</div>
      <button className="w-20 h-10 border-[1.5px] rounded-3xl border-slate-200">
        로그인
      </button>
    </div>
  );
}
