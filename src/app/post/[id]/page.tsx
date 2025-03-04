"use client";
import React from "react";
import { useEffect, useState } from "react";
import { GrayButton } from "@/components/common/button";
import { useRouter } from "next/navigation";

interface PostData {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): React.ReactElement {
  const [post, setPost] = useState<PostData>();
  const { id } = React.use(params);
  const router = useRouter();

  const handleGoList = (): void => {
    router.push("/");
  };

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-7/12 m-auto mt-28">
      <p className="text-6xl pt-4 pb-4">{post.title}</p>
      <div className="mt-10 mb-10 pt-4 pb-4">
        <p className="text-2xl">작성자</p>
        <p className="text-4xl mt-8">{post.body}</p>
      </div>
      <GrayButton label="목록으로" onClick={() => handleGoList()} />
    </div>
  );
}
