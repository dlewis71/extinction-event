

const list = document.querySelectorAll('.gone')
list.forEach(li => {
    li.addEventListener('click', function(){
        li.style.textDecoration = "line-through"
         li.style.color = "red"
    })
})



const item = document.querySelectorAll('.poof')
item.forEach(li => {
    li.addEventListener('click', function(){
        li.style.opacity = "0.0"

    })
})



const pics = document.querySelectorAll('img')
pics.forEach(img => {
    img.addEventListener('click', function(){
        img.style.opacity = "0.0"
        
    })
})

    


document.querySelector("#destroy-all").addEventListener("click", function() {

 document.querySelectorAll("ol li").forEach(item => {
    item.style.textDecoration = line-through;
    
    document.querySelectorAll("ul li").forEack(item => {
        item.style.opacity = "0"
    })

document.querySelectorAll("div img").forEach(img => {
    img.style.width = "0"
})
 }) 
})











