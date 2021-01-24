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
  const attackButton = characterCard.querySelector('.button');
  playground.prepend(characterCard);

  const enemy = new Character(randomCharacter(ninja), '#enemy');
  const enemyCard = enemy.renderCharacterCard();
  let hpEnemy = enemyCard.querySelector('.hp__text');
  let enemyProgressBar = enemyCard.querySelector('.health').style.width;
  console.log(enemyProgressBar);
  playground.append(enemyCard);


function makeDamage (sideFight, attackDamage, basisHealth){
  sideFight.healthAfterAttack = sideFight.health - attackDamage;
  hpEnemy.textContent = `${sideFight.healthAfterAttack} / ${basisHealth}`;
  const progressBar = Math.floor(100 - (sideFight.healthAfterAttack * 100 / basisHealth));

  enemyProgressBar = `${100 - progressBar}%`;
  console.log(progressBar);
  return enemyProgressBar;
}
attackButton.addEventListener('click', ()=>{
  makeDamage(enemy, character.getRandomDamage(), enemy.health);
  
  /*setTimeout(()=>{
  makeDamage(character, enemy.getRandomDamage())}, 1000)*/
  })

