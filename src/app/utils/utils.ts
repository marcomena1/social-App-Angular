// src/app/utils.ts
let usedIds: number[] = [];

export function generateUniqueId(): number {
    let id;
    do {
        id = Math.floor(Math.random() * 100) + 1;
    } while (usedIds.includes(id));
    usedIds.push(id);
    return id;
}
