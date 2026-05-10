let all = document.querySelectorAll('.animtion')
console.log(all);
let observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });

},{
    threshold:0.3
});
all.forEach(ele=>{
    observer.observe(ele)
})

let btn = document.getElementById('float')
addEventListener('scroll',function(){
    let sc = window.scrollY
    console.log(sc);
    if(sc >= 480){
        btn.style.display='block'
    }
    else{
        btn.style.display='none'
        
    }
    
})
btn.onclick=_=>{
    scroll({
        
        top:0,
        behavior:"smooth"

    })
}



