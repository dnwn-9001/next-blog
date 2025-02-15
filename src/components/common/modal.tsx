interface ModalProps {
  title: string;
  contents: string;
}

export default function Modal({
  title,
  contents,
}: ModalProps): React.ReactElement {
  return (
    <div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">{title}</h3>
          <p className="py-4 text-center">{contents}</p>
        </div>
      </dialog>
    </div>
  );
}
