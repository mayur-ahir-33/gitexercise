let email = document.getElementById('email'),
  password = document.getElementById('password');

let login = () => {
    //checking if user exists in local storage
    if(email.value === ''){
        // alert('email required')
        document.getElementById('loginEmail').innerHTML="E-mail Required";
    }
    else if (password.value === '') {
        // alert('password required')
        document.getElementById('loginEmail').innerHTML="";
        document.getElementById('loginPassword').innerHTML="Password Required";
    }
    else {
        if(JSON.parse(localStorage.getItem(email.value))) {
            //getting user info from local storage
            const user = JSON.parse(localStorage.getItem(email.value));
            //checking for password
            if(user.pass === password.value) {
                console.log("Logged in");
                //check if admin or student
                checkRole(user);
            }
            else {
                document.getElementById('loginEmail').innerHTML="";
                document.getElementById('loginPassword').innerHTML="Invalid Password";
            }
        }
        else{
            document.getElementById('loginEmail').innerHTML="Invalid Email";
        }
    }
}

const checkRole = (user) => {
    if(user.role === 'admin') {
        //Create session
        createSession(user);
        window.location.href="admin/index.html";
    }
    else if (user.role === 'student') {
        //Create session
        createSession(user);
        window.location.href ="user/index.html";
    }
} 

const redirect = () => {
    window.location.href ="signup.html";
}

const createSession = (user) => {
    const sessionObj = {
        'sessionName' :  user.name,
        'sessionEmail' : user.email
    }

    localStorage.setItem(`${user.role} login`, JSON.stringify(sessionObj));
}