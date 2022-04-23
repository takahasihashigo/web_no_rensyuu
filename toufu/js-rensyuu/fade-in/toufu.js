/* 
メニュー(navbar)の文字の色を変更
この場合はgetElementByIdの方が楽だけどまあいいや
*/
function changeNavColor(){
    const kokodayo = document.getElementsByClassName('kokodayo');
    /* メニューの親要素(navbar-nav)を取得 */
    const navbarNav = document.getElementsByClassName('navbar-nav');
    /* viewportから白い背景までの距離(オフセット)を計算 */
    const offsetKokodayo = kokodayo[0].getBoundingClientRect().top;
    /* (TEST用)オフセットの確認 */
    console.log('kokodayo：', offsetKokodayo);

    /* viewportの上部まで来た時にメニューの文字の色を変更 */
    if (offsetKokodayo <= 0) {
        navbarNav[0].classList.add('kuro');
    }
    else {
        navbarNav[0].classList.remove('kuro');
    }
}

function fadeinTest() {
    const fadeIn = document.getElementsByClassName('fadein-area')
    const offsetFade01 = fadeIn[0].getBoundingClientRect().top;
    /* (TEST用)オフセットの確認 */
    console.log('fade-in：', offsetFade01)

    if (offsetFade01 <= 500) {
        fadeIn[0].classList.add('add-fadein');
    }
}

window.addEventListener('scroll', changeNavColor);
window.addEventListener('scroll', fadeinTest);