function formatGrade(grade){
    let formatedGrade = grade.toFixed(2);
    let description = '';


    if (grade < 3){
        formatedGrade = 2
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good';
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Exceellent';
    }

    console.log(`${description} (${formatedGrade})`)
}


formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)