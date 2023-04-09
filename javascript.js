function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

function myFunction() {
  alert("Successfully!");
}

let id="no";
//localStorage.clear();
selectData();
function manageData(event){
    let name= JSON.stringify({
        fname : document.getElementById('fname').value,
        lname : document.getElementById('lname').value,
        email : document.getElementById('email').value,
        passw : document.getElementById('password').value,
        country : document.getElementById('country').value,
        course : document.getElementById('course').value
    })
        if(id=='no'){
            let arr=getCrudData();
            if(arr==null){
                let data=[name];
                console.log(data)
                setCrudData(data);
            }else{
                arr.push(name);
                setCrudData(arr);
            }
        }else{
            let arr=getCrudData();
            arr[id]=name;
            setCrudData(arr);
        }
        alert('Successfully submit');
        // window.location.href="Thanks.html";
        selectData();
        
    }


function selectData(){
    let arr=getCrudData();
    if(arr!=null){
        let html='';
        let sno=1;
        for(let k in arr){
            let newData = JSON.parse(arr[k])
            html=html+`<tr><td>${sno}</td><td>${newData['fname']}</td><td>${newData['lname']}</td><td>${newData['email']}</td><td>${newData['passw']}</td><td>${newData['country']}</td><td>${newData['course']}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML=html;
        
    }
}

function editData(array){
    id = array
    // console.log(id)
    let arr=getCrudData();
    // console.log(arr)
    let n =     arr.splice(array, 1, arr)
    // console.log(n)
    n.forEach(element => {
        document.getElementById('fname').value=JSON.parse(element)['fname']
        document.getElementById('lname').value=JSON.parse(element)['lname']
        document.getElementById('email').value=JSON.parse(element)['email']
        document.getElementById('password').value=JSON.parse(element)['passw']
        document.getElementById('country').value=JSON.parse(element)['country']
        document.getElementById('course').value=JSON.parse(element)['course']
    }
    );           
}

function deleteData(rid){
    let arr=getCrudData();
    arr.splice(rid,1);
    setCrudData(arr);
    selectData();
}

function getCrudData(){
    let arr=JSON.parse(localStorage.getItem('crud'));
    return arr;
}

function setCrudData(arr){
    localStorage.setItem('crud',JSON.stringify(arr));
}
// function editable(rid){
//     let arr = getCrudData()
//     for (let i in arr){
//         JSON.parse(arr[i])
//     }
//     return array
// }
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    // e.preventDefault()
});
