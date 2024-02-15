function increaser(a, index) {
  for (a; a >= index; a -= 1) {
    a += index;
    if (a > index) {
      continue;
    }
  }
  return a;
}

console.log(increaser(5, 1));
