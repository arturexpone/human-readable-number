module.exports = function toReadable (number) {
    let res = '';
    let nine = [
        'zero', 'one',
        'two', 'three',
        'four', 'five',
        'six', 'seven',
        'eight', 'nine',
        'ten', 'eleven',
        'twelve', 'thirteen',
        'fourteen', 'fifteen',
        'sixteen', 'seventeen',
        'eighteen', 'nineteen',
    ];
    let tens = [
        'twenty', 'thirty',
        'forty', 'fifty',
        'sixty', 'seventy',
        'eighty', 'ninety'
    ];
    if (number > 99) {
        res += `${nine[Math.floor(number / 100)]} hundred`;
    }
    if (number % 100 > 19) {
        res += ` ${tens[Math.floor(number % 100 / 10) - 2]}`;
        if(number % 10 !== 0) {
            res += ` ${nine[Math.floor(number % 10)]}`;
        }
    }
    if (number % 100 <= 19 && number % 100 > 0) {
        res += ` ${nine[Math.floor(number % 100)]}`;
    }
    if((number + '').length < 3) {
        res = res.slice(1);
    }
    return number === 0 ? 'zero' : res;
}
