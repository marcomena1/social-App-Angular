import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  posts: Post[] = [];
  isCollapsed = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  addPost(content: string): void {
    const newPost: Post = {
      id: this.generateUniqueId(),
      userId: uuidv4(),
      content: content,
      createdAt: new Date(),
      comments: [],
      reactions: []

    };
    this.postService.addPost(newPost);
    this.loadPosts();
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  reactToPost(postId: number, emoji: string): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      const newReaction = {
        emoji: emoji,
        userId: 'current-user-id' // Replace with actual user ID management
      };

      post.reactions.push(newReaction);
      this.postService.updatePost(post); // Ensure to update the post in the service
    }
  }
}
