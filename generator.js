function* generatorExample() {
  console.log("decode");
  yield { a: 5, b: 7 };
  yield [6, 8, 9];
  yield 10;

  return 11;
}

const generator = generatorExample();

console.log(generator.next().value);
console.log(generator.next());
console.log(generator.return());
console.log(generator.next());
