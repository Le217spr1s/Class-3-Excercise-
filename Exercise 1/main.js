//Create a function
// Have that function take in an argument
//Print a statement that uses the variable along with some other text
function NeedaLoan (client = "someone", borrow = "to loan"){
    if (borrow.toLowerCase() === "bill") {
        console.log ("Are you buying a property?");
    } else{
        console.log ("Are you paying a bill?");
    }
    console.log(`${client} was able to ${borrow}.`);
}