const getMin = (array) => {
    return Math.min(...array)
};


const getEven = (array) => {
    return array.filter(item => item % 2 === 0 )
};


let someArray = [
    {name: 'Jonny Walker', birthDate: '1995-12-17'},
    {name: 'Andrew', birthDate: '2001-10-29'},
    {name: 'Viktor', birthDate: '1998-11-09'},
    {name: 'Andrew', birthDate: '2001-15-09'}
];

const searchByName = (name) => {
    return someArray.filter(item => item.name === name)
};
