import React from "react";
import { IComment } from "../interfaces";
import CommentForm from "./CommentForm";
import FooterComments from "./comments/FooterComments";
import HeaderComment from "./comments/HeaderComment";
import MainComments from "./comments/MainComments";

const Comment: React.FC<IComment> = ({
  content,
  createdAt,
  user,
  currentUser,
  score,
  replyingTo,
  parentId,
  setParentId,
  parent_commentId,
  updateComment,
  deleteComment,
  addComment,
  isAction,
  setIsAction,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 rounded-lg my-4 p-4 bg-clr-neutral-100 md:grid-cols-card md:p-8">
        <HeaderComment currentUser={currentUser} user={user} duration={createdAt} />
        <MainComments
          parentId={parentId}
          isAction={isAction}
          commentId={parent_commentId}
          setParentId={setParentId}
          setIsAction={setIsAction}
          replyingTo={replyingTo}
          content={content}
          updateComment={(id, text) => updateComment(parent_commentId, id, score, text)}
        />
        <FooterComments
          currentUser={currentUser}
          parentId={parentId}
          user={user}
          commentId={parent_commentId}
          content={content}
          score={score}
          isAction={isAction}
          setIsAction={setIsAction}
          deleteComment={(id) => deleteComment(parent_commentId, id)}
          updateComment={(id, votes) => updateComment(parent_commentId, id, votes, content)}
          setParentId={setParentId}
        />
      </div>
      <div>
        {parent_commentId === parentId && isAction.type == "reply" && (
          <CommentForm
            label="reply"
            content={`@${user}`}
            placeholder="Add a comment..."
            user={currentUser}
            handleSubmit={(text) => addComment(parent_commentId, user, text)}
            setIsAction={setIsAction}
            setParentId={setParentId}
          />
        )}
      </div>
    </>
  );
};

export default Comment;
