"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = () => {
  const TitleEditor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3] }),
      Bold,
      Italic,
      Placeholder.configure({ placeholder: "제목을 입력해주세요." }),
    ],
    autofocus: false,
    editable: true,
  });

  const contentsEditor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Placeholder.configure({ placeholder: "당신의 이야기를 입력해주세요." }),
    ],
    autofocus: false,
    editable: true,
  });

  if (!TitleEditor || !contentsEditor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto p-4 shadow-md rounded-lg">
      <div className="space-y-4 w-4/6">
        {/* 제목 입력란 */}
        <div className="mt-16">
          <div>
            <EditorContent
              editor={TitleEditor}
              className="p-2 m-7 text-5xl mb-10 text-pink-50"
              style={{ minHeight: "30px" }}
            />
          </div>
          <hr className="h-5 bg-gray-300 border-0 w-28 ml-7" />
        </div>

        {/* 본문 입력란 */}
        <div>
          <EditorContent
            editor={contentsEditor}
            className="m-7 text-2xl mt-12 text-pink-50"
            style={{ minHeight: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
