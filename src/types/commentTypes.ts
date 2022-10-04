export type CommentType = {
  id: number;
  userId: number;
  bookId: number;
  comment: string;
  dateOfPost: Date;
};

export type AddCommentResponseType = {
  newComment: CommentType;
};

export type CommentsInitialType = {
  commentArray: CommentType[];
  count: number;
};

export type CommentsQueryType = {
  bookId: number;
};

export type CommentsBodyType = {
  bookId: number;
  comment: string;
};
