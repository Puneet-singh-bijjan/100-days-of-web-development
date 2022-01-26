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
};

alert(calling(onlineCourse.target , 0));

function calling(array , arrayItem){
    return array[arrayItem];
}
