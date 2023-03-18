module.export=Today;
function Today(){
    let today = new Date();
    let Hours=today.getHours();
    let Minutes=today.getMinutes();
    let Seconds=today.getSeconds();
    return {myHours:Hours,myMinutes:Minutes,mySeconds:Seconds};
}