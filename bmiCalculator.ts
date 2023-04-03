const calculateBmi = (height: number, weight: number) => {
    const bmi: number = 10_000*weight/height**2

    if (bmi > 25) {
        return `Overweight (${bmi})`
    } else if (bmi < 20 ) {
        return `Underweight (${bmi})`
    } else {
        return `Normal (${bmi})`
    }
}

console.log(calculateBmi(184, 79))