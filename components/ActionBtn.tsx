import React from "react";
import { IAction } from "../interfaces";
import DeleteModal from "./modal/DeleteModal";

const ActionBtn: React.FC<IAction> = ({
  commentId,
  deleteComment,
  parentId,
  isAction,
  setIsAction,
  setParentId,
}) => {
  const [isDelete, setIsDelete] = React.useState<boolean>(false);
  const [isActive] = React.useState<boolean>(false);
  const handleDelete = () => {
    setIsDelete(!isDelete);
  };

  const handleEdit = () => {
    setParentId(commentId);
    setIsAction({ type: "edit", payload: true });
  };

  const isDisabled = parentId === commentId;

  return (
    <>
      <DeleteModal
        deleteComment={deleteComment}
        commentId={commentId}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />

      {!isActive && !isDisabled && (
        <div className="flex  items-center justify-between col-start-4 col-end-5">
          <button
            onClick={handleDelete}
            className={`flex items-center  font-medium ml-1  md:px-3 md:hover:opacity-50 
            focus:outline-none focus:ring focus:ring-offset-2 focus:ring-clr-pri-200 focus:ring-opacity-50 focus:rounded-lg
            ${isAction.payload ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isAction.payload}
          >
            <svg
              aria-hidden="true"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                fill="#ED6368"
              />
            </svg>
            <span className="px-2">Delete</span>
          </button>
          <button
            onClick={handleEdit}
            className={`flex items-center  font-medium ml-1 md:px-3 md:hover:opacity-50 
            focus:outline-none focus:ring focus:ring-offset-2 focus:ring-clr-pri-100 focus:ring-opacity-50 focus:rounded-lg
            ${isAction.payload ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isAction.payload}
          >
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                fill="#5357B6"
              />
            </svg>
            <span className="px-2">Edit</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ActionBtn;
