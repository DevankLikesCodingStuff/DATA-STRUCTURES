var students =[];
function submit(){
    var name1 = document.getElementById("Student1").value;
    var name2 = document.getElementById("Student2").value;
    var name3 = document.getElementById("Student3").value;
    var name4 = document.getElementById("Student4").value;
    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);
    console.log(students);
    document.getElementById("divId").innerHTML= students;
    document.getElementById("sumbitbutton").style.display="none";
}
function sortfunction() {
    students.sort();
    console.log(students);
    document.getElementById("divId").innerHTML=students;
}
