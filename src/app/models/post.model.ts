import { PostComment } from "./comment.model";
import { Reaction } from './reaction.model';


export class Post {
    id!: number;
    userId!: string;
    content!: string;
    createdAt!: Date;
    comments!: PostComment[];
    reactions!: { emoji: string; userId: string; }[];
}

