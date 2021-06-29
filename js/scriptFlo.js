
let circle = document.getElementById('circle')
let center = {
    x: (window.innerWidth / 2).toFixed(2),
    y: (window.innerHeight / 2).toFixed(2)
}
let limit = {x: 1, y: 1}

window.addEventListener('mousemove', (MouseEvent) => {

    let Xprojection = (center.x - MouseEvent.x) / 100;
    let Yprojection = (center.y - MouseEvent.y) / 100;

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
    let changeBoxShadow = (0.7 * Xprojection).toFixed(2) + "em " + (0.7 * Yprojection).toFixed(2) + "em 5px #F5A962, " + Xprojection.toFixed(2) + "em " + Yprojection.toFixed(2) + "em 10px #125D98, " + (1.3 * Xprojection).toFixed(2) + "em " + (1.3 * Yprojection).toFixed(2) + "em 17px rgb(172, 172, 172);";
    //let changeBoxShadow = `${(0.7 * Xprojection).toFixed(2)}px ${(0.7 * Yprojection).toFixed(2)}px 5px #F5A962, ${Xprojection.toFixed(2)}px ${Yprojection.toFixed(2)}px 10px #125D98, ${(1.3 * Xprojection).toFixed(2)}px ${(1.3 * Yprojection).toFixed(2)}px 17px rgb(172, 172, 172);`;
    //console.log(changeBoxShadow)

    //circle.style['boxShadow'] = changeBoxShadow;
    circle.style.boxShadow = changeBoxShadow;
})