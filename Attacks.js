export default class Attacks{
    constructor(data, attacksSelector){
        this._attacks = data.attacks;
        this._attacksSelector = attacksSelector;
    }
    _getTemplate(){
        const buttonAttack = document
        .querySelector(this._attacksSelector)
        .content
        .cloneNode(true);

        return buttonAttack;
    }
    renderAttacks(){
        this._element = this. _getTemplate();
        //this._setEventListeners();
        this._element.querySelector('.button').textContent = this._attacks[0].name;
        
        return this._element;
    }

}