class HarpyEagle {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    diet = '',
    sound = '',
    temperment = '',
    type = ''
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.diet = diet;
    this.sound = sound;
    this.temperment = temperment;
    this.type = type;
  }
  eat(diet) {
    console.log(`Reeee Reeee all the ${diet}ies.`)
  }
  speak(sound) {
    alert(`the ${this.constructor.name} says${sound}!`)
  }
}
export let harp = new HarpyEagle('Hellen', 'White-Grey', 'F', 29, 'Carnivor', 'Screech', 'Predatory- Timid', 'Bird')