const argumentValue = process.argv[2]
numberValue = Number(argumentValue)
if (numberValue === 0) {
  console.log('alive');
} else {
  console.log('other');
}