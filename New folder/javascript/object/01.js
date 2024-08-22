let car = {
    comapany : "toyota", // key : value
    name : "corolla",
    model : "2021",
    colour : ["blue","red", "blue",'purple' ],// multiple values = []
    marks : {
        maths : 32 ,
        physics : 42 ,

    }
    
};

console.log(car.name , car.model  ,car.comapany)
console.log(car.colour[3])

let student = [{
    name :'mohaid' ,
    age : "17" ,
    registration_number : "a129w91" ,
    course : "phyton" ,
    fav_language : 'javascript',
    marks : {

         maths : 32 ,
        physics : 42 ,
        urdu : 22 ,
    }


},{
    name :'husnin' ,
    age : "22" ,
    registration_number : "a139w91" ,
    course : "phyton" ,
    fav_language : 'css',
    marks : {

         maths : 32 ,
        physics : 22 ,
        urdu : 29 ,
    }


},{
    name :'ali' ,
    age : "37" ,
    registration_number : "a129w971" ,
    course : "phyton" ,
    fav_language : 'c++',
    marks : {

         maths : 32 ,
        physics : 62 ,
        urdu: 33 ,
    }


},{
    name :'javed' ,
    age : "14" ,
    registration_number : "a169w91" ,
    course : "phyton" ,
    fav_language : 'html',
    marks : { maths : 32 ,
        physics : 42 ,
        urdu : 73,
    }


}]
console.log(student[0].name ,student[0].age , student[0].registration_number ,student[0].course,student[0].fav_language,student[0].marks);
console.log(student[1].name,student[1].age,student[1].registration_number,student[1].course,student[1].fav_language,student[1].marks);
console.log(student[2].name,student[2].age,student[2].registration_number,student[2].course,student[2].fav_language,student[2].marks);
console.log(student[3].name,student[3].age,student[3].registration_number,student[3].course,student[3].fav_language,student[3].marks);
console.log(student[0].fav_language , student[1].fav_language ,student[2].fav_language, student[3].fav_language,)
console.log(student[0].marks["maths"] , student[1].marks['urdu'] ,student[2].marks['physics'], student[3].marks['maths'],)


let cars = [{
    name : 'corolla',
    comapany : 'toyota',
    model : 'grande',
    colour  : ['red' , 'gery' , 'blue' , 'black'],
    year : '2022',
    registration_number : 'idhveu23'

},{
    name : 'm5',
    comapany : 'BMW',
    model : 'compition',
    colour  : ['midnight blue' , 'gery' , 'blue' , 'black'],
    year : '2025',
    registration_number : 'idhslu23'

},{
    name : 'contenentail',
    comapany : 'rolls royce',
    model : 'gt',
    colour  : [ 'custom'],
    year : '2021',
    registration_number : 'id3veu23'

},{
    name : '911',
    comapany : 'porsche',
    model : 'gtrs',
    colour  : ['white' , 'gery' , 'black'],
    year : '2023',
    registration_number : 'id4veu23'

}];

console.log(cars[0].name,cars[0].comapany,cars[0].model,cars[0].colour[1],cars[0].year,cars[0].registration_number);

console.log(cars[1].name,cars[1].comapany,cars[1].model,cars[1].colour[0],cars[1].year,cars[1].registration_number);

console.log(cars[2].name,cars[2].comapany,cars[2].model,cars[2].colour[0],cars[2].year,cars[2].registration_number);

console.log(cars[3].name,cars[3].comapany,cars[3].model,cars[3].colour[1],cars[3].year,cars[3].registration_number);



