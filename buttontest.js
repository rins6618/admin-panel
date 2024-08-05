const buttonElements = document.querySelectorAll(".card button")


for (let element of buttonElements) {
    element.addEventListener('click', e => {
        console.log("button click");
    });
}