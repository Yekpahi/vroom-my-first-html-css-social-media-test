
  let app = document.getElementById("comment");

  app.addEventListener('click', () =>  {
    var NameDiv = document.getElementById('commentClass');
    if (NameDiv.style.display === 'none') {
        NameDiv.style.display ='block';
    } else {
        NameDiv.style.display ='none';
    }
})
  