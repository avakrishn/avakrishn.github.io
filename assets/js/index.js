App = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    lineA: "Hello! I'm ", /* The text */
    lineB: "Avanika,",
    lineC: "A ", 
    lineD: "user-focused ",
    lineE:  "and ",
    lineF: "mission-driven ",
    lineG: "Web & Mobile ", 
    lineH: "Full-Stack Developer. ",
    speed: 60, /* The speed/duration of the effect in milliseconds */
    typeWriter: function (){
        if (App.a < App.lineA.length) {
            document.getElementById("type-a").innerHTML += App.lineA.charAt(App.a);
            App.a++;
            setTimeout(App.typeWriter, App.speed);
        } else if(App.b < App.lineB.length){
            document.getElementById("type-b").innerHTML += App.lineB.charAt(App.b);
            App.b++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.c < App.lineC.length){
            document.getElementById("type-c").innerHTML += App.lineC.charAt(App.c);
            App.c++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.d < App.lineD.length){
            document.getElementById("type-d").innerHTML += App.lineD.charAt(App.d);
            App.d++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.e < App.lineE.length){
            document.getElementById("type-e").innerHTML += App.lineE.charAt(App.e);
            App.e++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.f < App.lineF.length){
            document.getElementById("type-f").innerHTML += App.lineF.charAt(App.f);
            App.f++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.g < App.lineG.length){
            document.getElementById("type-g").innerHTML += App.lineG.charAt(App.g);
            App.g++;
            setTimeout(App.typeWriter, App.speed);
        }else if(App.h < App.lineH.length){
            document.getElementById("type-h").innerHTML += App.lineH.charAt(App.h);
            App.h++;
            setTimeout(App.typeWriter, App.speed);
        }else{
            //only show the bounce/scroll down arrow if user has not scrolled down the page yet
            if(window.scrollY === 0){
                setTimeout(function(){
                    document.querySelector('.bounce').style.visibility = 'visible';
                    // document.querySelector('#navbar-index').classList.add("navbar-fade-in");
                    // document.querySelector('#navbar-index').style.visibility = "visible";
                }, 1000);
            }
            
            
        }

    },



};



window.onload = function() {
    setTimeout(App.typeWriter, 1100);
    // console.log(window.scrollY > 0);
    
    window.onscroll = function(){
        document.querySelector('.bounce').style.visibility = "hidden";
        document.querySelector('#navbar-index').style.visibility = "visible";
        document.querySelector('#navbar-index').classList.add("navbar-fade-in");
        // $('.scroll').hide();
        // $('#navbar-index').show();
    }; 


    

    $(".bounce").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-divider").offset().top - 55
            // document.getElementById('').scrollIntoView();
        }, 2000);
    });
    
    // window.onclick = function(){
    //     // App.speed = 30;
    //     document.querySelector('#navbar-index').style.visibility = "visible";
    //     document.querySelector('#navbar-index').classList.add("navbar-fade-in");
    // }

};

// if on page refresh/ load the page will be loaded at the top of the page
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }