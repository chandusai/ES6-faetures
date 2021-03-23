// let and var key words

function sayHell(){
 for(let i=0;i<10;i++){
  console.log(i);
 }
// console.log(i);
}
sayHell()



// By using the let keyword "i" can be accessible inside the "for code " block. 

// But where as when we are using the var key word " i" can be accessible entire function.
// When we are declaring the variables with "var" keyword are scoped to the function.
// Varibles which are declared with let keyword are scoped with block in which they are defined.

function sayHello(){
    for(var i=0;i<6;i++){
     console.log(i);
    }
   console.log(i);
   }
   sayHello()


// Arrow functions

 let ch =() => {
    return(console.log("HelloWorld"))
}
ch();

let myName= (Fname ,Lname)=>{
    console.log(`Hello ${Fname}${Lname}`);
}
myName("Chandu","Movva");
// function myName(Fname,Lname){
//     console.log(Fname + Lname)
// }
// myName("chandu","Movva")

let favfoods =["pizza","icecream"]
console.log(favfoods)

let randomfood =()=>{
    for (let i=0;i<=favfoods.length;i++){
        console.log(Math.random(favfoods))
    }

}
randomfood();
let numbers=[1,2,3,4,5,6,7,8,9,10]
let oddnumbers = ()=>{
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2==1){
            console.log(numbers[i]);
        }
        
    }
}
oddnumbers();
let difference = (a,b) =>{
   console.log(a-b)
}
difference(10,6)
let product =(a,b)=>{
    console.log(a*b);
}
product(2,8)

let add=(num1,num2)=>{
console.log(num1 + num2)    
    }


add(10,15)
let subtract =(a,b)=>{
console.log(a-b)
}
subtract(50,125)

let mul = (a,b)=>{
console.log(a*b)
}
mul(10,15)
let divide = (a,b)=>{
    console.log(10/20)
}
divide(15,6)

 let di = (string)=>{
if(string ==='Tim'){
    console.log("Hello Boss")
}
else 
console.log('Hello' + string)
}
di('Tim')

let mn ="I lives in Minnea polis"

function abc(){
    console.log(mn);
    mn= "I lives in India"
    console.log(mn)
}
console.log(mn)
abc();

let average = (arr)=>{
  let total =0;
  for (let i=0; i< arr.length;i++){
      total += arr[i];
  }
  console.log(total/arr.length)
}
average([1,2,3,4,5,6,7,8,9,10])


var createStudent = (firstname,lastname)=>{
return({
    firstName:firstname,
    lastName:lastname
})
}
let ca = createStudent('chandu','Movva')
let az = createStudent('Divya','Movva')
let ak =createStudent('Anil','kolusu')

let students = [ca,az,ak]
console.log(students)


// let studentsbyfirstName = (sttrrr)=>{
//  let lowercasename = sttrrr.toLowerCase()

// //     for (let i=0;i <= students.length;i++){
// //         console.log(students[i].firstName)
// //             if(students[i].firstName=== lowercasename){
           
// //              return (true)
// //         }
// //       }
// //      return (false)
// // }
// // studentsbyfirstName('hung')


let extactEveryThird = (divya)=>{
    let third =[];
 for (let i =2; i<=divya.length;i+=3){
     third.push(divya[i])
 }
 console.log(third)
}
extactEveryThird([1,2,3,4,5,6])

let evenandodds = (anil)=>{
    let countobject ={
        evencount:0,
        oddcount:0
    }
for(let i=0; i<=anil.length;i++){
    console.log(anil[i])
    if(anil[i] % 2 === 0){
         countobject.evencount++
    }
    else
    countobject.oddcount++
}
console.log(countobject)
}
evenandodds([1,2,3,4,5,6,7,8,9,10]) 


/// Objects

let obj ={
firstName:"Chandu",
lastName:"Movva",
occupation:"softwareengineer"
}
console.log(obj)
console.log(obj.firstName)
console.log(obj.lastName);
console.log[obj.occupation]
console.log(delete obj.occupation)
console.log(obj)
// console.log(obj.hobby="playing cricket");
// console.log(obj);

// Iteration over the objects
let chandu ={
    model :"car",
    year:1993,
    seats:4,
    make:"ford"
}
for(let singlekey in chandu){
    console.log(chandu[singlekey])
}
let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}
for (let key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`)
}
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming.languages.push("Go"))
console.log(programming.languages)
console.log(programming.difficulty=7)
console.log(programming)
console.log(delete(programming.jokes))
console.log(programming)
console.log(programming.isFun=true)
console.log(programming)
for(let k in programming){
console.log(k)
}
for(let j=0;j<programming.languages.length;j++){
    console.log(programming.languages[j])
}
// callbackfunctions

 // A callback function is function that is passed in to another function as a  parameter and then invokde by otherfunction is called as callbackfunction.
function number(){
    console.log("I'm coming from number")
}
function alphabet(fn){
        console.log("About to call number")
        fn()
        console.log('Executed number')

}
alphabet(number)

//Higherorderfunction 

// A function which accepts a callback as an argument is called highorderfunction


// Advanced array methods

const petNames=["Heidi","Chewy","Buster","Joey","Gypsy"]


console.log(petNames.length);
// Iterating an array

for(let i=0;i<petNames.length;i++){
    console.log(petNames[i]);
}
// forEach for arrays

const fruits =["Apple","Banana","Orange"]
fruits.forEach((element)=>{
    console.log(element)

})

const scores =[50,60,70,80,90,100]

const logscore= scores.forEach((score)=>{
  if(score >= 80){
console.log(score)
  }
})

const pets = ['dog','cat','sheep','goat','cow','Alpha']
console.log(pets.sort())


const placeholder =
[
    {
      "UserId": 1,
      "Id": 1,
      "Title": "to provide or to reject the blind are welcome option to find",
      "Body": "And it takes \ nsuscipit follow accepted lightly with \ nreprehenderit discomfort may be the entire \ nnostrum of the things that happens is that they are extremely"
    },
    {
      "UserId": 1,
      "Id": 2,
      "Title": "that was",
      "Body": "is existed at the time of life \ 'Blessed are the pain of her pains, nor condemn nseq they are nothing \ nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some \ nWho, not being due, we may be able to open the man who did not, but there is no"
    },
    {
      "UserId": 1,
      "Id": 3,
      "Title": "those who reject the troubles they exercise that is either",
      "Body": "and on the right, but \ nvoluptatis blinded to the election or \ nvoluptatis pains or denouncing any resultant \ nmolestiae on his work and wants to hate or"
    },
    {
      "UserId": 1,
      "Id": 4,
      "Title": "it will be blinded",
      "Body": "rejects any and often experience pleasure \ mānsit lot of things to take to provide fault \ nquir here the opportunity to do the right bound pain \ nFor the pleasure of the outdoor"
    },
    {
      "UserId": 1,
      "Id": 5,
      "Title": "do you hate",
      "Body": "I look for things, but rejected \ nal or to avoid it, but it is \ nvoluptatis all the pleasures of what we can \ nest bound or no pain"
    },
    {
      "UserId": 1,
      "Id": 6,
      "Title": "great pain to open for them",
      "Body": "in order to follow the rejects of the body, provide in any one of these there is nothing \ nmollitia us dare to give annoyance \ nperspiciatis of denouncing, and the things which I condemn no one from the \ nvoluptatis The sorrows of pain and discomfort he wishes to"
    },
    {
      "UserId": 1,
      "Id": 7,
      "Title": "large and easy",
      "Body": "let it be shown some of the pain of life, please \ in which a man who has no one, either, for who is often nmagni \ nQuidam repel excepturi that, because I \ nsunt do who comes after them, but the things which they call"
    }
]

placeholder.forEach((element)=>{
console.log(element)
})
placeholder.filter((scale)=>{
if(scale.Title === "large and easy"){
    console.log("you got it")
}

})


let brandscores =[50,60,70,80,90,100,120,140]

 const BP =brandscores.filter((memes) =>{
if(memes >= 160){
    return true;
}
})
console.log(BP)
// reverse 

const condiments =['ketchup','mustard','relish','mayo']
console.log(condiments.reverse())

const employees = ['Adams','Peter','Davis','Fraklim','Zappa']
employees.forEach((employ)=>{
    console.log(employ)
})
 const benz =employees.reverse()
 console.log(benz)

 const tensee = employees.sort()
 console.log(tensee)

 console.log(employees)

 const spread = [...employees]
 console.log(spread.reverse())

 // find() and find index()

const grad = [99,83,87,91,77,100,120]
 
const upgrades = grad.find((min)=>{
    if(min < 100){
        return true
    }
})
console.log(upgrades)


// Practice

const newstudents =[
{name:'John', grade:73},
{name:'cartoon', grade:105},
{name:'Peter', grade:89},
{name:'Sizza', grade:93},
{name:'Michael', grade:103}

]
const updatesec = newstudents.sort((a,b)=>{
    return (b.grade-a.grade)
    })
    console.log(updatesec)
    updatesec.reverse()
    console.log(updatesec)
    

const highmarks = updatesec.find((element)=>{
 if(element.grade > 100)
 return true
})
console.log(highmarks)
// includes


const careeers = ['teacher','doctor','engineer','Nurse','scienctist']

 const careersnew = careeers.includes('Doctor')
 console.log(careersnew);


 // some and every 
const bowlingscores = [154,204,300,184,286,149]
const newbowl = bowlingscores.includes(300)
console.log(newbowl)

const bowl1 = bowlingscores.some((bowl)=>{
    if(bowl<150)
    return true
})
console.log(bowl1)

    const bowl2 = bowlingscores.every((bowl)=>{
     if(bowl %2 === 0){
         return true
     }
     return false
    })
    console.log(bowl2)



const drinks = ["coffee","tea", "soda","water"]

drinks.push("wine")
console.log(drinks)

const seasons =["spring","summer","fall","winter"]
 const newSeasons=seasons.pop()
 console.log(newSeasons)

const ages = [18,33,71,29,65,62]

console.log(ages.unshift(36))
console.log(ages)

const holidays = ["Labor Day","Christmas","Independenceday","Presidentsday"]
 const removedholiday = holidays.shift()
 console.log(removedholiday)


 const foods = [
  {food :'rasberries',type :'fruit'},
  {food : 'orange',type :'fruit'},
  { food :'broccoli',type:'vegetable'},
  {food : 'quinoa',type:'grain'}
 ]

 const blackBeans = {food:'black beans',type:'legume'};
 const chiaseeds ={ food: 'chiaseeds', type:'seed'}

 foods.pop()
 console.log(foods)
 foods.shift()
 console.log(foods)
 foods.unshift(blackBeans)
 console.log(foods)
 foods.push(chiaseeds)
 console.log(foods)
 // Map method

 const friends = [
     {firstname:'chandu', age:27},
     {firstname:'raja',age:24},
     {firstname:'akhila',age:26},
     {firstname:'divya',age:27}
 ]
//  console.log(friends)
 const fullfriends = friends.map((newbee)=>{
     return (newbee.firstname + newbee.age)
 })
console.log(fullfriends)

const brand__scores = [10,20,30,40,50,60,70]
const newscores = brand__scores.map((level)=>{
    return level +=5
})
console.log(newscores)


const companies = [
    {"name":"Apple", "location":"Cupertino"},
    {"name":"Facebook","location":"Melonopark"},
    {"name":"Telsa","location":"Paloalto"},
    {"name":"visa","location":"Fostercity"}
]
const companyheadquarters = companies.map((headquarters)=>{
return(`${headquarters.name}  is headquartered at ${headquarters.location}`)
})
console.log(companyheadquarters)

const rates = [100,200,300, 400,500,600]
const festival__rates = rates.map((price)=>{
return `${price += 5}`
})
console.log(festival__rates)

// reduce
const sales = [1,2,3,4,5,6,7,8,9,10]
const totalsales = sales.reduce((total,sale)=>{
 return total + sale
})
console.log(totalsales)

const bills = [100,200,300,400,500,600,700,800]
const monthlybills = bills.reduce((total,sale)=>(total + sale))
console.log(monthlybills)
 
//Exercises
const movies =[
    {
     title:'Avatar',
     year:2009,
     rating:'PG-13'
    },
    {
        title:'Gladitor',
        year:2002,
        rating:'PG-12'
    },
    {
        title:'Movie3',
        year:2012,
        rating:'PG-13'
    },
    {
        title:'Movie4',
        year:2013,
        rating:'PG-13'
    },
    {
        title:'Movie5',
        year:2013,
        rating:'PG-13'
    }, {
        title:'Movie6',
        year:2013,
        rating:'PG-13'
    }
]
 const movie_titles = movies.map((movie)=>((movie.title)))
 
console.log(movie_titles)

 const movie__year = movies.filter((element)=> (element.year=='2013'))
 console.log(movie__year)

 const movie__rating = movies.reduce((total,element)=>{
     if( element.rating ==="PG-13"){
         total++;
     }
     return total;
   
 },0)
 console.log(movie__rating);