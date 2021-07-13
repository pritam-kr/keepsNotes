const inputTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const btnAdd = document.querySelector('.new-note')


const inputContainer = document.querySelector('.input-container');

const btnTrach = document.querySelector('.box-container');

btnTrach.addEventListener('click', (e)=>{
   
    if(e.target.classList[1] === "fa-check"){
       e.target.parentElement.parentElement.parentElement.classList.add('done-task')
    }else if(e.target.classList[2]=== "btn-trash"){
        e.target.parentElement.parentElement.parentElement.parentElement.style.display = "none"
    }
})



btnAdd.addEventListener('click', (e) =>{
    e.preventDefault()
    // console.log(inputTitle.value)
    // console.log(textArea.value)
    // if(inputTitle.value = ""){
    //     inputTitle.value = "Untitle"
    // }
    notesList(inputTitle.value)

    const noteBox = document.createElement('div')
  
    noteBox.classList.add('notes-box')
    noteBox.innerHTML = `
    
    <div class="notes-box-header">
        <div class="notes-content">
        <h3>${inputTitle.value}</h3>
        </div>

        <div class="tools">
            <button class="btn-check"><i class="fas fa-check btn-check"></i></button>
            <button class="btn-trash"><i class="fas fa-trash btn-trash"></i></button>
        </div>
    </div>

        <div class="text-area">
            <p> ${textArea.value} </p>
        </div>

    `
    document.querySelector('.box-container').appendChild(noteBox)

    inputTitle.value = ''
    textArea.value = ''
   
})

// making list of notes

function notesList(e){
    const noteList = document.createElement('li');
    noteList.classList.add('list-li')
    noteList.innerHTML = e;
    document.querySelector('.note-ul').appendChild(noteList)
}

const myNoteList = document.querySelector('.notes-list');
myNoteList.addEventListener('click', (ele) =>{
    console.log(ele.target.classList[0])
    if(ele.target.classList[0] === "list-li"){
        document.querySelector('.box-container').style.display = "none";


    }
})

