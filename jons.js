const text =[

    {
        "name":"israeel",
        "lname":"khankhel",
        "dep":"bcs",
        "id_no":"23323",
        "phone":"0780031543",
        "email":"israeel.abid@gmail.com",
        "photo":"israeel iamge"
        },
        
{
    "name":"israeel",
    "lname":"khankhel",
    "dep":"bcs",
    "id_no":"23323",
    "phone":"0780031543",
    "email":"israeel.abid@gmail.com",
    "photo":"israeel iamge"
    }



]

// console.log(text[0])


var placeholder = document.querySelector('#data');

var out = '';
const arl = text.length;


var i = 0;


while(i<arl){


out += `
<tr>
<td>${text[i].name}</td>
<td>${text[i].lname}</td>
<td>${text[i].dep}</td>
<td>${text[i].id_no}</td>
<td>${text[i].phone}</td>
<td>${text[i].email}</td>
<td>${text[i].photo}</td>
</tr>

 `
// document.write(text[i].name +"<br>"+ text[i].lname)
i++

// placeholder.innerHTML=out;
console.log(out)


}