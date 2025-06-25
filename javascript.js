const btn = document.querySelector("form");
const form = document.querySelectorAll("form input");
btn.addEventListener("submit", (event) =>{
    event.preventDefault()
    const doc = [];
    
    form.forEach((elements) => {
        doc.push(elements.value);
    })

    form.forEach((elements)=>{
        const type = elements.type.toLowerCase();
        if(type === "text" || type === "password" || type === "email" || type === "number"){
        elements.value ="";
}})

    let area = document.querySelector("form textarea");
    doc.push(area.value);
    area.value = ""

    console.log(doc)
})