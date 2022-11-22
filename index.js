function convert(ms) {
    let days = Math.round(ms/1000/60/60/24)
    return days
}


function getDaysBeforeBirthday(nextBirthdayDate, callback) {
    nextBirthdayDate = new Date(2023, 5, 12)
    let now = new Date()
    let timeTillBirthday = nextBirthdayDate - now
    let days = convert(timeTillBirthday)
    return days

}

console.log(getDaysBeforeBirthday('через сколько мой день рождения?', convert))