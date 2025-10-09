const college = {
    name : "NDC",
    section : {
        one : 10,
        two : 20,
        three : 50,
        result : {
            good : 5,
            verygood :6,

        }
    },
    teacher : 200,
    event : [10,20,50,222],
}

console.log(college.teacher);
console.log(college.section.one);
console.log(college.section.result.verygood);

college.event[0] = 800;
console.log(college.event);