
function getAge() {
    let age =  prompt("please enter your age");
    age = Number(age);
    if (age > 0) {
        if (age >= 18) {
            message = " You can register!";
        } else {
            message = "sorry you can't register because your name is so long!";
        }
        document.getElementById("sentence").innerText = message;
    }
}