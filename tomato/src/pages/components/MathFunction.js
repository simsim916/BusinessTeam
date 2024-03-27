function makeComa(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function makeDiscountPrice(number, discount) {
    return Math.floor(number * (100 - discount) / 100);
}

export {makeComa, makeDiscountPrice};