import Character from './Character.js';
import Attacks from './Attacks.js';
import {ninja} from './ninja.js';

const playground = document.querySelector('.playground');
const randomButton = document.querySelector('#randomCharacters')


function randomCharacter(ninja){
   const randomValue = ninja[Math.floor(ninja.length * Math.random())];
   return randomValue;
}


  const character = new Character(randomCharacter(ninja), '#hero', test);
  const characterCard = character.renderCharacterCard();
  let buttonAtack = characterCard.querySelector('.button');
  playground.prepend(characterCard);

  const enemy = new Character(randomCharacter(ninja), '#enemy', test);
  const enemyCard = enemy.renderCharacterCard();
  let hpEnemy = enemyCard.querySelector('#basisHealth');
  playground.append(enemyCard);
  const attack = new Attacks(character, enemy);

function test (){
  return attack.attackHero(enemy);
}

console.log(test());