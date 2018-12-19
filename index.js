const button = document.getElementById('Titanic');

button.addEventListener('click', function() {
  populateTitanic();
});


function populateTitanic() {
  const title = movies.Titanic['title'];
  const director = movies['Titanic'].director;
  const genre = movies['Titanic'].genre;
  
  document.getElementById('title').innerText = title;
  document.getElementById('director').innerText = director;
  document.getElementById('genre').innerText = genre;
}




















  // const title = movies['Titanic'].title;
  // const director = movies['Titanic'].director;
  // const genre = movies['Titanic'].genre;
  
  // document.getElementById('title').innerText = title;
  // document.getElementById('director').innerText = director;
  // document.getElementById('genre').innerText = genre;
  
