const { soma, subtrair, multiplicar, dividir } = require('./math');

test('a função add deve somar dois números corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});

test('a função subtract deve subtrair dois números corretamente', () => {
  expect(subtrair(5, 3)).toBe(2);
});

test('a função multiplicar deve multiplicar dois números corretamente', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('a função dividir deve dividir dois números corretamente', () => {
  expect(dividir(6, 3)).toBe(2);
});

test('a função dividir deve lançar um erro ao dividir por zero', () => {
  expect(() => dividir(6, 0)).toThrow('Divisão por zero não é permitida');
});