/* Start with your program from Exercise 14. Add a print statement at the
 end of your program stating the name of the guest who can’t make it.*/

let invitee = ["Elon", "Haris", "bohemia", "Daniel"]
for(i=0; i<invitee.length; i++){
   
    if( invitee[i]== "Daniel")
    
    console.log(`${invitee[i]} Was busy today and din't make it to dinner tonight`)

}

/* Modify your list, replacing the name of the guest who can’t make it 
with the name of the new person you are inviting. */

for(i=0; i<invitee.length; i++){
   
    if( invitee[i]== "Daniel")
    
    console.log(`${invitee[i]} Was busy today so Ahsan is invited for dinner tonight`)

}


/* Print a second set of invitation messages, one for each person who 
is still in your list. */

for(i=0; i<invitee.length; i++){
    
    console.log(`${invitee[i]} is invited for dinner tonight`)

}