export const supTransform = function(numberStr) {
    const numberArray = numberStr.split(' ');
    let newStr = '';
    for (let i = 0; i < numberArray.length; i++) {
        const arraySplit = (numberArray[i]).split('');
        const str = `${arraySplit.splice(0, 1)}${arraySplit.splice(0, 1)}`;
        newStr += `${str}<sup>${arraySplit.join('')}</sup> `;
    }
    return newStr;
};
export const numTransform = function(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]*1)) {
            res += str[i];
        } else {
            res += `<span class="numeroTab">${str[i]}</span>`;
        }
    }
    return res;
};
