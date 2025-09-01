// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); }
  });
},{threshold:0.2});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
