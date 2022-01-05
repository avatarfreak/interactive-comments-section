import React from "react";
import { IFooterComments } from "../../interfaces";
import ActionBtn from "../ActionBtn";
import ReplyComments from "../ReplyComments";
import Votes from "../Votes";

const FooterComments: React.FC<IFooterComments> = ({
  currentUser,
  user,
  commentId,
  parentId,
  setParentId,
  isAction,
  setIsAction,
  deleteComment,
  updateComment,
  score,
}) => (
  <div className="col-start-1 col-end-5 grid justify-between text-clr-pri-100 font-bold md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3 md:items-start">
    <Votes
      updateComment={(id, votes) => updateComment(id, votes)}
      commentId={commentId}
      score={score}
    />
    {currentUser === user ? (
      <ActionBtn
        parentId={parentId}
        commentId={commentId}
        deleteComment={(id) => deleteComment(id)}
        setParentId={setParentId}
        isAction={isAction}
        setIsAction={setIsAction}
      />
    ) : (
      <ReplyComments
        commentId={commentId}
        setParentId={setParentId}
        isAction={isAction}
        setIsAction={setIsAction}
      />
    )}
  </div>
);

export default FooterComments;
