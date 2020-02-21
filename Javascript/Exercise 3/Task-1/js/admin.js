if(!JSON.parse(localStorage.getItem('admin login'))) {
    window.location.href="../login.html";
}

if(!JSON.parse(localStorage.getItem('courses'))) 
    localStorage.setItem('courses', JSON.stringify([]));

const user = JSON.parse(localStorage.getItem('admin login'));
document.getElementById('profileBtn').innerHTML = '<i class="fa fa-user-o" aria-hidden="true"></i> ' + user.sessionName;

let courseArr = JSON.parse(localStorage.getItem('courses'))?JSON.parse(localStorage.getItem('courses')):[];
let code = 0;

const getCourse = () => {
    return JSON.parse(localStorage.getItem('courses'));    
}

const saveCourse = () => {
    localStorage.setItem('courses', JSON.stringify(courseArr));
}

const logout = () => {
    localStorage.removeItem('admin login');
    window.location.href = "../login.html";
} 
const validateAddCourse =() => {
    let courseName = document.getElementById('courseName'),
        courseLink = document.getElementById('courseLink'),
        courseImg = document.getElementById('courseImage').files[0];
    if(courseName.value === '') {
        document.getElementById('spanCourseName').innerHTML='Course Name Required';
    }
    else if(courseLink.value === '') {
        document.getElementById('spanCourseName').innerHTML='';
        document.getElementById('spanCourseLink').innerHTML='Course Link Required';
    }
    else if(courseImg === null) {
        document.getElementById('spanCourseLink').innerHTML='';
        document.getElementById('spanCourseImage').innerHTML='Course Image Required';
    }
    else {
        addCourse(courseName, courseLink, courseImg);
    }
}

const addCourse = (courseName, courseLink, courseImg) => {
    const reader = new FileReader();

    if (courseImg) {
        reader.readAsDataURL(courseImg);
    }

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        // console.log(reader.result);
        // cimg.src = reader.result;

        const courseArrLength = JSON.parse(localStorage.getItem('courses')).length;

        const courseObj = {
            id : courseArrLength>0?++getCourse()[courseArrLength-1].id:1,
            name : courseName.value,
            link: courseLink.value,
            img : reader.result,
            assigned: [] 
        };

        courseArr.push(courseObj);
        saveCourse();
        assignCourseToAdmin(courseObj.id, user.sessionEmail);
        displayCourse();
        alert('Course Added')
      }, false);

      
    
}

const displayCourse = () => {
    let tmpArr = JSON.parse(localStorage.getItem('courses'));
    const admin = JSON.parse(localStorage.getItem(user.sessionEmail));
    document.getElementById('card-body-row').innerHTML='';
    if(tmpArr){
        for (const course of tmpArr) {
            if(admin.courseID.includes(course.id))
                createCard(course.id, course.name, course.link, course.img, course.assigned);
        }
    }
}

const createCard = (id, name, link, img) => {
    let newColumn = `<div class="col-lg-3 mb-3">
                        <div class="card" id="course-card">
                            <div class="card-body" id="course-card-body">
                            <a href="${link}">
                                <img src="${img}" id="course-card-img">
                            </div>
                            <div class="card-footer" id="course-name">
                                <i class="fa fa-book" aria-hidden="true"></i> ${name}
                            </div></a>
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#assignModal" onclick="show(${id})">Assign Course</button>
                        </div>
                    </div>`;

    let cardRow = document.getElementById('card-body-row'),
        currentInnerHtml = cardRow.innerHTML;
    
    cardRow.innerHTML = currentInnerHtml + newColumn;

}

const show = (id) => {
    console.log(id);
    const studentArr = JSON.parse(localStorage.getItem('students'));
    const course = JSON.parse(localStorage.getItem('courses'));
    const tbody = document.getElementById('tableBody');

    const selectedCourse = course.filter((subject) => {
        return subject.id === id;
    });
    
          tbody.innerHTML='';
    // Console.log(studentArr);
    for (const student of studentArr) {
        const infoStudent = JSON.parse(localStorage.getItem(student));
        const row =`<tr>
                        <td>${infoStudent.name}</td>
                        <td>${infoStudent.email}</td>
                        <td><input type="checkbox" class="form-check-input" id="${infoStudent.email}" onchange="assignCourse(${id}, '${infoStudent.email}')" ${selectedCourse[0].assigned.includes(infoStudent.email)?"checked":""} ></td>
                    </tr>`
        const previousRow = tbody.innerHTML;
        tbody.innerHTML = previousRow + row;
     }
}

const assignCourse = (courseId, emailId) => {
    // console.log(courseId);
    const course = JSON.parse(localStorage.getItem('courses'));
    // console.log(course);
    const selectedCourse = course.filter((subject) => {
        return subject.id === courseId;
    });
    // console.log(selectedCourse);
    
    if(document.getElementById(emailId).checked) {
        selectedCourse[0].assigned.push(emailId);
        updateAssignedList(course, selectedCourse);
    }
    else {
        const index = selectedCourse[0].assigned.indexOf(emailId);
        selectedCourse[0].assigned.splice(index, 1);
        updateAssignedList(course, selectedCourse);
    }
    // console.log(selectedCourse);
}

const updateAssignedList = (course, selectedCourse) => {
    const indexCourse =  course.indexOf(selectedCourse[0]);
    course.splice(indexCourse, 1, selectedCourse[0]);
    // console.log(course);
    localStorage.setItem('courses', JSON.stringify(course));
}

const assignCourseToAdmin = (courseId, emailId) => {
    const admin = JSON.parse(localStorage.getItem(emailId));
    admin.courseID.push(courseId);
    localStorage.setItem(admin.email, JSON.stringify(admin));
    // console.log(admin);
}