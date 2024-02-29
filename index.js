class superHeroina {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'maga':
          ataque = 'magia';
          break;
        case 'guerreira':
          ataque = 'espada';
          break;
        case 'monga':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque genérico';
          break;
      }
  
      console.log(`A ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo
  heroina = new superHeroina('Maysa', 30, 'ninja');
  heroina.atacar();
  
