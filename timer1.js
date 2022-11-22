const args = process.argv.slice(2);

for (let num of args) {
  let argNum = Number(num);
  if (!isNaN(argNum) && Number.isFinite(argNum) && typeof argNum === 'number' && argNum > 0) {
    let timer = argNum * 1000;
    setTimeout(() => {
      console.log("\007");
      //process.stdout.write('\x07');
    }, timer);
  }
}
