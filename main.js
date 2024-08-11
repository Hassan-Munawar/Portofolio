var typed= new Typed(".text",{
    strings:["Frontend Developer" , "Video Editor" , "Thumbnail Designer"],
   typeSpeed: 100,
   backSpeed: 100,
  backDelay: 100,
  loop: true
});


// for Downloading resume;
document.getElementById('downloadButton').addEventListener('click', function() {
  var link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

