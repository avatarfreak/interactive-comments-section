import React from "react";
import { IMainComments } from "../../interfaces";

const MainComments: React.FC<IMainComments> = ({
  parentId,
  commentId,
  isAction,
  replyingTo,
  setIsAction,
  content,
  setParentId,
  updateComment,
}) => {
  const [text, setText] = React.useState<string>(content);
  const isActive = commentId === parentId;
  const isDisabled = text.length === content.length || text.length === 0;

  const handleSubmit = () => {
    if (text.length > 0) {
      updateComment(commentId, text);
      setIsAction({ type: "edit", payload: false });
      setParentId(0);
    }
  };

  return (
    <div className="relative col-start-1 col-end-5 row-start-2 row-end-3 py-4 md:py-12 md:col-start-2 md:col-end-5 md:px-2">
      {isActive && isAction.type == "edit" ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="editForm" className="sr-only">
            Edit Comment
          </label>
          <textarea
            value={text}
            rows={5}
            cols={50}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none rounded-lg p-3 border  outline-none focus:ring-1 ring-clr-pri-100 md:cursor-pointer md:col-start-2 md:col-end-5 md:hover:border-clr-pri-300"
          />
          <button
            disabled={isDisabled}
            className="absolute right-0 -bottom-9  p-2 bg-clr-pri-100 rounded-lg text-clr-neutral-100 font-bold uppercase drop-shadow-md disabled:opacity-50 disabled:cursor-not-allowed md:-bottom-1 md:py-3 md:hover:bg-clr-pri-300"
          >
            update
          </button>
        </form>
      ) : (
        <p className="max-w-[60ch]">
          <span className="font-bold text-clr-pri-100">
            {replyingTo.length > 0 && `@${replyingTo}\t`}
          </span>
          {content}
        </p>
      )}
    </div>
  );
};

export default MainComments;
