type Big = { a: string } | { b: string };
type Small = { a: string } & { b: string };

let a: Big = { a: "1", b: "2" };
let b: Small = { a: "1", b: "2" };
a = b;
b = a;

type fn1 = (arg: Big) => void;

type fn2 = (arg: Small) => void;

let f1: fn1 = (b) => {};

let f2: fn2 = (a) => {};

f1 = f2;
f2 = f1;

type UTJ<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer U
) => any
  ? U
  : never;

type T = UTJ<Big>;
