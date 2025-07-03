
function calculateBMI(weight: number, height: number): string {

    // hitung BMI berdasarkan rumus : berat (kg) / (tinggi)`2

    const bmi: number = weight / (height * height)

    // tentukan kategori berdasarkan nilai BMI
    if (bmi < 18.5) {
        return "less weight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal"
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight"
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}

console.log(calculateBMI(50, 1.6)) // berat = 50kg, tinggi = 160cm
console.log(calculateBMI(90, 1.6)) //  berat = 90kg, tinggi = 160cm