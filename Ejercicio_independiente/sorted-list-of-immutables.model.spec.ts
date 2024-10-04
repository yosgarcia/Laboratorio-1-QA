import { SortedListOfImmutables } from './sorted-list-of-immutables.model';
import { Food } from './food.model'; 


// METODO A PROBAR: ADD
/* 
 * Caso de prueba 1: Añadir un elemento a una lista vacía
 * Objetivo: Validar que un elemento se agregue correctamente cuando la 
 *          lista se encuentra vacía
 * Datos de prueba:
 *        new Food("Sopa", 165, 203, "sopa.png")
 * Resultado esperado: El elemento a insertar debe estar estar en la 
 *        primera posición
 * 
 * 
 * Caso de prueba 2: Agregar diferentes elementos a una lista
 * Objetivo: Validar que se agreguen diferentes elementos a una lista correctamente 
 *          y en el orden correcto
 * Datos de prueba: 
 *        new Food("Arepa", 351, 450, "arepa.png")
 *        new Food("Hot Dog", 173, 382, "hotdog.png")
 *        new Food("Cheesecake", 450, 612, "cheesecake.png")
 * Resultado esperado: Los elementos deben estar
 *                    en el orden en que se insertaron

*/

describe('Insertar elementos', () => {
  let lista : SortedListOfImmutables;
  beforeEach(() => {
    lista = new SortedListOfImmutables();
  });


  it('Agregar un elemento a lista vacia debería dar una lista con dicho elemento', () => {
    const sopa = new Food("Sopa", 165, 203, "sopa.png");

    lista.add(sopa);

    expect(lista.get(0).getName()).toBe('Sopa');
  });


  it('Deberia agregar las comidas en el orden correcto', () => {
    lista.add(new Food("Arepa", 351, 450, "arepa.png"));
    lista.add(new Food("Hot Dog", 173, 382, "hotdog.png"));
    lista.add(new Food("Cheesecake", 450, 612, "cheesecake.png"));

    expect(lista.get(2).getName()).toBe('Hot Dog');
  });

});

// METODO A PROBAR: REMOVE
/* 
 * Caso de prueba 3: Eliminar un elemento que está en una lista
 * Objetivo: Validar que un elemento de una lista se elimine correctamente 
 *          sin que se vea afectado el orden
 * Datos de prueba:
 *      - Lista:
 *            new Food("Pancakes", 351, 450, "pancakes.png")
 *            new Food("Pasta", 173, 382, "pasta.png")
 *            new Food("Pizza", 450, 612, "pizza.png")
 *      - Elmento a borrar:
 *            new Food("Pasta", 173, 382, "pasta.png")
 * Resultado esperado: La lista no debe contener el elemento eliminado,
 *            ademas el elemento Pizza debe ser el segundo elemento
 * 
 * 
 * Caso de prueba 2: Eliminar un elemento que no se encuentra en la lista
 * Objetivo: Validar que al intentar eliminar un elemento que no se encuentra en la lista,
 *              la lista permanece igual sin modificaciones
 * Datos de prueba: 
 *      - Lista
 *          new Food("Arepa", 351, 450, "arepa.png")
 *          new Food("Hot Dog", 173, 382, "hotdog.png")
 *          new Food("Cheesecake", 450, 612, "cheesecake.png")
 *      - Elmento a borrar
 *          new Food("Tiramisu", 230, 310, "tiramisu.png")
 * Resultado esperado: El tamaño de la lista se tuvo que mantener igual, es decir, ser igual a 3

*/

describe('Eliminar elementos', () => {
  let lista : SortedListOfImmutables;

  beforeEach(() => {
    lista = new SortedListOfImmutables();
  });


  it('Se elimina un elemento de la lista sin afectar el orden', () => {
    lista.add(new Food("Pancakes", 351, 450, "pancakes.png"));
    lista.add(new Food("Pasta", 173, 382, "pasta.png"));
    lista.add(new Food("Pizza", 450, 612, "pizza.png"));

    lista.remove(new Food("Pasta", 173, 382, "pasta.png"));

    
    expect(lista.get(1).getName()).toBe("Pizza");
  });

  it('No se debe modificar la lista cuando el elemento no existe', () => {
    lista.add(new Food("Arepa", 351, 450, "arepa.png"));
    lista.add(new Food("Hot Dog", 173, 382, "hotdog.png"));
    lista.add(new Food("Cheesecake", 450, 612, "cheesecake.png"));

    lista.remove(new Food("Tiramisu", 230, 310, "tiramisu.png"));

    expect(lista.getSize()).toBe(3);
  });

});