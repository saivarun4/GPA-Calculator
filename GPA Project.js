/* Project to calculate Grade Point Average( GPA )
of a student in any semester */
nameOfStudent = prompt( 'Enter your name: ' );
semester = parseInt( prompt( 'Enter which semester: ' ) );
noOfSubjects = parseInt(prompt( 'Enter the number of subjects for this semester: ' ));
const sub = [  ];
const credit = [  ];
for( let i = 1; i <= noOfSubjects; i++ ){
    var marks = parseFloat(prompt( `Enter the marks obtained in Subject ${ i }: ` ));
    sub.push( marks );
    let credits;
    do{
        credits = parseInt( prompt( `Enter the credits for the Subject ${ i }: ` ) );
    }while( isNaN( credits ) || credits <= 0 )
    credit.push( credits );
}
let total = 0;
let sumOfCredits = 0;
for( let i = 0; i < sub.length; i++  ){
    let gpa;
    if(sub[ i ] > 90){
        gpa = 10;
    }else if( sub[ i ] > 80){
        gpa = 9;
    }else if( sub[ i ] > 70){
        gpa = 8;
    }else if( sub[ i ] > 60){
        gpa = 7;
    }else if( sub[ i ] > 50){
        gpa = 6;
    }else if( sub[ i ] > 40){
        gpa = 0; 
    }total += gpa * credit[ i ];
    sumOfCredits += credit[ i ];
}
const finalGPA = total/sumOfCredits;
console.log( '\n\n\n--------------------REPORT------------------');
console.log( `Congratulations ${ nameOfStudent } \u{1F389}\u{1F389}\u{1F389}` );
console.log( `GPA for the semester ${ semester  } = ${ finalGPA.toFixed( 2 ) }` );
console.log( '---------------------------------------------');