function gmailisvalid(gmail) { 
    return /^[^s@]+@[^\s@]+\.[^\s@]+$/.test(gmail) 
} 
 
function save() { 
    let fullname = document.getElementById('fullname').value; 
    let gmail = document.getElementById('gmail').value; 
    let phone = document.getElementById('phone').value; 
    let address = document.getElementById('address').value; 
    let password = document.getElementById('password').value; 
 
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
    if (_.isEmpty(password)) { 
        password = ''; 
        document.getElementById('password-error').innerHTML = '입력하시오'; 
 
    } else { 
        document.getElementById('password-error').innerHTML = ''; 
    } 
 
    if (fullname && gmail && phone && password && address) { 
        let professors = localStorage.getItem('professors') ? JSON.parse(localStorage.getItem('professors')) : []; 
 
        professors.push({ 
            fullname: fullname, 
            gmail: gmail, 
            phone: phone, 
            address: address, 
            password: password, 
        }); 
 
        localStorage.setItem('professors', JSON.stringify(professors)); 
        this.renderlistprofessors(); 
    } 
 
} 
 
function renderlistprofessors() { 
 
    let professors = localStorage.getItem('professors') ? JSON.parse(localStorage.getItem('professors')) : []; 
 
    if (professors.length === 0) { 
        document.getElementById('list-professors').style.display = 'none'; 
        return false; 
    } 
    document.getElementById('list-professors').style.display = 'none'; 
 
    let tablecontentpro = `<tr>
    <td width='9px'>ID</td>
    <td width='400px'>이름</td>
    <td width='400px'>이메일</td>
    <td width='400px'>전화번호</td>
    <td width='400px'>주소</td>
    <td width='400px'>비번</td>
    <td width='400px'>번경</td></tr>`;

    professors.forEach((professors, index) => { 
 
        let professorsid = index; 
        index++; 
 
        tablecontentpro +=  `<tr>
        <td> ${index}</td>
        <td>${professors.fullname}</td>
        <td>${professors.gmail}</td>
        <td>${professors.phone}</td>
        <td>${professors.address}</td>
        <td>${professors.password}</td>
        <td>
        <a href='#' onclick ='deleteprofessors(${professorsid})' >delete</a>
        </td>`
    }) 
 
    document.getElementById('grid-professors').innerHTML = tablecontentpro; 
    console.log(tablecontentpro);
 
} 
 
function deleteprofessors(id) { 
    let professors = localStorage.getItem('professors') ? JSON.parse(localStorage.getItem('professors')) : []; 
 
    professors.splice(id, 1); 
 
    localStorage.setItem('professors', JSON.stringify(professors)); 
    renderlistprofessors(); 
 
} 
