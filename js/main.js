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

/////Latest function from Codewars
function getSum( a,b )
{
   //Good luck!
   let min = a;
   let max = b;
   if(a > b) {
        min = b;
        max = a;
   }
   return   min === max ? min : (min + max) * (max - min + 1) / 2;
}
