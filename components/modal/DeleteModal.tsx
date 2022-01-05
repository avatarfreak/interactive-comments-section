import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IDeleteModal {
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: number;
  deleteComment: (id: number) => void;
}

const DeleteModal: React.FC<IDeleteModal> = ({
  isDelete,
  setIsDelete,
  commentId,
  deleteComment,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div
          className={`fixed inset-0 bg-black/70 transition duration-700 transform ${
            !isDelete ? "-translate-y-full opacity-10" : "translate-y-0"
          }`}
        >
          <div className=" fixed inset-0 z-30 mx-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-100 max-w-[25rem] w-full space-y-4  p-9 rounded-lg">
              <h2 className="font-bold text-lg text-clr-neutral-500 tracking-wider">
                Delete Comment
              </h2>
              <p>
                Are you sure you want to delete this comment? This will remove the comment and can't
                be undone
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  className="px-5 py-3 uppercase font-bold text-clr-neutral-100 bg-clr-neutral-200 rounded-lg hover:opacity-80"
                  onClick={() => setIsDelete(false)}
                >
                  No, Cancel
                </button>
                <button
                  className="px-5 py-3 uppercase font-bold text-clr-neutral-100 bg-clr-pri-200 rounded-lg hover:opacity-80"
                  onClick={() => deleteComment(commentId)}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default DeleteModal;
