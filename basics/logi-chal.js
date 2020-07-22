let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here are all of vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here is some of our vegan dishes')
} else {
    console.log('Here is all of our dishes')
}