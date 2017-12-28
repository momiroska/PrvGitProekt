let ulTag = document.getElementById ("lista");
let person = {
name:"Anamarija",
lastName:"Momiroska",
age:16,
phones: ["071567323", "072654321", "077987654"]
};

for (let i=0; i<person.phones.length; i=i+1) {
    let newLi=document.createElement("li");
    newLi.innerHTML = person.phones[i];
    ulTag.appendChild(newLi);
}