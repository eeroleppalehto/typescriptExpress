interface Measurements {
    height: number
    weight: number
}

const parser = (args: string[]): Measurements => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
}

const calculateBmi = (height: number, weight: number) => {
  if (height <= 0 || weight <= 0){
    throw new Error('Given values are not positive numbers')
  }

  const bmi: number = 10_000*weight/height**2

  if (bmi > 25) {
    return `Overweight (${bmi})`
  } else if (bmi < 20 ) {
    return `Underweight (${bmi})`
  } else {
    return `Normal (${bmi})`
  }
}

try {
  const { height, weight }: Measurements = parser(process.argv)
  console.log(calculateBmi(height, weight))
} catch (error: unknown) {
  let errorMessage = 'Unsuspected error: '
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage)
}
