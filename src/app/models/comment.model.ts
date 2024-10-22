export interface PostComment {
    id: Number | string;
    postId: Number | string;
    userId: string;
    content: string;
    createdAt: Date;
}