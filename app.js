let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let value1 = document.querySelector(".value1");
let value2 = document.querySelector(".value2");
let calc = document.querySelector("#calc");
let reset = document.querySelector("#reset");
let result = document.querySelector(".result");
console.log(input1,input2);
input1.addEventListener("input",()=>{
    console.log(input1.value);
    value1.innerHTML = `${input1.value} KG`

});
input2.addEventListener("input",()=>{
    console.log(input1.value);
    value2.innerHTML = `${input2.value} M`
})
calc.addEventListener("click",()=>{
    let weight = parseFloat(input1.value);
    let height = parseFloat(input2.value);
    let res = weight/(height*height);
    console.log(res);
    result.innerHTML = `Your BMI: ${res}`;
});
reset.addEventListener("click",()=>{
    value1.innerHTML = `${0} KG`;
    value2.innerHTML = `${0} M`;
    result.innerHTML = `Your BMI: ${0}`;
    input1.value = "";
    input2.value = "";
});