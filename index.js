/**
 * permite la declaracion del regenrator runtime, lo cual nos permite
 * utilizar las librerias necesarias utilizar async/await.
 */
require("babel-polyfill");
/**
 * Ruta para la api de pokemons.
 * 
 * @type String.
 */
const API_POKEMON = "http://pokeapi.co";

//===========================================//

/**
 * Consultando el api utilizando Async/Await.
 * 
 * @param String    ruta Url que se desea consultar. 
 *
 * return JSON.
 */
async function AsyncAwait()
{
    try
    {
        //se realiza la primera peticion a la api de pokemons
        let response_1 = await fetch(`${API_POKEMON}/api/v1/pokemon/4/`);
        let pokemon_1  = await response_1.json();

        //se realiza la segunda peticion a la api de pokemons
        let response_2 = await fetch(`${API_POKEMON}${pokemon_1.evolutions[0].resource_uri}`);
        let pokemon_2  = await response_2.json();

        //se realiza la tercera peticion a la api de pokemons
        let response_3 = await fetch(`${API_POKEMON}${pokemon_2.evolutions[0].resource_uri}`);
        let pokemon_3  = await response_3.json();

        //se realiza la cuarta peticion a la api de pokemons
        let response_4 = await fetch(`${API_POKEMON}${pokemon_3.evolutions[0].resource_uri}`);
        let pokemon_4  = await response_4.json();

        //Respueta de las peticiones realizadas
        let evolucion = `Pokemon => ${pokemon_1.name}\
                         <br/>&nbsp;Primera evolución => ${pokemon_2.name}\
                         <br/>&nbsp;&nbsp;Segunda evolución => ${pokemon_3.name}\
                         <br/>&nbsp;&nbsp;Ultima evolución => ${pokemon_4.name}`;

        //colocando la respuesta dentro del div.
        document.getElementById("list_pokemon").innerHTML = evolucion;

    }
    catch(Error)
    {
        console.error(Error);
    }

}//async function AsyncAwait

//===========================================//

//Se realiza el llamado a la api de pokemons
AsyncAwait();


