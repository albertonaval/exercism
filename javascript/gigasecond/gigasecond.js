//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  return new Date(time.getTime() + Math.pow(10, 12))

  //Date.getTime() => representa en milisegundos la fecha que se le pasa + la potencia solicitada.
};
