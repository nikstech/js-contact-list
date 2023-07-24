if(localStorage.getItem("contacts") == undefined){
    localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));

for(let i=0; i< contacts.length; i++){
    result += `
    <ul> 
        <li><i class="fa fa-user"></i></li>
        <li style="min-width:200px;text-transform: capitalize;"><span class="name">${contacts[i].name}</span><br><span class="number">${contacts[i].number}</span></li>
        <li><i class="fa fa-plus" onClick="deletecont('${contacts[i].id}')" style="cursor:pointer"></i></li>
    </ul> 
        `   
    }   
document.getElementsByClassName("list")[0].innerHTML = result;

function submit_contact(e){
        e.preventDefault();
        let fname = document.getElementById("name").value;
        let fnum = document.getElementById("number").value;
        
        // console.log(fname,fnum);

        // let a = localStorage.getItem("contacts");
        // console.log(typeof a);
        
        // fetching varicale  from  local storage
        let contacts = JSON.parse(localStorage.getItem("contacts"));
         console.log(typeof contacts);
 
        //  Adding/pushig value in array so for this creating obj

        let contactList ={
            id: Math.random().toString(36).substr(2,6),
            name : fname,
            number : fnum
        }

        contacts.unshift(contactList);

        localStorage.setItem("contacts",JSON.stringify(contacts));

        document.getElementById("name").value="";
        document.getElementById("number").value="";

        location.reload();
    }

    function deletecont(id){
        // alert(console.log(id));
        let contacts = JSON.parse(localStorage.getItem("contacts"));

        contacts = contacts.filter(function(contact){
            return contact.id != id;
        });

        localStorage.setItem("contacts",JSON.stringify(contacts))
        location.reload();
    }
    if(contacts.length != 0){
        var element = document.getElementsByClassName("list");
        // Iterate through the retrieved elements and add the necessary class names.
            for(var i = 0; i < element.length; i++)
            {
                element[i].classList.add('boxShadow');
                console.log(element[i].className);
            }
       }

       if(contacts.length > 2){
        var element = document.getElementsByClassName("list");
        // Iterate through the retrieved elements and add the necessary class names.
            for(var i = 0; i < element.length; i++)
            {
                element[i].setAttribute("style","overflow-y:scroll;padding-top:0");
                console.log(element[i].className);
            }
       }