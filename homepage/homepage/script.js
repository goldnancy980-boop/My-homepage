const text ="Greetings,Welcome To My Homepage";
let i = 0;


    function typewriter(){
        if (i < text.length){
            document.getElementById("welcome").innerHTML+= text.charAt(i);
            i++;
             setTimeout(typewriter,100);
             }else{
              document.body.style.backgroundImage="url('download.jpg')";
             }
        }

    window.onload = typewriter;


