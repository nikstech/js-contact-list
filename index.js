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
        <li><i class="fa fa-plus" onClick="deletecont('${contacts[i].id}')"></i></li>
    </ul> 
        `   
    }   
document.getElementsByClassName("list")[0].innerHTML = result;  

if(contacts.length != 0){
 let myadd = document.getElementsByClassName("list");
    // myadd.setAttribute("style","padding:50px");
    myadd.classList.add("boxShadow");
 // aa.style.padding = "0px 4px 6px 3px #5555556e"
// aa.style.padding = "25px"
// console.log(aa);

}

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
 
        //  Adding/pushig value in array sp for this creating obj

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
