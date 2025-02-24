"use client";
import React, { useEffect, useState } from "react";
import RadioLabel from "../common/radioLabel";
import CardTypeItem from "./cardTypeItem";
import ListTypeItem from "./listTypeItem";

interface PostData {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export default function PostItem() {
  const [itemType, setItemType] = useState("card");
  const [postData, setPostData] = useState<PostData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPostData(json.slice(0, 10)));
  }, []);

  return (
    <div className="w-10/12 m-auto">
      <div className="m-auto mt-28 mb-6 flex justify-end">
        <RadioLabel
          label="카드형"
          name="radio-1"
          defaultChecked={true}
          onClick={() => setItemType("card")}
        />
        <RadioLabel
          label="리스트형"
          name="radio-1"
          onClick={() => setItemType("list")}
        />
      </div>
      {itemType === "card" ? (
        <div className="h-full flex flex-wrap gap-5">
          {postData.map((item) => (
            <CardTypeItem
              key={item.id}
              title={item.title}
              contents={item.body}
              writer={item.userId}
              imgUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            />
          ))}
        </div>
      ) : (
        <div>
          {postData.map((item) => (
            <ListTypeItem
              key={item.id}
              title={item.title}
              contents={item.body}
              writer={item.userId}
              imgUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            />
          ))}
        </div>
      )}
    </div>
  );
}
