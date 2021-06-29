
let circle = document.getElementById('circle')

window.addEventListener('mousemove', (position) => {

    let center = {x: position.view.innerWidth / 2, y: position.view.innerHeight / 2};
    let limit = {x: 1, y: .7};
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
    let changeBoxShadow = (0.7 * Xprojection).toFixed(2) + "px " + (0.7 * Yprojection).toFixed(2) + "px 5px #F5A962, " + Xprojection.toFixed(2) + "px " + Yprojection.toFixed(2) + "px 10px #125D98, " + (1.3 * Xprojection).toFixed(2) + "px " + (1.3 * Yprojection).toFixed(2) + "px 17px rgb(172, 172, 172);";
    //let changeBoxShadow = `${(0.7 * Xprojection).toFixed(2)}px ${(0.7 * Yprojection).toFixed(2)}px 5px #F5A962, ${Xprojection.toFixed(2)}px ${Yprojection.toFixed(2)}px 10px #125D98, ${(1.3 * Xprojection).toFixed(2)}px ${(1.3 * Yprojection).toFixed(2)}px 17px rgb(172, 172, 172);`;
    console.log(changeBoxShadow)
    //console.log(changeBoxShadow)
    //circle.style['boxShadow'] = changeBoxShadow;
    circle.style.boxShadow = changeBoxShadow;
    //console.log(changeBoxShadow)
})