function gmailisvalid(gmail) {
    return /^[^s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)
}

function save() {
    let fullname = document.getElementById('fullname').value;
    let gmail = document.getElementById('gmail').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('famale').checked) {
        gender = document.getElementById('famale').value;
    }

    if (_.isEmpty(fullname)) {
        fullname = '';
        document.getElementById('fullname-error').innerHTML = '입력하시오';

    } else if (fullname.length <= 2) {
        fullname = '';
        document.getElementById('fullname-error').innerHTML = '이름은 2자 이상이어야 합니다.';

    } else if (fullname.length > 15) {
        fullname = '';
        document.getElementById('fullname-error').innerHTML = '이름은 15자 이상 안됩니다.';
    } else {
        document.getElementById('fullname-error').innerHTML = '';

    }
    if (_.isEmpty(gmail)) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = '이메일 입력하시오';

    } else if (!gmailisvalid(gmail)) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = '이메일 아닙니다.다시입력히시오.';
    } else {
        document.getElementById('gmail-error').innerHTML = '';
    }
    if (_.isEmpty(phone)) {
        phone = '';
        document.getElementById('phone-error').innerHTML = '전화번호 입력하시오';
    } else if (phone.length <= 10) {
        phone = '';
        document.getElementById('phone-error').innerHTML = '전화번호 아닙니다.다시입력히시오.';
    } else {
        document.getElementById('phone-error').innerHTML = '';

    }
    if (_.isEmpty(address)) {
        address = '';
        document.getElementById('address-error').innerHTML = '주소 입력하시오';

    } else {
        document.getElementById('address-error').innerHTML = '';
    }
    if (_.isEmpty(gender)) {
        gender = '';
        document.getElementById('gender-error').innerHTML = '성별 선택하시오';
    } else {
        document.getElementById('gender-error').innerHTML = '';
    }

    if (fullname && gmail && phone && address && gender) {

        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

        students.push({
            fullname: fullname,
            phone: phone,
            address: address,
            gender: gender,
            gmail: gmail,
        });
        localStorage.setItem('students', JSON.stringify(students));

        this.renderliststudent();
    }
}

function renderliststudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    if (students.length === 0) {
        document.getElementById('list-student').style.display = 'none';
        return false;

    }
    document.getElementById('list-student').style.display = 'block';

    let tablecontent = `<tr>
        <td width='9px'>ID</td>
        <td width='400px'>이름</td>
        <td width='400px'>이메일</td>
        <td width='400px'>전화번호</td>
        <td width='400px'>주소</td>
        <td width='400px'>성별</td>
        <td width='400px'>번경</td></tr>`;

    students.forEach((students, index) => {

        let studentid = index;
        let genderlabel = parseInt(students.gender) === 1 ? '남' : '여';
        index++;

        tablecontent += `<tr>
            <td> ${index}</td>
            <td>${students.fullname}</td>
            <td>${students.gmail}</td>
            <td>${students.phone}</td>
            <td>${students.address}</td>
            <td>${genderlabel}</td>
            <td>
            <a href='#' onclick ='deletestudent(${studentid})' >delete</a>
            </td>
    
    
        </tr>`;

    })
    document.getElementById('grid-students').innerHTML = tablecontent;
}

function deletestudent(id) {

    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    students.splice(id, 1);

    localStorage.setItem('students', JSON.stringify(students));
    renderliststudent();
    console.log(students);

}

function buttonsearch() {

    let search = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let inputsearch = document.getElementById('inputsearch').value;
    
    let filter = search.filter((item, index) => {
        return item && item.phone === inputsearch;
        
       
    });
    
    let tablecontent_search = `<tr>
    <td width='9px'>NO</td>
    <td>이름</td>
    <td>이메일</td>
    <td>전화번호</td>
    <td>주소</td>
    <td>성별</td></tr>`;

    filter.forEach((filter, index) => {
        index++;
        let genderlabel = parseInt(filter.gender) === 1 ? '남' : '여';

        tablecontent_search += `<tr>
    
        <td> ${index}</td>
        <td>${filter.fullname}</td>
        <td>${filter.gmail}</td>
        <td>${filter.phone}</td>
        <td>${filter.address}</td>
        <td>${genderlabel}</td>
        <td>
        </td>

    </tr>`;

    })
    document.getElementById('search-students').innerHTML = tablecontent_search;



}
