/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let flag = false, i = 0
    while (i <= bits.length) {
        if (bits[i] === 0) {
            if (i == bits.length - 1) {
                return !flag
            }
            i++
        } else {
            i = i + 2
        }
    }
    return flag
};