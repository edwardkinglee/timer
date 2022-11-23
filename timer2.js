/*https://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin */
const stdin = process.stdin;
// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);
// doesn't recognize key values for if statment without
stdin.setEncoding('utf8');

const beep = () => process.stdout.write('\x07');

console.log('Press keys 1-9 to set beep timer seconds or "b" on the keyboard for a beep');
stdin.on('data', data => {
  if (data === 'b') {
    beep();
  }
  if (data >= 1 && data <= 9) {
    console.log(`setting timer for ${data} seconds...`);
    setTimeout(() => {
      beep();
    }, data * 1000);
  }
  // ctrl-c (to exit)
  if (data === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});