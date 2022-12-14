/*
clase 1: piezas clave de angular
  1. componentes
  2. pipes
  3. directivas
  4. servicios

clase 2: Componentes
  * Cada componente trae cuatro archivos en una carpeta con:
    1. name.component.html
    2. name.component.scss
    3. name.component.specs.ts
    4. name.component.ts

  * Generamos cada nuevo componente de angular desde el cli usando el comando
    1. ng g c nameOfComponent

clase 3: @Input
  permite pasar informacion desde el padre a los hijos

clase 4: @Output
  permite pasar informacion desde el hijo al padre

clase 12: servicios
  1. ng g s nameOfService

clase 13: inyeccion de dependencias:
  despues de crear un servicio este en el archivo .ts trae
  un decorador @Inyectable y permite que se pueda inyectar en otros
  componentes y trae un objeto con un atributo providedIn el cual
  define el scope o alcance de el servicio.
  para usarlo se debe importar desde el archivo al componente
  y luego pasarlo a traves de los parametros de el constructor.

  de esta manera angular crea una instancia de este servicio y la pone a disposicion de
  el componente.
  siempre puedo tener varios servicios y varios componentes
  y podria inyectar un servicio dentro de otro.

  pero se dbe tener cuidado de no inyectar un servicio en otro y este en el anterios
  porque tendriamos una doble inyeccion y tendriamos un error de referencia circular
  angular usa el patron singleton para manejar las instancias
  de estos servicios.

clase 14: obteniendos datos de una API
  debemos usar el modulo Angular Http @angular/common/http
  añadimos al archivo app.module.ts:
    import {HttpClientModule} from '@angular/common/http'

clase 15: conociendo los pipes
  son tuberias como lo indica la traduccion  donde tenemos una entrada
  luego una transformacion y luego una salida, al ser tubos tienen como
  caracteristica que se pueden unir asi que la salida de uno se convierte en la entrada
  de otro.
  ejemplo de default pipes: usando antes | siempre en el html o render
    1. currency:'COP'

clase 16: crear nuestro propio pipe
  iniciamos con el comando: 
  ng g p nameOfPipe

clase 17: Directivas
  se usan para hacer modificacion del dom de forma directa y tambien modificar atributos
  iniciamos creando una con el comando: 
  ng g d nameOfDirective

class 18: reactividad basica and state management
  trata de solucionar las comunicaciones de estados de la aplicacion entre componentes padres a hijos y nietos 
  o mas con  lo cual es bueno tener un estado global de la aplicacion como lo hace redux o
  react-context, creando un store para compartir y asi los componentes se pueden
  suscribir a este estado compartido para recibir actualizaciones de cuando cambie el estado

clase 19: linter
  iniciamos con el comando: 
  ng add @angular-eslint/schematics
  luego con el comando: ng lint analizaremos el codigo y nos dira que errores podria tener
  o malas practicas.
  añadir eslint extension a vs code
*/
