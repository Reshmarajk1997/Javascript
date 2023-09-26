let i = 1;
function pattern(a) {
  if (a > i) {
    process.stdout.write(" ");
    a--;
    if (a == i) {
      let j = 1;
      while (j <= i) {
        process.stdout.write(j.toString());
        j++;
      }
      console.log("");
      i++;
      a = 5;
    }
    pattern(a);
  }
}

pattern(5);
