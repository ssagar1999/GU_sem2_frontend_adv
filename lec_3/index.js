var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
  let modal2 = document.getElementById('modalBack');
  modal2.style.background = 'red';
  modal4.addEventListener('click', (e) =>{
    modal2.style.background = 'green';
  })
})