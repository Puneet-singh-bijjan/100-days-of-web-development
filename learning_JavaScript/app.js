let name = "Puneet";
let age = 21;
let hobbies = ['Coding' , 'Cricket' , 'Listening Music'];
let languages = {
    english : 'yes',
    rating : 9,
    proficiency : 'expert'
};

let onlineCourse = {
    name:'Web Development by maximilian',
    price: 400,
    target: ['learning' , 'practicing' , 'what to do next'], 
    calling(array , arrayItem){
        return array[arrayItem];
    }
     
};

console.log(onlineCourse.calling(onlineCourse.target , 0));

function calling(array , arrayItem){
    return array[arrayItem];
};

let i=0,j=0;
for(i=0;i<=4;i++){
    for(j=0;j<=i;j++){
        console.log('*');
    }console.log('\n');
}

let x = 21;
if(x%2==0){
    console.log('Prime Number...')
}else{
    console.log('Not a Prime Number...')
}