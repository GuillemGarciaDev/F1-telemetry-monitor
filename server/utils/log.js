function getTime() {
    return `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} : ${ new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

exports.getTime = getTime