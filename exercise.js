class Exercise {
    charCount(first, second) {
        let combineArgs = first + second;

        return combineArgs.split('').reduce((object, char) => {
            if(object[char]) {
                object[char] += 1
            } else {
                object[char] = 1
            }
            return object
        }, {})
    }

}

module.exports = Exercise;