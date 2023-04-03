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
  if (argumentList.length < 3) throw new Error('No arguments')

  const [a1, a2, ...numArguments] : string[] = argumentList


  const convertedNumArgumnets: number[] = numArguments.map(item => Number(item))

  if (convertedNumArgumnets.includes(NaN)) throw new Error('Contains non numeric arguments')

  return convertedNumArgumnets
}

const calculateExercises = (exercisePerDay: number[]): Result => {
  const numberOfDays = exercisePerDay.length
  const targetValue: number = 2
  const averageValue: number = exercisePerDay.reduce((acc, curr) => acc + curr, 0)/ numberOfDays

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
    periodLength: exercisePerDay.length,
    trainingDays: exercisePerDay.filter(day => day != 0).length,
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
} catch (error) {
  
}

// TODO: Add missing error handeling from function 'calculateExercises'