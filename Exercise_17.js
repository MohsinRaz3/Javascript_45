let invitee = ["Elon", "Haris", "bohemia", "Daniel"]
for(i=0; i<invitee.length; i++){
    
    console.log(`${invitee[i]} We have found a bigger table`)

}

/* Add one new guest to the beginning of your array. */

invitee.splice(0,-1," Shahzoor")

console.log(`${invitee[i]} Added newly invited guest`)


// 17th exe starts here
//console.log("I'm inviting only two people");

//remove guest

for(i=0; i<invitee.length; i++){
    if (invitee.length >= 1)

    console.log(`${invitee[i]} Sorry we can't invite only two people for dinner.`)
}