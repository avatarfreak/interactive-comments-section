import React from "react";
import HeaderComment from "./comments/HeaderComment";
import MainComments from "./comments/MainComments";
import FooterComments from "./comments/FooterComments";
import CommentForm from "./CommentForm";
import { ICommentList } from "../interfaces";

const CommentList: React.FC<ICommentList> = ({
  currentUser,
  parentId,
  setParentId,
  replies,
  updateComment,
  deleteComment,
  addComment,
  parent_commentId,
  isAction,
  setIsAction,
}) => {
  return (
    <div className="w-full my-4 border-l-4 border-clr-neutral-300 pl-4  md:w-[96%] md:ml-[4%] md:pl-8">
      {replies.map((comment) => {
        return (
          <div key={comment.id}>
            <div className="grid grid-cols-3 rounded-lg my-4 p-4 bg-clr-neutral-100 md:grid-cols-card">
              <HeaderComment
                user={comment.user.username}
                duration={comment.createdAt}
                currentUser={currentUser}
              />
              <MainComments
                parentId={parentId}
                isAction={isAction}
                setIsAction={setIsAction}
                commentId={comment.id}
                setParentId={setParentId}
                replyingTo={comment.replyingTo}
                content={comment.content}
                updateComment={(id, text) =>
                  updateComment(parent_commentId, id, comment.score, text)
                }
              />
              <FooterComments
                currentUser={currentUser}
                user={comment.user.username}
                commentId={comment.id}
                content={comment.content}
                score={comment.score}
                parentId={parentId}
                setParentId={setParentId}
                isAction={isAction}
                setIsAction={setIsAction}
                deleteComment={(id) => deleteComment(parent_commentId, id)}
                updateComment={(id, votes) =>
                  updateComment(parent_commentId, id, votes, comment.content)
                }
              />
            </div>
            <div>
              {comment.id === parentId
                ? isAction.type === "reply" && (
                    <CommentForm
                      label="reply"
                      content={`@${comment.user.username}`}
                      placeholder="Add a comment..."
                      user={currentUser}
                      handleSubmit={(text) =>
                        addComment(parent_commentId, comment.user.username, text)
                      }
                      setParentId={setParentId}
                      setIsAction={setIsAction}
                    />
                  )
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
