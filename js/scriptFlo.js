

let circle = document.getElementById('circle');

circle.onclick {
    window.addEventListener('mousemove', position => {

        let center = {x: position.view.innerWidth / 2, y: position.view.innerHeight / 2};
        let limit = {x: 1, y: 1};
        
        let Xprojection = (center.x - position.x) / 500;
        let Yprojection = (center.y - position.y) / 500;
    
        if (Xprojection > limit.x) {
            Xprojection = limit.x;
        };
        if (Xprojection < (limit.x * -1)) {
            Xprojection = limit.x * -1;
        };
        if (Yprojection > limit.y) {
            Yprojection = limit.y;
        };
        if(Yprojection < (limit.y * -1)) {
            Yprojection = limit.y * -1;
        };
    
        let changeBoxShadow = `${0.7 * Xprojection}em ${0.7 * Yprojection}em 5px #F5A962, ${Xprojection}em ${Yprojection}em 10px  #125D98, ${1.3 * Xprojection}em ${1.3 * Yprojection}em 17px rgb(172, 172, 172);`;
        circle.style.boxShadow = changeBoxShadow;
    
    })
    
    
}
