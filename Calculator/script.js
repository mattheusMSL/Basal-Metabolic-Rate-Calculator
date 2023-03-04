function 
basalCaculator(gender,weight,height,age){
    // const gender = document.getElementById("idg");
    // const weight = document.getElementById("idw");
    // const height = document.getElementById("idh");
    // const age = document.getElementById("ida");
    let calcular = 0;

    if(gender == "male" || gender == "Male"){

       calcular = 66 + (13,8 * weight) + (5 * height) - (6,8 * age);

    }else if(gender == "female" || gender == "Female"){

       calcular =  655 + (9,6 * weight) + (1,8 * height) - (4,7 * age);

    }

    return calcular.toFixed(2);

}

const gender = 'male';
const weight = 80;
const height = 175;
const age = 20;

const calcular = basalCaculator(gender,weight,height,age);
console.log(calcular);
