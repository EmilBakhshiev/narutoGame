export default class Character{
    constructor(data, sideFight){
        this._name = data.name;
        this._health = data.hp;
        this._healthAfterAttack = data.hp;
        this._img = data.img;
        this._attacks = data.attacks;
        this._sideFight = sideFight;
    }
    _getTemplate(){
        const newFighter= document
        .querySelector(this._sideFight)
        .content
        .cloneNode(true);

        return newFighter;
    }
    renderCharacterCard(){
        this._element = this. _getTemplate();
       // this._setEventListeners();
        this._element.querySelector('.card__name').textContent = this._name;
        const cardImage = this._element.querySelector('.card__image');
        cardImage.src = this._img;
        cardImage.alt = this._name;
        this._element.querySelector('#health-character').textContent = `${this._healthAfterAttack} / ${this._health}`;
        this._element.querySelector('#basisHealth').textContent = this._health;
        this._element.querySelector('#attack-damage').textContent = `${this._attacks[0].minDamage} - ${this._attacks[0].maxDamage}` 
        this._element.querySelector('#btn-kick').textContent = this._attacks[0].name;
        return this._element;
    }
}