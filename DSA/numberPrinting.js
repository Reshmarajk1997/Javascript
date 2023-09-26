function prin(i) {
  if (i <= 5) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log("");
    prin(i + 1);
  }

  for (j = 1; j < i; j++) {
    process.stdout.write(j.toString());
  }
  console.log("");
}

prin(1);
