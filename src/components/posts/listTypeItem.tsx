interface ListTypeItemProps {
  title: string;
  contents: string;
  writer: string;
  imgUrl?: string;
}

function ListTypeItem({
  title,
  contents,
  writer,
  imgUrl,
}: ListTypeItemProps): React.ReactElement {
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-5">
      <div className="card-body flex flex-row">
        <img className="w-40 mr-5 rounded-sm" src={imgUrl} alt="게시글" />
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{contents}</p>
          <div className="card-actions justify-end">
            <p>{writer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTypeItem;
