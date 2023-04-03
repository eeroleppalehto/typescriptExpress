interface Result {
  periodLength: number
  trainingDays: number
  target: number
  average: number
  success: boolean
  rating: number
  ratingDesciption: string
}

const parseList = (argumentList: string[]): number[] => {
  if (argumentList.length < 4) throw new Error('Not enough arguments')

  const [a1, a2, ...numArguments] : string[] = argumentList

  const convertedNumArgumnets: number[] = numArguments.map(item => Number(item))

  if (convertedNumArgumnets.includes(NaN)) throw new Error('Contains non numeric argument(s)')

  return convertedNumArgumnets
}

const calculateExercises = (exerciseArgs: number[]): Result => {
  const [targetValue, ...exercises]: number[] = exerciseArgs
  const numberOfDays = exercises.length
  const averageValue: number = exercises.reduce((acc, curr) => acc + curr, 0)/ numberOfDays

  const compareTarget2Average: number = averageValue / targetValue

  let ratingValue = 0
  let ratingString = ''
  if (compareTarget2Average >= 1) {
    [ratingValue, ratingString]= [3, 'You achieved your goal']
  } else if (compareTarget2Average < 0.5) {
    [ratingValue, ratingString] = [1, 'You have been slacking']
  } else {
    [ratingValue, ratingString] = [2, 'You\'re at least half way there']
  }

  return {
    periodLength: numberOfDays,
    trainingDays: exercises.filter(day => day != 0).length,
    target: targetValue,
    average: averageValue,
    success: (averageValue >= targetValue),
    rating: ratingValue,
    ratingDesciption: ratingString
  }
}

try {
  const args: number[] = parseList(process.argv)
  console.log(calculateExercises(args)) 
} catch (error: unknown) {
  let errorMessage = 'Unsuspected error: '
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage)
}
