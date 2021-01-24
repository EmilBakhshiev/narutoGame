export default class Attacks{
    constructor(character, enemy){
        this._minCharacterDamage = character._attacks[0].minDamage;
        this._maxCharacterDamage = character._attacks[0].maxDamage;
        this._minCharacterDamage = enemy._attacks[0].minDamage;
        this._maxCharacterDamage = enemy._attacks[0].maxDamage;
        this._healthCharacter = character.health;
        this._healthEnemy = enemy.health;
        this._enemyHelthAfterAttack = enemy.healthAfterAttack;
        this._damage =  this.damage();
        //this._healthAfterDamage = this.healthAfterDamage();
        //this._attacksSelector = attacksSelector;
    }

    damage(){
        return Math.floor(Math.random() * (this._maxCharacterDamage - this._minCharacterDamage) + this._minCharacterDamage);  
    }

    attackHero(){
        return this._enemyHelthAfterAttack  =  this._healthEnemy - this._damage;
    }
}