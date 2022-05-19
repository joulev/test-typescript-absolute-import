import isOdd from "is-odd";

export default function echoFunc() {
  console.log(`Hello, world! 1 is ${isOdd(1) ? "odd" : "even"}.`);
}
