// VARIABLES & TIPOS DE DATOS: 
    // TIPOS DE DATOS: HAY 6 TIPOS DE DATOS PRIMITIVOS (BASICOS) 
        // 01- Strings: Cadenas
        var name = 'Alberto';
        // 02- Numeros: Todos los numeros. 
            let num = 2654;
        // 03- Boleanos: Falso - Verdadero.
            let comprension = true; 
        // 04.- Undefine: No definido. Declarado pero no definido. 
            let noDefinido = undefined;
        // 05.- Symbol: Simbolos. se utilizan xra  añadir claves de propiedades únicas a un objeto no iguales. 
                                 // Encapsula, cripta
            let sym1 = Symbol()
            let sym2 = Symbol('foo')
            let sym3 = Symbol('foo')                       
        // 06.- BigInt: NUMERO MUY MUY MUY GRANDE ENTERO 
            const x = 123456789012345678901234567890n;
            console.log(typeof x === "bigint"); // Imprime "true"
            console.log(typeof x); // Imprime "bigint"
            const y = 123;
            console.log(typeof y === "bigint"); // Imprime "false"
            console.log(typeof y); // Imprime "number"
    // DATOS ESPECIALES: 
         // 01.- Null: Nada, no existe. ES UN TIPO DE DATO OBJETO // si el objeto no se hereda, se muestra null;
         let nulo = null; 
         // 02.- Object: una estructura de datos que contiene datos e instrucciones para trabajar con los datos
         let obj = {
            name: "Alerto",
            age: 43, 
            sex: "m",
            taxes: 4.5,
            method: function () {
                return ((this.taxes * this.edad)/100)
            } 
         }
         // 03.- Function: funcion. 