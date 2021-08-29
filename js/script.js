window.onload = function(){
    const effect = document.querySelector('#effect');
    const effectAbout = document.querySelector('#effect-about');
    const effectServices = document.querySelector('#effect-services');
    const effectSkills = document.querySelector('#skills');


    window.addEventListener('scroll', scrollEffect);

function scrollEffect(){
    if(window.scrollY>=500){
        effect.style.opacity = '0';
        effect.style.transform = 'translateY(-7em)';
        effect.style.transition = '0s ease-in-out';
    }
    else{
        effect.style.opacity = '1';
        effect.style.transform = 'translateY(0)';
        effect.style.transition = '1.5s ease-in-out';




    }
}
    window.addEventListener('scroll', scrollEffectAbout);

    function scrollEffectAbout(){
        if(window.scrollY>=600){
            effectAbout.style.opacity = '1';
            effectAbout.style.transform = 'translateX(0)';
            effectAbout.style.transition = '1.5s ease-in-out';
        }
        else{
            effectAbout.style.opacity = '0';
            effectAbout.style.transform = 'translateX(1em)';
    
    
    
        }
    }
    window.addEventListener('scroll', scrollEffectServices);

    function scrollEffectServices(){
        if(window.scrollY>=1300){
            effectServices.style.opacity = '1';
            effectServices.style.transform = 'translateY(0)';
            effectServices.style.transition = '1.3s ease-in-out';
        }
        else{
            effectServices.style.opacity = '0';
            effectServices.style.transform = 'translateY(9em)';
    
    
    
        }
    }
    function scrollEffect(){
        if(window.scrollY>=2000){
            effectSkills.style.opacity = '1';
            effectSkills.style.transform = 'translateY(0)';
            effectSkills.style.transition = '1.5s ease-in-out';
        }
        else{
            effectSkills.style.opacity = '0';
            effectSkills.style.transform = 'translateY(-7em)';
    
    
    
        }
    }
}
