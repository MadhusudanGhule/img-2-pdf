import React from "react";
import Editor from "ckeditor5-custom-build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: ["bold", "italic", "underline", "sourceEditing"],
};

const TextEditor = (props) => {
  const { data, onChange, ...rest } = props;

  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={data}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default TextEditor;
