function suma(x,y){
 var res = parseInt(x)+parseInt(y);
 return res;
}
it('suma correctamente', () => {
 expect(suma(5,6)).toBe(11);
});


function resta(x,y){
 var res = parseInt(x)-parseInt(y);
 return res;
}
it('resta correctamente', () => {
 expect(resta(5,2)).toBe(3);
});

function multiplicar(x,y){
 var res = parseInt(x)*parseInt(y);
 return res;
}
it('multiplicar correctamente', () => {
 expect(multiplicar(5,2)).toBe(10);
});

function dividir(x,y){
 var res = parseInt(x)/parseInt(y);
 return res;
}
it('dividr correctamente', () => {
 expect(dividir(66,6)).toBe(11);
});
