// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { PostComment } from '../models/comment.model';
import { generateUniqueId } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  updatePost(post: Post) {
    throw new Error('Method not implemented.');
  }
  private postsKey = 'posts';

  getPosts(): Observable<Post[]> {
    const posts = JSON.parse(localStorage.getItem(this.postsKey) || '[]');
    return of(posts);
  }

  addPost(post: Post): void {
    post.id = generateUniqueId();
    const posts = JSON.parse(localStorage.getItem(this.postsKey) || '[]');
    posts.push(post);
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }

  addCommentToPost(postId: number, comment: Comment): void {  // Updated to PostComment
    const posts = JSON.parse(localStorage.getItem(this.postsKey) || '[]');
    const post = posts.find((p: Post) => p.id === postId);
    if (post) {

      post.comments.push(comment);
      localStorage.setItem(this.postsKey, JSON.stringify(posts));
    }


  }
}
