const display = (status) => {
    if(status === false){
        document.getElementById("englishCV").removeAttribute("class");
        document.getElementById("frenchCV").setAttribute("class","hidden");
    }else{
        document.getElementById("frenchCV").removeAttribute("class");
        document.getElementById("englishCV").setAttribute("class","hidden");
    }
}

