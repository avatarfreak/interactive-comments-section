import React from "react";
import { GetStaticProps } from "next";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import dataJSON from "../data.json";
import CommentForm from "../components/CommentForm";
import useLocalStorage from "../components/hooks/useLocalStorage";

export type CommentType = typeof dataJSON.comments[number];

const Home = ({ data }) => {
  const [comments, updateComment, createComment, deleteComment, addComment] =
    useLocalStorage("comment", data.currentUser.username, data.comments);
  const [parentId, setParentId] = React.useState<number>(0);
  const [isAction, setIsAction] = React.useState({
    type: "edit",
    payload: false,
  });

  return (
    <main>
      {comments.map((comment: CommentType) => (
        <div key={comment.id}>
          <Comment
            parentId={parentId}
            parent_commentId={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            user={comment.user.username}
            currentUser={data.currentUser.username}
            score={comment.score}
            replyingTo=""
            setParentId={setParentId}
            updateComment={updateComment}
            addComment={addComment}
            deleteComment={deleteComment}
            isAction={isAction}
            setIsAction={setIsAction}
          />

          <CommentList
            parent_commentId={comment.id}
            parentId={parentId}
            currentUser={data.currentUser.username}
            replies={comment.replies}
            setParentId={setParentId}
            updateComment={updateComment}
            addComment={addComment}
            deleteComment={deleteComment}
            isAction={isAction}
            setIsAction={setIsAction}
          />
        </div>
      ))}
      <div>
        <CommentForm
          content=""
          user={data.currentUser.username}
          label="send"
          placeholder="Add a comment..."
          handleSubmit={createComment}
          setIsAction={setIsAction}
          setParentId={setParentId}
        />
      </div>
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: dataJSON,
    },
  };
};
