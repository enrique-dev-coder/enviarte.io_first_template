import React from "react";
import ClientSideValidation from "./ClientSideValidation";
import Editor from "./Editor";

const page = () => {
  return (
    <div>
      <ClientSideValidation>
        <Editor />
      </ClientSideValidation>
    </div>
  );
};

export default page;
