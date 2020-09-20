const students = [
    {id:21, name:'Akash Saha'},
    {id:31, name: 'Sakib hasan'},
    {id:41, name: 'Mahadi hasan'},
    {id:51, name: 'Faisal Ahmed'},
    {id:61, name: 'Forid hasan'},
    {id:71, name: 'Azhar kecha'},
    {id:81, name: 'Mirza hasan'},
    {id:91, name: 'Tonmoy chutiya'}

];


 const output=[ ];
  for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameProperty = element.name
    // console.log(nameProperty);
     output.push(nameProperty);
    
 }
 console.log(output);

//Map Function use
const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids)

//Filter and find
const bigger = students.filter(s => s.id>50);
console.log(bigger);
const biggerOne = students.find(s => s.id>50);
console.log(biggerOne);