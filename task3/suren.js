let array = [];

const arrayAppend = () => {
    console.log('click triggers');
    let val = document.querySelector('.getinput').value;
    array.push(val);
    console.log("Array after: " + array);
    document.querySelector('.aftertext').innerHTML = array;

}

document.querySelector(".getvalue").addEventListener('click', arrayAppend);