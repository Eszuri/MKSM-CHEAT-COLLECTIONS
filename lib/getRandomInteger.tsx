function getRandomInteger(min: number = 1000000, max: number = 9999999) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomInteger;
