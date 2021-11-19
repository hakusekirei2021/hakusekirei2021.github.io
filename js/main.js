'use strict';

const results = ['ExcelLent!','Good!','Not So Bad','Bad']


{
const squ1= document.getElementById('squ1');
squ1.addEventListener('click',()=>{
  const n = Math.floor(Math.random()* results.length);
  squ1.textContent = results[n];
});
}



{
  const squ1= document.getElementById('squ2');
  squ1.addEventListener('click',()=>{
    const n = Math.floor(Math.random()* results.length);
    squ1.textContent = results[n];
  });
  }

  
{
  const squ1= document.getElementById('squ3');
  squ1.addEventListener('click',()=>{
    const n = Math.floor(Math.random()* results.length);
    squ1.textContent = results[n];
  });
  }
  

