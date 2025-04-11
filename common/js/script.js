//アコーディオン
$(function () {
    //クリックで動く
    $('.nav-open,.explanation-open').click(function () {
        $(this).toggleClass('active');
        $(this).toggleClass('rotate-45'); // クリックでrotate-45クラスをトグル
        $(this).next('.Accordion').slideToggle();
    });
});

//insertAdjacentHTMLでfooter.htmlのfooterを呼び出す
const footer = document.querySelector('#footer');//IDfooterのdivを関数footerにいれている
//メソッドに1つめの引数を正しく渡す
const content = `<footer class="footerarea"> 
        <div class="footerbox aboutarea">
            <h3>About</h3>
            <p>
                制作物公開一覧
            </p>
            <div class="nav-open">株式会社ムービックでの実績</div>
            <ul class="Accordion">
                <li>
                    <p>・2025年4月26日　展示会15秒動画制作<br>公開場所：<a
                            href="https://ooh-portal.jp/property/%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3"
                            target="_blank">池袋サンシャインビジョン</a>
                    </p>
                </li>
                <li>
                    <p>・2025年3月10日　商品告知15秒動画制作<br>公開場所：<a href="https://x.com/movic_pr/status/1902540644557713794"
                            target="_blank">社内ツイッター反映</a>
                    </p>
                </li>
                <li>
                    <p>・2024年10月~2025年1月　東映オンラインメルマガ制作<br></a>
                    </p>
                </li>
            </ul>
            <div class="nav-open">株式会社AtoJでの実績</div>
            <ul class="Accordion">
                <li>
                    <p>・2025年8月　パラマウントケアサービス様採用ページ制作<br>公開場所：<a
                            href="https://www.paramount-careservice.jp/recruit/details/" target="_blank">採用ページ</a></p>
                </li>
                <li>
                    <p>・2025年2月　福寿園様オンラインサイト部分改修<br>公開場所：<a href="https://www.fukujuen.com/shop/c/c10/"
                            target="_blank">「目的別にさがす」ブロック改修</a>
                </li>
            </ul>
            <div class="nav-open">株式会社ナベカンでの実績</div>
            <ul class="Accordion">
                <li>
                    <p>・2025年　まるごと断熱スタジオ看板デザイン制作<br>公開サイト：<a href="https://nabekan.com/marudan-studio"
                            　target="_blank">まるごと断熱スタジオ</a></p>
                </li>
                <li>
                    <p>・2024年　LPザイン・コーディング<br>公開サイト：<a href="web.html" 　target="_blank">ナベカンLP制作</a></p>
                </li>
                <li>
                    <p>・2025年　社内メルマガ制作<br>公開サイト：<a href="#" 　target="_blank">メルマガ制作</a></p>
                </li>
                <li>
                    <p>・2024年　駅看板・店内看板作成：<a href="#" 　target="_blank">駅看板・店内看板</a></p>
                </li>
            </ul>
        </div>
        <div class="footerbox Menuarea">
            <h3>Menu</h3>
            <ul class="menulist">
                <li><a href="web.html">Web</a></li>
                <li><a href="">Movie</a></li>
                <li><a href="">Dtp</a></li>
                <li><a href="">Q&A</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
        <div class="footerbox twitterarea">
            <h3>SNS</h3>
            <ul class="snsarea">
                <li><a href=""><img src="common/img/Instagram_Glyph_Gradient.png" alt="" width="50px"></a></li>
                <li><a href=""><img src="common/img/LINE_APP_iOS.png" alt="" width="50px"></a></li>
                <li><a href=""><img src="common/img/logo-black.png" alt="" width="50px"></a></li>
            </ul>
        </div>
    </footer>`;
footer.insertAdjacentHTML('afterbegin', content)// insertAdjacentHTML メソッドに2つめの引数を正しく渡す

//insertAdjacentHTMLでheader.htmlのheaderを呼び出す
const header = document.querySelector('#header');//IDheaderのdivを関数headerにいれている
//メソッドに1つめの引数を正しく渡す
const headercontent = `<header>
        <a href="index.html">
            <h1><img src="common/img/portfolio.svg" style="max-width: 145px; height: auto;">
        </a>
        </h1>
        <nav>
            <ul class="navlist">
                <li><a href="web.html">
                        Web</a>
                </li>
                <li><a href="#">
                        Movie</a>
                </li>
                <li><a href="#">
                        Dtp</a>
                </li>
                <li><a href="#">
                        Q&A</a>
                </li>
                <li><a href="">
                        CONTACT</a>
                </li>
            </ul>
        </nav>
    </header>`;
header.insertAdjacentHTML('afterbegin', headercontent)// insertAdjacentHTML メソッドに2つめの引数を正しく渡す
