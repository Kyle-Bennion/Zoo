class Mastiff {
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
    console.log(`Crunch Crunch all the ${diet}ies.`)
  }
  speak(sound) {
    alert(`the ${this.constructor.name} says${sound}!`)
  }
}
export let jax = new Mastiff('Murph', 'Blonde-Brindle', 'M', 218, 'Omnivore', 'Woof', 'Gentle-Kind', 'Mammal')