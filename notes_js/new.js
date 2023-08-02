function cuantosEstanOnLine(usuarios) {
  //usuario es un objeto que tiene propiedades que a su vez tiene otros usuarios.
  // retornar los usuarios online
  let count = 0;
  let usser = [];
  for (prop in usuarios)
    if (usuarios[prop].online) {
      count += 1;
      usser.push(prop);
    }
  return `${count} son el total de los usuarios Online y sus nombre son ${usser}`;
}

console.log(
  cuantosEstanOnLine({
    lucas: { online: true },
    Fabian: { online: false },
    Alberto: { online: true },
    José: { online: false },
    Ericka: { online: true },
  })
);
