function getDaysBeforeBirthday(nextBirthdayDate) {
    nextBirthdayDate = new Date(2023, 5, 12)
    let now = new Date()
    let daysTillBirthday = Math.round((nextBirthdayDate - now)/1000/60/60/24)
    return daysTillBirthday
}

console.log(getDaysBeforeBirthday('через сколько мой день рождения?'))