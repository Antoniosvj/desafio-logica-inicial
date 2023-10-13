class heroi{
    constructor(nome, tipo, tipoAtaque){
        this.nome = nome;
        this.tipo = tipo;
        this.tipoAtaque = tipoAtaque;
    }
    atacar(){
        console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando ${this.tipoAtaque}`);
    }
}
const heroi1= new heroi ("Mozart","Guerreiro", "espada");
heroi1.atacar();

const heroi2= new heroi ("Josep","Mago", "magia");
heroi2.atacar();

const heroi3= new heroi ("Kashima","Monge", "artes marciais");
heroi3.atacar();

const heroi4= new heroi ("Kavasaki","Ninja", "shuriken");
heroi4.atacar();