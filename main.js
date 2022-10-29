

const guestName = prompt("What is your name?")

let message
if (guestName === "Nicholas") {
    message = "You aren't invited! Begone foul creature!"
} else {
    message = "Love the costume, come on in!"
}

console.log(message)

// ========= Arrays ===========

// generate a guest list 

const guestList = ["Nicholas", "Martin"]

// add a person to the guest list 
const newName = "Corinne"
guestList.push(newName)
console.log(guestList)

// remove a person from the guest list 

guestList.pop()
console.log(guestList)

// check if our VIP is in the guest list 

const VIPCheck = guestList.includes("Martin")
console.log(VIPCheck)

// ========== Functions =========== 

const nameString = "Nicholas"

const halloweenGreeting = (nameString) => {
    return `Welcome to the Halloween party, ${nameString}!`
}

console.log(halloweenGreeting("Evan"))
console.log(halloweenGreeting("Casi"))
console.log(halloweenGreeting("Alex"))


// if the attendee's name is Nicholas, shoo him away

const halloweenGreeting = (nameString) => {
    let message = ""
    if (nameString === "Nicholas"){
        message = "Begone foul creature!"
    } else {
        message = `Welcome to the Halloween party, ${nameString}!`
    }

    return message
}

console.log(halloweenGreeting("Nicholas"))
console.log(halloweenGreeting("Nader"))
