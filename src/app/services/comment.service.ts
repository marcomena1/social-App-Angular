import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostComment } from '../models/comment.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  getCommentsByPost(postId: number): Observable<PostComment[]> {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const post = posts.find((p: Post) => p.id === postId);
    return of(post ? post.comments : []);
  }

  addComment(postId: number, comment: PostComment): void {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const post = posts.find((p: Post) => p.id === postId);
    if (post) {
      post.comments.push(comment);
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }
}
