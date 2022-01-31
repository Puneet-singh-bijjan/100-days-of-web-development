for(let i=0 ; i<10 ; i++){
    console.log(i);
}

let users = ['Puneet' , 'jassy' , 'ingale'];

for(const user of users){
    console.log(user);
}

let userData = {
    name : 'Puneet',
    age : 21,
    isAdmin : true
};

for(const objectName in userData){
    console.log(objectName);
    console.log(userData[objectName]);
}

let toExit = false;

while(!toExit){
    toExit = confirm("you want to Exit??");
}

console.log('done!!');