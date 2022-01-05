// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:

/*-----------------Header Section-----------------------*/
export interface IHeaderComment {
  user: string;
  currentUser: string;
  duration: string;
}

/*-----------------Main Section-----------------------*/
export interface IMainComments {
  parentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  commentId: number;
  content: string;
  isAction: { type: string; payload: boolean };
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  replyingTo: string;
  updateComment: (commentId: number, text: string) => void;
}

/*-----------------Footer Section-----------------------*/
export interface IFooterComments {
  currentUser: string;
  user: string;
  commentId: number;
  content: string;
  parentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  isAction: { type: string; payload: boolean };
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  score: number;
  deleteComment: (childId: number) => void;
  updateComment: (childId: number, votes: number) => void;
}

/*-----------------Action Button-----------------------*/
export interface IAction {
  commentId: number;
  parentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  isAction: { type: string; payload: boolean };
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  deleteComment: (id: number) => void;
}
export interface IReplyComments {
  commentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  isAction: { type: string; payload: boolean };
}

/*-----------------Comment Section-----------------------*/
export interface IComment {
  content: string;
  createdAt: string;
  user: string;
  currentUser: string;
  score: number;
  replyingTo: string;
  parentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  isAction: { type: string; payload: boolean };
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  updateComment: (
    parentId: number,
    childId: number,
    votes: number,
    text: string
  ) => void;
  addComment: (id: number, username: string, content: string) => void;
  deleteComment: (parentId: number, childId: number) => void;
  parent_commentId: number;
}

/*-----------------CommentList Section-----------------------*/
export interface IReply {
  id: number;
  content: string;
  createdAt: string;
  user: { username: string };
  replyingTo: string;
  score: number;
}

export interface ICommentList {
  currentUser: string;
  parentId: number;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  isAction: { type: string; payload: boolean };
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  replies: IReply[];
  updateComment: (
    parentId: number,
    childId: number,
    votes: number,
    content: string
  ) => void;
  addComment: (id: number, username: string, content: string) => void;
  deleteComment: (parentId: number, childId: number) => void;
  parent_commentId: number;
}
