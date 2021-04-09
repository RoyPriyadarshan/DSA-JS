/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
    let storage = []
    let reference = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for (let i = 0; i < s.length; i++) {
        if (storage.length > 0 && s[i] === reference[storage[storage.length - 1]]) {
            storage.pop()
        } else {
            storage.push(s[i])
        }
    }
    return storage.length === 0

};