function isPrime(positiveInteger) {
    if (positiveInteger == 1) {
        return false;
    }
    for (let i = 2; i < Math.floor(Math.sqrt(positiveInteger)) + 1; i++) {
        if (positiveInteger % i == 0) {
            return false;
        }
    }
    return true;
}

function factorize(positiveInteger) {
    let factors = [];
    for (let i = 2; i < Math.floor(Math.sqrt(positiveInteger)) + 1; i++) {
        while (positiveInteger % i == 0) {
            factors.push(i);
            positiveInteger /= i;
        }
    }
    if (positiveInteger != 1) {
        factors.push(positiveInteger);
    }
    return factors;
}

function isPositiveInteger(num) {
    return (Number.isInteger(num) && num > 0);
}

function isLessThan(num, upperLimit) {
    return (num < upperLimit);
}

function showResult(inputString) {
    let number = Number(inputString);
    let result = "";

    if (!isPositiveInteger(number)) {
        result = `「${inputString}」は正の整数ではありません。10 ^ 12 未満の正の整数を入力してください。`;
    } else if (!isLessThan(number, 10 ** 12)) {
        result = `10 ^ 12 未満の正の整数を入力してください。`;
    } else if (isPrime(number)) {
        result = `${number} は素数です。`;
    } else if (number == 1) {
        result = `${number} は素数ではありません。`;
    } else {
        result = `${number} は素数ではありません。素因数分解すると ${factorize(number).join(" × ")} です。`;
    }
    document.getElementById('result').innerHTML = result;
}
