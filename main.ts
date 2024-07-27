#!/usr/bin/env node

import inquirer from "inquirer";


// Q.1 = Install Node.js, TypeScript and VS Code on your computer.

// done

// Q2. Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName1:string = "Zaidi"
console.log (`"hello ${personName1}, would you like to learn some Python today?” `)

// Q3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
let personName2:string = "Zaidi"
console.log (personName2.toUpperCase())
console.log (personName2.toLowerCase())
console.log (personName2.replace(/\b\w/g, a => a.toUpperCase()))


// Q4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks: Albert Einstein once said,
// “A person who never made a mistake never tried anything new.”

let author:string = "Benjamin Franklin";
let quote:string = "Three can keep a secret, if two of them are dead.";
console.log (`${author} once said, "${quote}"`)

// Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Benjamin Franklin"
let message = "A person who never made a mistake never tried anything new."
console.log (`${famous_person} once said, "${message}"`)


// Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName = "Irfan"
console.log (`\n\t ${personName}\n\t `)
let per = personName.trim()
console.log (per)


// Q7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

let number = 5+3
console.log (number)
let number1A = 11-3
console.log (number1A)
let number2B = 4*2
console.log (number2B)
let number3C = 80/10
console.log (number3C)

// Q8. You should create four lines that look like this:


console.log (5+3)
console.log (11-3)
console.log (4*2)
console.log (80/10)


// Q9. Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

let FavoriteNumber:number = 7
console.log (`my favourite number is ${FavoriteNumber}`)



// Q10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.


// name = "bali-calculator"
// Date: 26-03-24
// Programme: CLI Based Calculator
// This is my first CLI based Calculator 

// name = "iffi-word-counter"
// Date: 30-04-24
// Programme: Word Count Project
// This programme based on word counter 

// Q11. Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let name = [
"fuarqan","irfan","imran","rizwan","farhan",
]
for (let i=2; i<name.length;i++)
console.log (name[i])


// Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let name1 = [
"fuarqan","irfan","imran","rizwan","farhan",
]
for (let i=0; i<name.length;i++)
console.log (`dear ${name[i]} you are invited in my house for dinner`)


// Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

const myTransport:string[] = ["Mira","Mehran","BMW","porche","Aqua"]
for (let i =0; i<myTransport.length; i++)
{console.log (`"i would like to own a ${myTransport[i]}"`)}


// Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let Guest = [
"fuarqan","irfan","imran","rizwan","farhan",
]
for (let i=0; i<Guest.length;i++)
console.log (`dear ${Guest[i]} you are invited in my house for dinner`)


// Q15.  Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.


let guest:string[] = [
"fuarqan","irfan","imran","rizwan","farhan",
]
console.log (`due to some personal reason ${guest[2]}cannot come for dinner`)
for (let i=0; i<guest.length;i++)
guest[1] = "Zaid";
for (let i=0; i<(guest.length); i++)
    {console.log (`dear ${guest[i]}!you are invited in my house for dinner`)
}


// Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest1:string[] = [
"fuarqan","irfan","imran","rizwan","farhan",
]
console.log (`just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner`)
guest1.unshift("kamran")
guest1.splice(2,0, "Kashan")
guest1.push("Adnan")
    for (let i=0; i<(guest1.length); i++)
        {console.log (`dear ${guest1[i]} ! you are invited in my house for dinner`)
    }
    

// Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.


let guest2:string[] = [
"fuarqan","irfan","imran","rizwan","farhan",
]
    console.log (`we found out that our new dinner table won’t arrive in time for the dinner, we only have space for two guests`)
    while (guest2.length>2){
    let remove = guest2.pop()
    console.log (`sorry ${remove}, you are not invited for dinner.\n`);
}  
for (let i=0; i<(guest2.length); i++){
    console.log (`dear ${guest2[i]}! you are still invited for dinner`);
    }
guest2.splice(0,2)
console.log (guest2+"\n")


// Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




let places: string[] = ["Canada","Australia","Ireland","Thailand"];
let original_Erray:string[] = places.slice()
console.log ("Original Order", [original_Erray]);
console.log (`Alphabetically Order [${places.sort()}]`);
console.log ("Original Order", [original_Erray]);
console.log (`reverse alphabetically Order [${places.reverse()}]`);
console.log ("Original Order", [original_Erray]);
console.log (`reverse alphabetically Order [${places.reverse().reverse()}]`);
console.log (`reverse alphabetically Order [${places.reverse().sort()}]`);


// Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log (`total no of guest ${guest.length} \n `)

// Q20. Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

let Language: string[] = ["English","Urdu","Farsi","Punjabi"];
Language.forEach((list)=>{
    console.log (list)
})

Language.map((list)=>{
    console.log (list)
})

//Q21. They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

let myMobile = {
    name: "Mobile",
    Model:"S10",
    confugration: "4GB/128GB",
    prize: "1500",
    Avaibality: true,
}
console.log (myMobile);


//Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

let Brother:string[] = ["Furqan","Irfan","Imran","Rizwan","Farhan"]
Brother.slice()
for (let i=0;i<Brother.length;i++){
    console.log(Brother[5])}
    for (let i=0;i<Brother.length;i++){
    console.log(Brother[i])}


    // Q23. Conditional Tests: Write a series of conditional tests.
    // Print a statement describing each test and your prediction for the results of each test.
    // Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let drink = "cold"
console.log("if drink == `cold` its True,")
console.log (drink == `cold`)

let biscuit = `withSugar`;
console.log ("if biscuit == `withSugar`? I predict True.")
console.log (biscuit == `withSugar`)

let Roti = `Hot`
console.log ("if Roti == `Hot`? I predict True." )
console.log (Roti == `Hot`)

let Petrol = `Full`
console.log ("if Petrol == `Full`? I predict True.")
console.log (Petrol == `Full`)

let person = `Female`
console.log ("if person == `male`? I predict false.")
console.log (person == `male`)


let color = `black`
console.log ("if color == `blue`? I predict false.")
console.log (color == `blue`)


let thing = `Toys`
console.log ("if thing == `Cars`? I predict false.")
console.log (thing == `Cars`)

let friend = `Nain`
console.log ("if friend == `Kashif`? I predict false.")
console.log (friend == `Kashif`)


let dish = `biryani`
console.log ("if dish == `Qorma`? I predict false.")
console.log (dish == `Qorma`)


// Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


let number1 = 82
console.log (number1>50)
console.log (number1<81)
console.log (number1== 82)
console.log (number1!== 82)
console.log (number1>= 55)
console.log (number1<= 51)
let myName = "Irfan"
console.log (myName== "irfan")
console.log (myName== "Irfan")
let number2A = 50
console.log (number1>50 && number2A>60 )
console.log (number1>50 || number2A>60 )
let Alphbate:string[] = ["A","B","C","D","E"]
Alphbate.map((item=>
{console.log (item=="E")}))

let number21:string = "50"
console.log (number21 =="50");
console.log (number21 ==="50")


let number2:number = 50
console.log (number2 ==50);
console.log (number2 ===52)


// Q25. Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)

let alienCoulor:string = "Green";
if (alienCoulor === "Green")
    {console.log ("you just earn 5 Points")}
else {}


// Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let alienCoulorQ:string = "Green";
if (alienCoulorQ === "Green")
    {console.log ("you just earn 5 Points for shooting the alien.")}
else {console.log ("you just earn 10 Points for shooting the alien.")}

let alienCoulorS:string = "Green";
if (alienCoulorS === "Red")
    {console.log ("you just earn 5 Points for shooting the alien.")}
else {console.log ("you just earn 10 Points for shooting the alien.")}

// Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienCoulors = "green"
if (alienCoulors === "green"){console.log ("you just earn 5 Points for shooting the alien.")}
else {console.log ("you just earn 10 Points for shooting the alien.")}
alienCoulors = "yellow"
    if  (alienCoulors === "yellow"){console.log ("you just earn 10 Points for shooting the alien.")}   
    else {console.log ("you just earn 10 Points for shooting the alien.")}
    alienCoulors = "red"
    if  (alienCoulors === "red"){console.log ("you just earn 15 Points for shooting the alien.")}
    else {console.log ("you just earn 10 Points for shooting the alien.")}



//Q28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let age:number = 25
if (age === 2){console.log ("the person is a baby")}
else if (age >2.1 && age<3.9){console.log ("the person is a toddler")}
else if (age >4.1 && age<12.9){console.log ("the person is a kid")}
else if (age >13.1 && age<19.9){console.log ("the person is a teenager")}
else if (age >20.1 && age<64.9){console.log ("the person is a adult")}
else if (age >65.1){console.log ("the person is a elder")}


//Q29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits:string[] = ["banana","Muango","Melon","Apple","Grapes"]

if (favourite_fruits.includes ("banana")){console.log ("really like bananas!")}
if (favourite_fruits.includes ("Muango")){console.log ("really like Muango!")}
if (favourite_fruits.includes ("Muango")){console.log ("really like Muango!")}
if (favourite_fruits.includes ("Melon")){console.log ("really like Melon!")}
if (favourite_fruits.includes ("Grapes")){console.log ("really like Grapes!")}
else {console.log ("fruit is not available")}


//Q30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let user_name :String[] = ["Admin","Furqan","Imran","Rizwan","Farhan","irfan"]
for (let i=0;i<user_name.length;i++)
    if (user_name[i] == "Admin") {console.log ("Hello admin, would you like to see a status report?" )}
else  {console.log (`Hello ${user_name[i]}, thank you for logging in again.`)}



// Q31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user_names :String[] = ["Admin","Furqan","Imran","Rizwan","Farhan","irfan"]
    user_names = [] 
    if (user_names.length>0){
        for (let i=0; i<user_name.length;i++)
    if( user_names[i] == "admin") {
        console.log ("Hello admin, would you like to see a status report?" )
    }else {console.log (`Hello ${user_names[i]}, thank you for logging in again.`)}
        console.log ('\n we need to find some users.')
} 
else  {console.log  (`${user_names} we need to find some new users.`)}
    
 

// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has,
// print a message that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let Current_users = ["Furqan","irfan","imran","Rizwan","Farhan"];
let new_users = ["Usman","Irfan","Imran","Ubaid","Salman"];
new_users.forEach((New_one_users =>
{
    let our_coundition = Current_users.some(current_new_one=> current_new_one.toLowerCase()===New_one_users.toLowerCase())
    if(our_coundition){
        console.log (`sorry ${New_one_users} is already been used.`);
    }else {console.log (`the Usser ${New_one_users} is available`)
}

}
))




//Q33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


let Ordinal_number = [1,2,3,4,5,6,7,8,9]
for (let i=0; i<Ordinal_number.length;i++)
    {
        if (Ordinal_number[i] ==1){console.log (`${Ordinal_number[i]}st`);
    }   else if (Ordinal_number[i] ==2){console.log (`${Ordinal_number[i]}nd`);
    }   else if (Ordinal_number[i] ==3){console.log (`${Ordinal_number[i]}rd`);}
   else if (Ordinal_number[i] >=4&& Ordinal_number[i] <=9){console.log (`${Ordinal_number[i]}th`);}    
}    
    
// Q34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizza = ["BarBQ Pizza", "Tikka Pizza","Fajita Pizza"]
for (let i=0;i<pizza.length;i++){
    console.log (`${pizza[i]}`);}
for (let i=0;i<pizza.length;i++){    
console.log(`i like to eat ${pizza[i]}`);}
console.log (`i really love pizza\n I love Pizz\n i like flouver and topping of pizza`)



// Q35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!


let animal = ["dog","cat","Parrot"]
for (let i=0;i<animal.length;i++){console.log (`${animal[i]}`)}
for (let i=0;i<animal.length;i++){console.log (`A ${animal[i]} would make a great pet.`)}
console.log ('Any of these animals would make a great pet!')


// Q36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:number, label:string){
return `My Shirt Sizes is ${size} and my lable is ${label}`
}
let myFunction = make_shirt(32, "ALHAMDULILLAH")
console.log (myFunction)


// Q.37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(label:string, size:string = `large`){
return `${label} ${size}`
}
let functionnew = make_shirt1 (`i love typescript`)
console.log (functionnew)
    
function make_shirt11(label:string, size:string = `Medium`){
        return `${label} ${size}`
        }
        let functionnew1 = make_shirt11(`i love typescript`)
        console.log (functionnew1)
    
function make_shirt12(label:string, size:string = `small`){
        return `${label} ${size}`
        }
        let functionnew12 = make_shirt12 (`i love typescript`)
        console.log (functionnew12)
        

        function make_shirt3(label:string, size:string ){
            return `${label} ${size}`
            }
            let functionnew3 = make_shirt3 (`i love typescript`,"any Size")
            console.log (functionnew3)
    
// Q38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.
function describe_city(city:String, Country:String= "Pakistan"){
    return `${city} ${Country}`
}   let city1 = describe_city ("karachi is in")
    let city2 = describe_city ("lahore is in")
    let city3 = describe_city ("islamabad is in")
    let city4 = describe_city (`dubai is in UAE`)
 console.log (city1)
 console.log (city2)
 console.log (city3)
 console.log (city4)


// q.39 City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string, country:string){
    return `${city}${country}`
}
let cityA = city_country ("karachi,", "pakistan")
let cityB = city_country ("Bangkok,", "Thailand")
let cityC = city_country ("Ontorio,", "Canada")
console.log (cityA)
console.log (cityB)
console.log (cityC)


// Q.40 Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.


function make_album(artistname:String,albumtitle:string){
    return `${artistname} ${albumtitle}`
}
let album1 = make_album("Jal,","Chupke Chupke")
let album2 = make_album("imran,","Jan-e-Jan")
let album3 = make_album("Parwah,","Khayal")
console.log (album1)
console.log (album2)
console.log (album3)



function make_album1(artistname:String,albumtitle:string, numerofTrack?:number){
    return {artistname, albumtitle, numerofTrack}
}
let album1a = make_album1("Jal,","Chupke Chupke", 25)
let album2b = make_album1("imran,","Jan-e-Jan", 30)
let album3c = make_album1("Parwah,","Khayal")
console.log (album1a)
console.log (album2b)
console.log (album3c)


// Q41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let magiciansName:string [] = ["Zaid","Rumaisa","Mohib","Ghufran","Zayan"]
function show_magician(){
    for (let a of magiciansName)
        {console.log (magiciansName)};
    }
show_magician()


// Q42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

let magiciansNames:string [] = ["Zaid","Rumaisa","Mohib","Ghufran","Zayan"]
function show_magicians(Greet:string){
    for (let a of magiciansNames)
        {console.log (Greet,a)};
    }
show_magicians("Hello, How are you Mr.")


// Q43. Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magiciansNames2:string [] = ["Zaid","Rumaisa","Mohib","Ghufran","Zayan"]
let magicianClon = [...magiciansNames2]
function show_magicians3(Greet:string){
    let withGreating = "";
    for (let a of magiciansNames2){
        withGreating += `${Greet} ${a}\n`
        } return withGreating;
    }
        let mygreating = show_magicians3("hello")
        let myArray = mygreating.split("\n")
        console.log (myArray)
        console.log (magiciansNames2)
    



// Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.

function Sandwiches(...items:string[]):void{
    console.log ("sandwich Order")
for (let i=0; i<items.length; i++){
    console.log (`- ${items[i]}`);
}
}
console.log ("enjoy your Sandwiches.")
Sandwiches("capsicum","Tomoto","chicken")
Sandwiches("chicken","onion","Tomoto")
Sandwiches("Olives","Egg","Cabage")


// Q45.Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


type Car = {
    manufacture:string;
    Model:string;
    [Key:string]:any;
}
function createCar(manufacture:string,Model:string,optional:Record<string,any>):Car {
return {
    manufacture,Model,...optional
}
}
const myCar:Car = createCar("toyoto","Corolla",{color:"black",year:"2024"})
const myCar2:Car = createCar("Honda","125",{color:"black",Speed:"fast"})
console.log (myCar)
console.log (myCar2)