
let array1=[];
let list = document.getElementById("list");
let username1=document.getElementById('username1');
let username2=document.getElementById('username2');
let place=document.getElementById('place');
let score=document.getElementById('score');
let bt1=document.getElementById('bt1');
function savelists(){
    
    //array1=array2.slice();
    localStorage.setItem("array1",JSON.stringify(array1));
}
function retr(){
    let rett=localStorage.getItem("array1");
    if(rett){
        array1=JSON.parse(rett);
        add();
    
    }
}


////bt2.onclick=function(score){
    


//}

function add(){
    list.innerHTML="";
    //console.log(score+5);
    var array2=array1.sort((a,b)=>b[3]-a[3]);
    for(let i=0;i<array1.length;i++){
        let a=document.createElement('div');
         a.className='cssdiv';

        var bt2=document.createElement('button');
        bt2.className="bt2css"
        bt2.innerHTML="+5";
        bt2.addEventListener('click',()=> {
            array1[i].scores=array1[i].scores+5;
            savelists();
            add();
        
    });
        var bt3=document.createElement('button');
        bt3.className="bt3css"
        bt3.innerHTML="-5";
        bt3.addEventListener('click',()=>{
            array1[i].scores=array1[i].scores-5;
            savelists();
            add();
    });
        var bt4=document.createElement('button');
        bt4.className="bt4css"
        bt4.innerHTML="Del";
        bt4.addEventListener('click',()=>{
            array1.splice(i,1);
            savelists();
            add();
    });
        let b=document.createElement('span');
        b.innerHTML= `${array1[i].first} ${array1[i].last}`;
        //let c=document.createElement('span');
        //c.innerHTML= array1[i].last;
        let d=document.createElement('span');
        d.innerHTML= array1[i].places;
        let e=document.createElement('span');
        e.innerHTML= array1[i].scores;
        a.append(b);
        //a.append(c);
        a.append(d);
        a.append(e);
        a.appendChild(bt4);
        a.appendChild(bt2);
        a.appendChild(bt3);
       
        list.appendChild(a);


    }
    
   //console.log(username);
}
function add1(us1,lna1,pl1,sc1){
    if(us1 && lna1 && pl1 && sc1){
    newscore={};
    newscore.first=us1;
    newscore.last=lna1;
    newscore.places=pl1;
    newscore.scores=sc1;
    array1.push(newscore);
    add();
    savelists();
    username1.value="";
    username2.value="";
    place.value="";
    score.value="";

    }
    


}
bt1.onclick=function(){
    let us1=username1.value;
    let lna1=username2.value;
    let sc1=parseInt(score.value);
    let pl1=place.value;
    add1(us1,lna1,pl1,sc1);

    
}
retr();
add();