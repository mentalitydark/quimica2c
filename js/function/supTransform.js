export const SupTransform = function (numberStr) {
    const numberArray = numberStr.split(' ');
    let newStr = '';
    for (let i = 0; i < numberArray.length; i++) {
        const arraySplit = (numberArray[i]).split('');
        const str = `${arraySplit.splice(0, 1)}${arraySplit.splice(0, 1)}`
        newStr += `${str}<sup>${arraySplit.join('')}</sup> `;
    }
    return newStr;
}
