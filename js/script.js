window.onload = function(){
    const effect = document.querySelector('#effect');
    const effectTitle = document.querySelector('#title-effect');

    const effectAbout = document.querySelector('#effect-about');
    const effectServices = document.querySelector('#services');
    const effectSkills = document.querySelector('#skills');


    window.addEventListener('scroll', scrollEffect);

    function scrollEffect(){
        if(window.scrollY>=300){
            effect.style.opacity = '0';
            effect.style.transform = 'translateX(-8em)';
            effect.style.transition = '1.7s ease-in-out';
        }
        else{
            effect.style.opacity = '1';
            effect.style.transform = 'translateX(0)';
        
        
}
    window.addEventListener('scroll', scrollEffectAbout);

    function scrollEffectAbout(){
        if(window.scrollY>=600){
            effectAbout.style.opacity = '1';
            effectAbout.style.transform = 'translateX(0)';
            effectAbout.style.transition = '1.4s ease-in-out';
        }
        else{
            effectAbout.style.opacity = '0';
            effectAbout.style.transform = 'translateX(1em)';
        }
    }
    window.addEventListener('scroll', scrollEffectServices);

    function scrollEffectServices(){
        if(window.scrollY>=1000){
            effectServices.style.opacity = '1';
            effectServices.style.transform = 'translateX(0)';
            effectServices.style.transition = '1.4s ease-in-out';
        }
        else{
            effectServices.style.opacity = '0';
            effectServices.style.transform = 'translateX(-6em)';
    
    
    
        }
    }
    window.addEventListener('scroll', scrollEffectSkills);

    function scrollEffectSkills(){
        if(window.scrollY>=1900){
            effectSkills.style.opacity = '1';
            effectSkills.style.transform = 'translateY(0)';
            effectSkills.style.transition = '1.4s ease-in-out';
        }
        else{
            effectSkills.style.opacity = '0';
            effectSkills.style.transform = 'translateY(-5em)';
    
    
    
        }
    }
}
}
