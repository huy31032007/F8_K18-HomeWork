//	Lesson 1: Academic Performance Classification
// 		Write a function that takes a student's score (0-10) as input and prints the classification:
// 		9 - 10: Excellent
// 		8 - under 9: Very Good
// 		6.5 - under 8: Good
// 		5 - under 6.5: Average
// 		Under 5: Weak
// 		Requirement: Check if the entered score is valid (0-10) before evaluating.

function getStudentLevel(score) {
    if (score < 0 || score > 10) {
        return "Invalid score"
    } else if(score >=9){
        return "Excellent"
    } else if(score >= 8){
        return "Very Good"
    } else if(score >= 6.5){
        return "Good"
    } else if(score >= 5){
        return("Average")
    } else if(score < 5){
        return "Weak"
    }
}
console.log(getStudentLevel(5))

//Lesson 2: Days in a Month Calculator
// 	Using a switch case, write a function that takes a month number (1-12) as input. Print how many days are in that month.
//
// 	Hint: Months 1, 3, 5, 7, 8, 10, 12 have 31 days. Months 4, 6, 9, 11 have 30 days. Month 2 has 28 or 29 days (temporarily calculate as 28 days).
//

function getInMonth (month) {
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 days")
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 days")
            break;
        case 2:
            console.log("28 days")
            break;
    }
}
getInMonth(3)
//	Lesson 3: Even/Odd Check
// 		Write a single line of code using the ternary operator to check variable n. If n is even, return the string "Even", otherwise return "Odd".

const number = 3;
console.log(number % 2 === 0 ? "Even" : "Odd")

//	Lesson 4: Movie Ticket Price Calculation
// 		A cinema has a base ticket price of 100k.
// 		If it's a child (under 13 years old), the ticket price is reduced by 50%.
// 		Otherwise, the price remains 100k.
//
// 		Requirement: Use the ternary operator to assign the value to the ticketPrice variable.

const age = 12;
const ticketPrice = age < 13 ? "50.000VND" : "100.000VND";
console.log(ticketPrice)

//	Lesson 5: Temperature Conversion
// 		Write a function to calculate the conversion from Celsius to Fahrenheit. Formula: F = C * 1.8 + 32
function toFahrenheit(celcius){
    return (celcius*1.8) + 32
}
console.log(toFahrenheit(100))

//	Lesson 6: Household Electricity Bill Calculation
// 		Assume the electricity tariff for a household is calculated using the progressive method (tiered pricing) as follows:
// 			Tier 1: For the first 50 kWh: 1,678 VND/kWh.
// 			Tier 2: From the 51st to 100th kWh: 1,734 VND/kWh.
// 			Tier 3: From the 101st to 200th kWh: 2,014 VND/kWh.
// 			Tier 4: Above 200 kWh: 2,536 VND/kWh.
//
// 		Write a function to calculate the electricity bill
// 			Input: electricity consumption (kWh)
// 			Output: amount to pay

function calculateBill(electricityConsumption){
    if(electricityConsumption < 0 ){
        return "Invalid electricity consumption"
    }
    if(electricityConsumption <= 50){
        return electricityConsumption * 1678
    }
    if(electricityConsumption > 50 && electricityConsumption <= 100){
        return 50 * 1678 + (electricityConsumption - 50) * 1734
    }
    if(electricityConsumption > 100 && electricityConsumption <= 200) {
        return 50 * 1678 + 50 * 1734 + (electricityConsumption - 100) * 2014
    }
    if(electricityConsumption > 200){
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + (electricityConsumption - 200) * 2536
    }
}
console.log(calculateBill(500))
