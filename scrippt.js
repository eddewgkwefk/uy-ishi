
fetch("https://dummyjson.com/users?limit=100")
.then(javob=> javob.json())
.then(data=> chizish(data.users))


const select=document.getElementById("select")
const ota=document.getElementById("ota")
const input=document.getElementById("input")

function chizish(malumot){
    ota.innerHTML="";
    malumot.map(mah=>{
        const div=document.createElement("div")
        div.classList.add("card");
        div.innerHTML=`
    <img src="${mah.image}" alt="bdfgfdf">
    <h2>${mah.firstName}${mah.lastName}</h2>
    <h3>${mah.email}</h3>
    <h3>${mah.phone}</h3>
    <h3>${mah.gender}</h3>
    <p>${mah.address.address}</p>
        `
        ota.appendChild(div)

    })
}
input.addEventListener("input",()=>{
  const qidirish=input.value.toLowerCase();
  const filter=input.filter(m=> m.firstName.toLowerCase().includes(qidirish) || m.lastName.toLowerCase().includes(qidirish) || m.email.toLowerCase().includes(qidirish) || m.phone.toLowerCase().includes(qidirish)
  );
  chizish(filter);
});

select.addEventListener("change",()=>{
    const genderSelect=select.value;
    if(genderSelect=="All"){
        chizish(input)
    }else{
        const input=input.filter(m=> m.category==genderSelect);
    }
}); 

