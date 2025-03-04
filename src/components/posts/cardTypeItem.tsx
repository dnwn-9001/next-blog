interface CardTypeItemProps {
  title: string;
  contents: string;
  writer: string;
  imgUrl?: string;
  onClick: () => void;
}

function CardTypeItem({
  title,
  contents,
  writer,
  imgUrl,
  onClick,
}: CardTypeItemProps): React.ReactElement {
  return (
    <div
      className="w-[calc(33%-1rem)] card bg-base-100 shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <figure>
        <img src={imgUrl} alt="게시글" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 30)}</h2>
        <p>{contents.slice(0, 60)}</p>

        <div className="card-actions justify-end mt-3">
          <p>{writer}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTypeItem;
