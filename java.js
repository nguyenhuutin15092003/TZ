class Raiden {
    constructor(atk, stb) {
        this.atk=atk
        this.stb=stb
    }
  
    dmg() {
        return this.atk*this.stb
    }
  }
  
  const r1 = new Raiden(1800, 1.5);
  const r2 = new Raiden(1700, 1.8);

  console.log(r1.dmg()-r2.dmg())
  