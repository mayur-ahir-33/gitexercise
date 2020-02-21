if(!JSON.parse(localStorage.getItem('student login'))) {
    window.location.href="../login.html";
}

const user = JSON.parse(localStorage.getItem('student login'));
document.getElementById('profileBtn').innerHTML = '<i class="fa fa-user-o" aria-hidden="true"></i> ' + user.sessionName;

const logout = () => {
    localStorage.removeItem('student login');
    window.location.href = "../login.html";
} 


const displayCourse = () => {
    let tmpArr = JSON.parse(localStorage.getItem('courses'));
    document.getElementById('card-body-row').innerHTML='';
    if(tmpArr){
        // console.log(tmpArr);
        for (const course of tmpArr) {
            // console.log(course.assigned.includes(user.sessionEmail));
            if(course.assigned.includes(user.sessionEmail))
                createCard(course.id, course.name, course.link, course.img, course.assigned);
        }
    }
}

const createCard = (id, name, link, img) => {
    let newColumn = `<div class="col-lg-3 mb-3">
                        <div class="card" id="course-card-student">
                            <div class="card-body" id="course-card-body">
                            <a href="${link}">
                                <img src="${img}" id="course-card-img">
                            </div>
                            <div class="card-footer" id="course-name">
                                <i class="fa fa-book" aria-hidden="true"></i> ${name}
                            </div></a>
                        </div>
                    </div>`;

    let cardRow = document.getElementById('card-body-row'),
        currentInnerHtml = cardRow.innerHTML;
    
    cardRow.innerHTML = currentInnerHtml + newColumn;

}