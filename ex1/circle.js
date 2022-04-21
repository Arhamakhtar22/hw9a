function circumference (radius){
    return (`The circumference of a circile of radius ${radius} is ${2 * Math.PI * radius}`);
}

function area(radius){
    return (`It's area is ${radius * radius * Math.PI}`);
}

module.exports.circumference = circumference;
module.exports.area = area;

