let username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    role;

let studentArr = JSON.parse(localStorage.getItem('students'))?JSON.parse(localStorage.getItem('students')):[],
    adminArr = JSON.parse(localStorage.getItem('admins'))?JSON.parse(localStorage.getItem('admins')):[];

let signup = () => {

    if(username.value === ''){
        document.getElementById('signUpUsername').innerHTML = "Username Required";
    }
    else if (email.value === '') {
        document.getElementById('signUpUsername').innerHTML = "";
        document.getElementById('signUpEmail').innerHTML = "E-mail Required";
    }
    else if (password.value === '') {
        document.getElementById('signUpEmail').innerHTML = "";
        document.getElementById('signUpPassword').innerHTML = "Password Required";
    }
    else if (document.getElementById('cpassword').value === '') {
        document.getElementById('signUpPassword').innerHTML = "";
        document.getElementById('signUpConfirmPassword').innerHTML = "Confirm Password Required";
    }
    else if (password.value !== document.getElementById('cpassword').value){
        document.getElementById('signUpConfirmPassword').innerHTML = "Confirm Password doesn't match";
    }
    else {

        if(document.getElementById('rdbtnAdmin').checked) {
            role = document.getElementById('rdbtnAdmin').value;
            adminArr.push(email.value);
        }
        else if(document.getElementById('rdbtnStudent').checked){
            role = document.getElementById('rdbtnStudent').value;
            studentArr.push(email.value);
        }

        store();
        redirect();
    }
    
}

let store = () => {
    let userObj = {
        name: username.value,
        email: email.value,
        pass: password.value,
        role: role,
        courseID: []
    };

    localStorage.setItem(userObj.email, JSON.stringify(userObj));
    localStorage.setItem('admins', JSON.stringify(adminArr));
    localStorage.setItem('students', JSON.stringify(studentArr));
}

let redirect = () => {
    window.location.href="login.html";
}