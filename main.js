import Character from './Character.js';
import Attacks from './Attacks.js';
import {ninja} from './ninja.js';

const playground = document.querySelector('.playground');
const randomButton = document.querySelector('#randomCharacters')


function randomCharacter(ninja){
   const randomValue = ninja[Math.floor(ninja.length * Math.random())];
   return randomValue;
}

  const character = new Character(randomCharacter(ninja), '#hero');
  const characterCard = character.renderCharacterCard();
  let buttonAtack = character.renderCharacterCard().querySelector('.button');
  playground.prepend(characterCard);

  const enemy = new Character(randomCharacter(ninja), '#enemy');
  const enemyCard = enemy.renderCharacterCard();
  let hpEnemy = enemy.renderCharacterCard().querySelector('#basisHealth');
  playground.append(enemyCard);

  const attack = new Attacks(character, enemy);
  buttonAtack.addEventListener('click', ()=>{
    hpEnemy.textContent = character.damageforEnemy(attack.attackHero(enemy));
  })



