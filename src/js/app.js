import Team from './Team';
import Person from './Person';

const bowman = new Person('Лучник', 'Bowman');
const mag = new Person('Маг', 'Mag');
const swordsmane = new Person('Меченосец', 'Swordsman');

const team = new Team();

team.add(bowman);
team.add(mag);
team.add(swordsmane);

console.log(team.getOneEnemy());
console.log(team.getOneEnemy());
console.log(team.getOneEnemy());
console.log(team.getOneEnemy());
