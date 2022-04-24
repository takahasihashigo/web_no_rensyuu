function changeNavColor(){
    const kokodayo = document.getElementsByClassName('kokodayo');
    /* メニューの親要素(navbar-nav)を取得 */
    const navbarNav = document.getElementsByClassName('navbar-nav');
    /* viewportから白い背景までの距離(オフセット)を計算 */
    const offsetKokodayo = kokodayo[0].getBoundingClientRect().top;
    /* (TEST用)オフセットの確認 
    console.log('kokodayo：', offsetKokodayo);
    */

    /* viewportの上部まで来た時にメニューの文字の色を変更 */
    if (offsetKokodayo <= 0) {
        navbarNav[0].classList.add('kuro');
    }
    else {
        navbarNav[0].classList.remove('kuro');
    }
}

/* ここにフェードイン用の関数を書いてあげよう！ */


window.addEventListener('scroll', changeNavColor);