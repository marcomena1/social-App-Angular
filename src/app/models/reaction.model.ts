export interface Reaction {
    type: 'like' | 'love' | 'wow' | 'sad' | 'angry';
    count: number; // Count of this reaction type
}