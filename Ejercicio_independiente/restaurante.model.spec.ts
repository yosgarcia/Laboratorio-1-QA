import { Restaurant } from './restaurante.model';
import { Food } from './food.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model'; 


// METODO A PROBAR: addShipmentToInventory
/* 
 * Caso de prueba 5: Agregar a Inventario sin dinero suficiente
 * Objetivo: Validar que NO se puedan agregar elementos al inventario ya que 
 *        no tiene suficiente dinero
 * Datos de prueba: 
 *    1. Efectivo: 50
 *       CostoCompra: 70
 *    2. Efectivo: 700
 *       CostoCompra: 1000
 *    3. Efectivo: 300
 *       CostoCompra: 450
 * Resultado esperado: Se debe rechazar el envio por lo que no se agrega nada a inventario
 * 
*/

describe('Pruebas parametrizadas para Restaurant', () => {
  let restaurant: Restaurant;

  it('Casos de prueba para validar que rechace un envío', () => {
    [
      { efectivo: 50, costoCompra: 70},
      { efectivo: 700, costoCompra: 1000},
      { efectivo: 300, costoCompra: 450}
    ].forEach(({efectivo, costoCompra}) => {
      restaurant = new Restaurant("Restaurante", efectivo);
      const envio = new SortedListOfImmutables();
      envio.add(new Food("Hamburguesa", costoCompra, costoCompra * 3, "hamburguesa.png")); 

      const resultado = restaurant.addShipmentToInventory(envio);
      
      expect(resultado).toBe(false);
    });
  });


});



