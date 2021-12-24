const Zise = (top,bot,body, btn) => {
    let zise = [];
    zise[0] = top.clientHeight;
    zise[1] = bot.clientHeight;
    zise[2] = body.clientHeight;
    zise[4] = body.clientHeight - (top.clientHeight + bot.clientHeight);
        
    if (body.clientWidth == 700) {
        zise[3] = body.clientWidth - (btn.clientWidth + btn.clientWidth + 50);
    }else if (body.clientWidth < 700) {
        if (!body.clientWidth == undefined) {
            zise[3] = (body.clientWidth / 2) + (100 - btn.clientWidth);
        }else{
            zise[3] = (body.clientWidth / 2) + (100 - btn.clientWidth)
        }
    }else if (body.clientWidth == undefined) {
        zise[3] = 0
    }

    return zise;
}
export function PokePage($pokeUp,$pokeDown,$body,$pokePage,$pokeBtn) {
    $body.addEventListener('transitionstart',e=>{
        let zise = Zise($pokeUp,$pokeDown,$body);
        $pokePage.setAttribute('style',`margin-top:${zise[0]}px;margin-bottom:${zise[1]}px;height:auto`);
    })
    window.addEventListener('load',e=>{
        let zise = Zise($pokeUp,$pokeDown,$body,$pokeBtn);
        $pokeBtn.setAttribute('style',`margin-left: ${zise[3]}px;`);
    })
    window.addEventListener('resize',e=>{
        let zise = Zise($pokeUp,$pokeDown,$body,$pokeBtn);
        $pokeBtn.setAttribute('style',`margin-left:${zise[3]}px;`);
    })
}
