let spreadSpan = () => {
    let heading = document.querySelector('.heading');
    let spread = heading.innerHTML;
    let arrayContent = [...spread];
    console.log(arrayContent);
    let content = '';
    for (let value of arrayContent) {
        content += `
        <span>${value}</span>
        `
    }
    heading.innerHTML = content

}
spreadSpan()