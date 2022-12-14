export default class Team {
  constructor() {
    this.enemies = [];
    this.iterator = this[Symbol.iterator]();
  }

  add(item) {
    this.enemies.push(item);
    this.iterator = this[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    const arr = [...this.enemies];
    let index = 0;
    return {
      next: () => {
        if (index < arr.length) {
          return {
            value: arr[index++],
            done: false    
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }

  getOneEnemy() {
    return this.iterator.next().value;
  }
}
