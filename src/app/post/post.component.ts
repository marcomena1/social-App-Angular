
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { PostComment } from '../models/comment.model';
import { generateUniqueId } from '../utils/utils'
import { CommentService } from '../services/comment.service';
import { Reaction } from '../models/reaction.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor(private postService: PostService,
    private commentService: CommentService) { }


  ngOnInit(): void { }

  addComment(content: string): void {
    const newComment: PostComment = {
      id: generateUniqueId(),
      postId: this.post.id,
      userId: 'current-user-id',
      content: content,
      createdAt: new Date()
    };
    this.commentService.addComment(this.post.id, newComment);
    this.post.comments.push(newComment);
  }
  react(emoji: string): void {
    const newReaction = {
      emoji: emoji,
      userId: 'current-user-id'  // Adjust this according to your user management
    };

    // Push the new reaction to the post's reactions array
    this.post.reactions.push(newReaction);
    console.log(`Post reacted with: ${emoji}`);
  }
}

