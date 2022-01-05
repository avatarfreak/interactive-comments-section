import React from "react";
import { CommentType } from "../../pages";

type ReturnTuples = [
  CommentType[],
  (parentId: number, childId: number, votes: number, text: string) => void,
  (text: string) => void,
  (parentId: number, childId: number) => void,
  (id: number, username: string, text: string) => void
];

// return tuples
const useLocalStorage = (
  key: string,
  activeUser: string,
  initialValue: CommentType,
): ReturnTuples => {
  const [state, setState] = React.useState<CommentType[]>(() => {
    //prevent window error as undefined during build time
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return;
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  // create new comment
  const createComment = (text: string) => {
    const username = activeUser;
    const newComment: any = {
      id: Number(new Date().getTime()),
      content: text,
      createdAt: new Date().toLocaleDateString(),
      score: 0,
      user: {
        image: {
          png: `./images/avatars/image-${username}.png`,
          webp: `./images/avatars/image-${username}.webp`,
        },
        username,
      },
      replies: [],
    };
    setState([...state, newComment]);
  };

  // Update Comment
  const updateComment = (
    parentId: number,
    childId: number,
    votes: number,
    text: string
  ) => {
    try {
      if (parentId === childId) {
        const newComment = state.map((comment) => {
          return comment.id == parentId
            ? {
              ...comment,
              score: votes,
              createdAt: new Date().toLocaleDateString(),
              content: text,
            }
            : comment;
        });
        setState(newComment);
        return;
      }
    } catch (e) { }
    try {
      const newComments = state.map((comment) => {
        if (comment.id === parentId) {
          const modifiedComment = comment.replies.map((reply) =>
            reply.id === childId
              ? {
                ...reply,
                score: votes,
                createdAt: new Date().toLocaleDateString(),
                content: text,
              }
              : reply
          );
          return { ...comment, replies: modifiedComment };
        }
        return comment;
      });
      setState(newComments);
    } catch (e) {
      return;
    }
  };

  const addComment = (id: number, username: string, text: string) => {
    try {
      const newComments = state.map((comment) => {
        if (comment.id === id) {
          comment.replies.push({
            id: Number(new Date().getTime()),
            content: text,
            createdAt: new Date().toLocaleDateString(),
            score: 0,
            replyingTo: username,
            user: {
              image: {
                png: `./images/avatars/image-${activeUser}.png`,
                webp: `./images/avatars/image-${activeUser}.webp`,
              },
              username: activeUser,
            },
          });
        }
        return comment;
      });
      setState(newComments);
    } catch (e) {
      return;
    }
  };

  const deleteComment = (parentId: number, childId: number) => {
    try {
      if (parentId === childId) {
        const newComments = state.filter((comment) => comment.id !== parentId);
        setState(newComments);
        return;
      }
    } catch (e) {
      return;
    }

    try {
      const newComments = state.map((comment) => {
        if (comment.replies.length > 0) {
          const filteredComment = comment.replies.filter(
            (reply) => reply.id !== childId
          );
          comment["replies"] = filteredComment;
          return { ...comment };
        } else {
          return comment;
        }
      });
      setState(newComments);
    } catch (e) {
      return;
    }
  };
  return [state, updateComment, createComment, deleteComment, addComment];
};

export default useLocalStorage;
