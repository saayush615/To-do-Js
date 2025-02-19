let TextBox = document.getElementsByClassName('seachBox');
let Tasklist = document.querySelector('ul');

function Add(){
    if(TextBox.searchBox.value == ''){
        alert('You must write something!');
    }
    else{
        let input = document.createElement('li');
        input.innerHTML = TextBox.searchBox.value;
        Tasklist.append(input);

        let span1 = document.createElement('span');
        span1.innerHTML = '<img src="/images/icon.png" alt="icon">';
        span1.className = "span1";
        input.append(span1);

        let span2 = document.createElement('span');
        span2.innerHTML = '\u00d7';
        span2.className = "span2";
        input.append(span2);
    }

    TextBox.searchBox.value = '';
    saveData()
}

function clearAll(){
    Tasklist.innerHTML = '';
}

Tasklist.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'IMG'){
        TextBox.searchBox.value = e.target.parentElement.parentElement.firstChild.data;
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', Tasklist.innerHTML);
}
function showTask(){
    Tasklist.innerHTML = localStorage.getItem("data");
}
showTask()