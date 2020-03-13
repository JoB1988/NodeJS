function soma(a, b) {
    return a + b;
  }
  const maiorQzero = RES => {
    return RES > 0;
  };
  const msg = RES => {
    if (maiorQzero(RES)) {
      return `${RES} é maior que 0`;
    } else {
      return `${RES} não é maior que 0`;
    }
  };
  
  const N1 = -8;
  const N2 = 7;
  const RES = soma(N1, N2);
  
  console.log(`Resultado: ${RES}`);
  console.log(msg(RES));
  const a = ['node','react', 'angular','sql']
const c = a.map((value, index) => `${value}-${index}`)
const d = a.map((value) => { if(value.length > 4) return value })
const e = a.filter((value) => { return value.length > 4 })
const b = a.map(value=> value.trim())
console.log(b);
console.log(c);
console.log(d);
console.log(`O aray de retorno na filtragem de se cada item é maior que 4`, e);