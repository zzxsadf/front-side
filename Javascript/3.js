let stdinfo= [
    { name: '小严', age: 21, score: 98 },
    { name: '小赵', age: 21, score: 92 },
    { name: '小章', age: 20, score: 100 },
    { name: '小张', age: 20, score: 98 },
    { name: '小邢', age: 21, score: 96 }
];

function AverageScore(stdinfo) {
    let total= 0;
    for (let student of stdinfo) {
        total+= student.score;
    }
    return total / stdinfo.length;
}


function findhighestscorestudent(stdinfo) {
    let highestscorestudent = stdinfo[0];
    for (let student of stdinfo) {
        if (student.score > highestscorestudent.score) {
            highestscorestudent = student;
        }
    }
    return highestscorestudent;
}


function sort(stdinfo) {
    return stdinfo.sort((a, b) => b.score - a.score);
}
console.log('所有学生的平均成绩为：' + AverageScore(stdinfo));
console.log('成绩最高的学生信息：');
console.log( findhighestscorestudent(stdinfo));
console.log('按成绩从高到低排序后的学生信息：');
console.log(sort(stdinfo));
