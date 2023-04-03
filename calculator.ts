type Operation = 'multiply' | 'add' | 'divide'

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a*b
    case 'divide':
      if (b === 0) throw new Error('zeroDivisionError');
      return a/b
    case "add":
      return a+b
    default:
      throw new Error('Incorrect operation');
  }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
const oper = process.argv[4] as Operation
try {
  const someValue = calculator(a, b, oper)
  console.log(someValue)
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage)
}
