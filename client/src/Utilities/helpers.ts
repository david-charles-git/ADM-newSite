/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Functions
export const generateRandomNumber : (min? : number, max? : number) => number = (min = 0, max = 100) => {
    return (
        Math.floor( ( Math.random() * (max - min + 1) ) + min )
    )
}