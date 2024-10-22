import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  @Input() post!: Post;

  emojis: string[] = ['😀', '❤️', '👍', '😢', '😡']; // List of emojis

  react(emoji: string): void {
    // Logic to handle emoji reactions, e.g., saving it to the post object
    console.log(`Reacted with: ${emoji}`);
    // You can implement logic here to store the reaction
  }
}
