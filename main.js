// select all elements 
    let form = document.querySelector("form")
    let ul   = document.querySelector("ul")
    let input = document.querySelector("input")
    let box = document.querySelector('.container')
    let dltAllbtn = document.querySelector('#btn-all')


// fore save funcation 
    form.addEventListener("submit", saveList)
    function saveList(e){
    e.preventDefault()




// for create new li
    let LI = document.createElement("li")
    LI.className = "list-group-item"
    ul.appendChild(LI)
    LI.innerText = input.value
    form.reset()


//    for create dlt button
let dtlBtn= document.createElement("button")
dtlBtn.className="btn btn-danger float-end"
dtlBtn.innerText="X"
LI.appendChild(dtlBtn)

}


// let allBtn= document.createElement("button2")
// allBtn.className="btn btn-success float-end"
// allBtn.innerText="All Clear"
// ul.appendChild(allBtn)





// for delete function calling
ul.addEventListener("click", dtlList)


// for delete function declaration
function dtlList(e){

    if(e.target.className.includes("btn-danger"))
    {
        let li = e.target.parentElement
        ul.removeChild(li)
    }


}    

function dltAll(e){
    // if(e.target.className.includes("btn-all")){
    // let nextsibling = dltAllbtn.nextElementSibling;
    // box.removeChild(nextsibling)
    // }
    // location.reload()

    ul.remove()
}

dltAllbtn.addEventListener('click',dltAll)


// for delete function calling

// for edit function declaration









// // alert("Welcome to TODO List");






// assending to descending
// let array = [1,2,3,4,5,6,7,8,9,10]
// function dec(){
//   for(let i=10;i>=1;i--){
//     console.log(i)
//   }
// }
// dec();


//assending to descending
