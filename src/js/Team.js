export default class Team {
  constructor() {
    this.enemies = [];
  }

  add(item) {
    this.enemies.push(item);
  }

  iterator() {
    let index = 0;
    let lastIndex;
    const enemies = [...this.enemies];
    return {
      next() {
        if (index > enemies.length - 1) {
          return {
            value: undefined,
            done: true,
          };
        }
        lastIndex = index;
        index += 1;
        return {
          value: enemies[lastIndex],
          done: false,
        };
      },
    };
  }

  getOneEnemy(iter) {
    console.log(iter.next().value);
  }
}
