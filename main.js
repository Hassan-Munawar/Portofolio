var typed= new Typed(".text",{
    strings:["Frontend Developer" ,  "React JS" , "Responsive Websites"],
   typeSpeed: 100,
   backSpeed: 100,
  backDelay: 100,
  loop: true
});


// for Downloading resume;
document.getElementById('downloadButton').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = 'Resume.pdf';
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

