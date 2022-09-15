const username: string = '1'; //tipado de variables

//tipado de funciones
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

//typescript usa mucho orientado a objetos
class Persona {
  private age: number; //se puede usar private para variables privadas
  name: string;
  lastName: string;

  constructor(name: string, lastName: string, age: number) {
    this.age = age;
    this.name = name;
    this.lastName = lastName;
  }
}

//metodo abreviado para la clase anterior omitiendo declaracion
//e inicializacion
class Persona2 {
  constructor(
    public name: string,
    public lastName: string,
    public age: number
  ) {}
}

const nico = new Persona('andres', 'calvo', 28);
