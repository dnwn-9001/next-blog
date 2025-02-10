"use client";
import React, { useState } from "react";
import RadioLabel from "../common/radioLabel";

export default function PostItem() {
  const [itemType, setItemType] = useState("card");

  return (
    <div className="w-10/12 m-auto">
      <div className="m-auto mt-32 mb-6 flex justify-center">
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
        <div className="h-full flex flex-wrap justify-center">
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
          <div className="w-1/6 h-80 bg-slate-50 rounded-xl mx-3.5"></div>
        </div>
      ) : (
        <h1>리스트형으로 들어와야함</h1>
      )}
    </div>
  );
}
