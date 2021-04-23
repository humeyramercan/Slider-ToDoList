var models=[
    {
        name:'Bmw 418',
        image:'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Volva s60',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },

];

const cardImage=document.querySelector('.card-img-top');
const cardTitle=document.querySelector('.card-title');
const leftButton=document.querySelector('.fa-arrow-circle-left');
const rightButton=document.querySelector('.fa-arrow-circle-right');
const buttons=document.querySelectorAll('.arrow');
const cardLink=document.querySelector('.card-link');

var slideCount=models.length;
var delay=2000;
var index=0;
var interval;

autoSlide(delay);

function autoSlide(delay){

interval=setInterval(function(){
    if(index+1==slideCount){ 
        index=-1;
    }
    index+=1;
   setImage(index);
  
},delay);

}

function setImage(i){ 
    index=i;
    if(index<0){ 
        index=slideCount-1;
    }
    if(index>=slideCount){ 
        index=0
    }
    cardImage.setAttribute('src',models[index].image);
    cardTitle.textContent=models[index].name;
    cardLink.setAttribute('href',models[index].link);
}

buttons.forEach(function(item){ 
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
   
});
buttons.forEach(function(item){
    item.addEventListener('mouseleave',function(){
        autoSlide(delay);
    });
   
});

rightButton.addEventListener('click',function(){
    index++;
    setImage(index);
});
leftButton.addEventListener('click',function(){
    index--;
    setImage(index);
});

