let catUrl = `http://aws.random.cat//meow`;
let img = document.querySelector('.img');
img.addEventListener('click',async function(){
   try{
      const response = await fetch(catUrl)
      .then(img.src = 'scale_1200.png');
      const data = await response.json();
      img.src = data.file;
   }catch(e){
      console.log(`У тебя ERROR ${e}`);
   }
})

