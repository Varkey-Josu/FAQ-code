
const accordians = document.querySelectorAll('.accordian')
accordians.forEach(accordian =>{
  const answer=accordian.querySelector('.answer');
  accordian.addEventListener('onclick',()=>{
                             answer.classList.toggle('active');
                             })
})