const getFullName = (fname,lname) =>{
    return `${fname} ${lname}`
}


const actualfullName = getFullName('vishal','das');
const expectedFullName = "vishaldas";

if(actualfullName !== expectedFullName){
    throw new Error(`${actualfullName} is not equal to ${expectedFullName}`);
}