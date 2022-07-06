export class HistorySearch {
  static history: string[];

  static writePointer = 0;

  static size: number;

  static add(fraze: string): void {
    if (this.history.indexOf(fraze) !== -1) return;
    this.history[this.writePointer] = fraze;
    this.writePointer = (this.writePointer + 1) % this.size;
  }

  static delete(fraze: string): void {
    // todo неправильно ставит pointer
    this.history = this.history.filter((item) => item !== fraze);
    this.writePointer = this.writePointer - 1;
  }

  static createHistory(size: number): string[] {
    if (this.size > 0) return this.getHistory();
    this.history = [];
    this.size = size;
    return this.history;
  }

  static getHistory() {
    if (!this.history) throw new Error('create a instance with createHistory method!');

    const left = this.history.slice(0, this.writePointer).reverse();
    const right = this.history.slice(this.writePointer).reverse();

    return [...left, ...right];
  }
}
