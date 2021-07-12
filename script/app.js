const inputTitle = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const btnAdd = document.querySelector('.new-note')

const inputContainer = document.querySelector('.input-container');

const btnTrach = document.querySelector('.box-container');

btnTrach.addEventListener('click', (e)=>{
    console.log(e.target.classList[2])
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
    noteList.innerHTML = e;
    document.querySelector('.note-ul').appendChild(noteList)
}