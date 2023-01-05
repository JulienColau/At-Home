function log(toShow) {
    console.log(toShow)
}


class Player {


    #_vie = 500;
    #_mana = 100;



    recevoir_degat(nb_degats) {
        this.#_vie -= 100;

    }

    get_vie() {
        return this.#_vie
    }
    get_mana() {
        return this.#_mana
    }
}

const player = new Player();

player.recevoir_degat(100);
log('vie: ' + player.get_vie());
log('mana: ' + player.get_mana());