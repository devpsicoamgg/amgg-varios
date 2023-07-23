//***MÉTODOS -> Función que está asociada con un objeto. 
    // MÉTODOS DE STRING ->
            //charAt(index): Devuelve el carácter en la posición especificada de la cadena.
            let cadena = "Hola Mundo";
            let caracter = cadena.charAt(1); // Devuelve "o"

            //concat(str1, str2, ..., strX): Concatena dos o más cadenas y devuelve una nueva cadena.
            let cadena1 = "Hola";
            let cadena2 = "Mundo";
            let nuevaCadena = cadena1.concat(" ", cadena2); // Devuelve "Hola Mundo"

            //includes(searchString, position): Determina si la cadena contiene una cadena específica.
            let cadena3 = "Hola Mundo";
            let contiene = cadena3.includes("Mundo"); // Devuelve true

            //indexOf(searchValue, fromIndex): Devuelve la posición de la primera aparición de un valor de búsqueda en una cadena.
            let cadena4 = "Hola Mundo";
            let indice0 = cadena4.indexOf("Mundo"); // Devuelve 5

            //lastIndexOf(searchValue, fromIndex): Devuelve la posición de la última aparición de un valor de búsqueda en una cadena.
            let cadena5 = "Hola Mundo";
            let indice = cadena5.lastIndexOf("o"); // Devuelve 9

            //slice(startIndex, endIndex): Devuelve una sección de la cadena, especificada por el índice de inicio y el índice de finalización.
            let cadena6 = "Hola Mundo";
            let nuevaCadena1 = cadena6.slice(0, 4); // Devuelve "Hola"

            //split(separator, limit): Divide una cadena en un array de subcadenas, utilizando un separador especificado.
            let cadena7 = "Hola,Mundo,Cruel";
            let array = cadena7.split(","); // Devuelve ["Hola", "Mundo", "Cruel"]

            //substring(startIndex, endIndex): Devuelve una sección de la cadena, especificada por el índice de inicio y el índice de finalización.
            let cadena8 = "Hola Mundo";
            let nuevaCadena2 = cadena8.substring(0, 4); // Devuelve "Hola"

            //toLowerCase(): Convierte la cadena a minúsculas.
            let cadena9 = "Hola Mundo";
            let nuevaCadena3 = cadena9.toLowerCase(); // Devuelve "hola mundo"

            //toUpperCase(): Convierte la cadena a mayúsculas.
            let cadena10 = "Hola Mundo";
            let nuevaCadena4 = cadena10.toUpperCase(); // Devuelve "HOLA MUNDO"

            //trim(): Elimina los espacios en blanco al principio y al final de la cadena.
            let cadena11 = "    Hola Mundo    ";
            let nuevaCadena5 = cadena10.trim(); // Devuelve "Hola Mundo"

    //*** MÉTODOS DE ARRAY ->
            /* concat(): Combina dos o más arrays y devuelve una nueva matriz.

            1 copyWithin(): Copia una sección de un array y la pega en otra posición dentro del mismo array.

            2 entries(): Devuelve una matriz con pares clave-valor para cada elemento en el array.

            3 every(): Comprueba si todos los elementos del array pasan una prueba especificada.

            4 fill(): Rellena los elementos de un array con un valor estático especificado.

            5 filter(): Crea una nueva matriz con todos los elementos que pasan una prueba especificada.

            6 find(): Devuelve el valor del primer elemento del array que pasa una prueba especificada.

            7 findIndex(): Devuelve el índice del primer elemento del array que pasa una prueba especificada.

            8 forEach(): Ejecuta una función para cada elemento en el array.

            9 from(): Crea una nueva matriz a partir de un objeto similar a un array o una cadena.

            10 includes(): Determina si un valor especificado está en el array.

            11 indexOf(): Devuelve el índice del primer elemento que coincide con un valor especificado.

            12 join(): Une todos los elementos de un array en una cadena.

            13 keys(): Devuelve una matriz con los índices de los elementos del array.

            14 lastIndexOf(): Devuelve el índice del último elemento que coincide con un valor especificado.

            15 map(): Crea una nueva matriz con los resultados de una función aplicada a cada elemento del array.

            16 pop(): Elimina el último elemento del array y lo devuelve.

            17 push(): Añade uno o más elementos al final del array y devuelve la nueva longitud del array.

            18 reduce(): Reduce los elementos de un array a un solo valor (de izquierda a derecha).

            19 reduceRight(): Reduce los elementos de un array a un solo valor (de derecha a izquierda).

            20 reverse(): Invierte el orden de los elementos del array.

            21 shift(): Elimina el primer elemento del array y lo devuelve.

            22 slice(): Devuelve una sección de un array especificada por un índice de inicio y finalización.

            23 some(): Comprueba si al menos un elemento del array pasa una prueba especificada.

            24 sort(): Ordena los elementos de un array.

            25 splice(): Agrega o elimina elementos de un array en una posición especificada.

            26 toString(): Convierte un array en una cadena separada por comas.

            27 unshift(): Añade uno o más elementos al principio del array y devuelve la nueva longitud del array.

            28 values(): Devuelve una matriz con los valores de los elementos del array. */
    
     //*** MÉTODOS DE OBJETOS ->
            //Object.keys(): Este método devuelve un array con las claves de las propiedades de un objeto. Por ejemplo:
            const obj0 = { a: 1, b: 2, c: 3 };
            const keys = Object.keys(obj0);
            console.log(keys); // ["a", "b", "c"] REGRESA SOLO LAS PROPIEDADES

            //Object.values(): Este método devuelve un array con los valores de las propiedades de un objeto. Por ejemplo:
            const obj1 = { a: 1, b: 2, c: 3 };
            const values = Object.values(obj1);
            console.log(values); // [1, 2, 3] REGRESA LOS VALORES ASIGNADOS A LAS PROPIEDADES

            //Object.entries(): Este método devuelve un array de arrays, donde cada subarray contiene una clave y su valor correspondiente en el objeto. Por ejemplo:
            const obj2 = { a: 1, b: 2, c: 3 };
            const entries = Object.entries(obj2);
            console.log(entries); // [["a", 1], ["b", 2], ["c", 3]] REGRESA ARRAY DE ARRAYS CADA ARRAY PROPIEDAD Y VALOR. 

            //Object.assign(): Este método copia todas las propiedades enumerables de uno o más objetos fuente en un objeto destino y devuelve el objeto destino. Por ejemplo:
            const obj3 = { a: 1 };
            const obj4 = { b: 2 };
            const obj5 = { c: 3 };
            const mergedObj = Object.assign({}, obj3, obj4, obj5);
            console.log(mergedObj); // { a: 1, b: 2, c: 3 }

            //Object.freeze(): Este método congela un objeto, lo que significa que no se pueden agregar, eliminar ni modificar propiedades en el objeto. Por ejemplo:
            const obj = { a: 1 };
                Object.freeze(obj);
            obj.a = 2;
            console.log(obj); // { a: 1 } CONGELA UN OBJ PARA QUE NO PUEDAN CAMBIAR PROPIEDAD NI VALORES










