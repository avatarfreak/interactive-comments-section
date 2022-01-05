import React from "react";
import { IReplyComments } from "../interfaces";

const ActionComments: React.FC<IReplyComments> = ({
  commentId,
  setParentId,
  setIsAction,
  isAction,
}) => {
  const handleClick = () => {
    setParentId(commentId);
    setIsAction({ type: "reply", payload: true });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`group flex items-center  justify-items-center gap-2 w-full col-start-4 col-end-5 bg-transparent text-clr-pri-100 md:col-start-5 md:col-end-6 ${
          isAction.payload ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={isAction.payload}
      >
        <svg aria-hidden="true" width="14" height="13" xmlns="http://www.w3.org/2000/svg">
          <path
            className="md:group-hover:fill-clr-pri-300"
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            fill="#5357B6"
          />
        </svg>
        <span className="font-medium md:group-hover:text-clr-pri-300">Reply</span>
      </button>
    </>
  );
};

export default ActionComments;
