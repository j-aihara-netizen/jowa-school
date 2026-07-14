/**
 * JOWA SCHOOL — 共通ヘッダー・フッター注入
 * ヘッダー/フッターを変更する場合はこのファイルのみ編集してください。
 */
(function () {
  const isProgramPage = window.location.pathname.startsWith('/programs/');

  const HEADER = `<header class="hd">
  <a href="/" class="hd-logo"><img src="/assets/images/jowa-logo.png" alt="JOWA"><span>SCHOOL</span></a>
  <nav class="hd-nav">
    <a href="/#programs"${isProgramPage ? ' class="active"' : ''}>プログラム</a>
    <a href="/#features">特徴</a>
    <a href="/#scenes">活用シーン</a>
    <a href="/#flow">ご利用の流れ</a>
    <a href="https://jowa.fun" target="_blank" rel="noopener" class="hd-sister">企業向け研修 ↗</a>
    <a href="/whitepaper" class="hd-dl" style="display:none">資料DL</a>
    <a href="/#contact" class="hd-cta">無料でお問い合わせ</a>
  </nav>
  <button class="hd-menu-btn" aria-label="メニューを開く">
    <span></span><span></span><span></span>
  </button>
</header>`;

  const FOOTER = `<footer class="ft">
  <div class="ft-cta">
    <div class="ft-cta-inner">
      <div>
        <p class="ft-cta-label">行程や人数が未定でもご相談ください</p>
        <p class="ft-cta-sub">目的・候補日・参加人数をお聞きし、実施しやすい形をご提案します。</p>
      </div>
      <div class="ft-cta-actions">
        <a href="/#contact" class="ft-cta-btn">無料相談する →</a>
        <a href="/#programs" class="ft-cta-btn-sub">プログラムを見る</a>
      </div>
    </div>
  </div>
  <div class="ft-main">
    <div class="ft-main-inner">
      <div>
        <div class="ft-logo"><img src="/assets/images/jowa-logo.png" alt="JOWA" class="ft-logo-img"><span>SCHOOL</span></div>
        <p class="ft-tagline">旅の中に、本物の学びを。</p>
        <p class="ft-meta">運営：株式会社JOWA</p>
      </div>
      <div>
        <h4 class="ft-col-title">プログラム</h4>
        <ul class="ft-col-links">
          <li><a href="/programs/7habits.html">7つの習慣®ワークショップ</a></li>
          <li><a href="/programs/team-building.html">チームビルディング120分の奇跡</a></li>
          <li><a href="/programs/treasure.html">トレジャーグランプリ</a></li>
          <li><a href="/programs/ikiru.html">生きるチカラ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="ft-col-title">サイト情報</h4>
        <ul class="ft-col-links">
          <li><a href="/#features">選ばれる理由</a></li>
          <li><a href="/#scenes">活用シーン</a></li>
          <li><a href="/#flow">ご利用の流れ</a></li>
          <li><a href="/#contact">お問い合わせ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="ft-col-title">関連サービス</h4>
        <ul class="ft-col-links">
          <li><a href="https://jowa.fun" target="_blank" rel="noopener">JOWA（企業向け研修）</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ft-bottom">
    <div class="ft-bottom-inner">
      <p class="ft-copy">© 2026 JOWA. All rights reserved.</p>
      <nav class="ft-bottom-nav"></nav>
    </div>
  </div>
</footer>`;

  const DRAWER = `<div class="drawer-overlay"></div>
<div class="drawer" role="dialog" aria-label="ナビゲーション">
  <div class="drawer-header">
    <div class="drawer-logo"><img src="/assets/images/jowa-logo.png" alt="JOWA"><span>SCHOOL</span></div>
    <button class="drawer-close" aria-label="閉じる">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="2" y1="2" x2="18" y2="18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="18" y1="2" x2="2" y2="18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
  <nav class="drawer-nav">
    <a href="/#programs">プログラム</a>
    <a href="/#features">特徴</a>
    <a href="/#scenes">活用シーン</a>
    <a href="/#flow">ご利用の流れ</a>
    <a href="https://jowa.fun" target="_blank" rel="noopener">企業向け研修 ↗</a>
  </nav>
  <div class="drawer-cta-wrap">
    <a href="/#contact" class="drawer-cta">無料でお問い合わせ</a>
  </div>
</div>`;

  const DRAWER_STYLE = `<style id="drawer-style">
/* ── ハンバーガーボタン（モバイルのみ表示） ── */
.hd-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.hd-menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}
@media (max-width: 768px) {
  .hd-menu-btn { display: flex; }
}

/* ── ドロワー オーバーレイ ── */
.drawer-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1998;
  opacity: 0;
  transition: opacity 0.25s;
}
.drawer-overlay.open {
  display: block;
  opacity: 1;
}

/* ── ドロワー本体 ── */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(80vw, 300px);
  height: 100dvh;
  background: var(--teal-dark, #0A5568);
  z-index: 1999;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
  overflow-y: auto;
}
.drawer.open {
  transform: translateX(0);
}

/* ── ドロワー ヘッダー ── */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.drawer-logo {
  display: flex;
  align-items: center;
  gap: 6px;
}
.drawer-logo img {
  height: 28px;
  width: auto;
  filter: brightness(0) invert(1);
}
.drawer-logo span {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.08em;
  opacity: 0.85;
}
.drawer-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.75;
  transition: opacity 0.15s;
}
.drawer-close:hover { opacity: 1; }

/* ── ドロワー ナビ ── */
.drawer-nav {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  flex: 1;
}
.drawer-nav a {
  display: block;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255,255,255,0.88);
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: background 0.15s, color 0.15s;
}
.drawer-nav a:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

/* ── ドロワー CTAボタン ── */
.drawer-cta-wrap {
  padding: 20px 24px 36px;
}
.drawer-cta {
  display: block;
  width: 100%;
  padding: 14px 20px;
  background: var(--coral, #F97316);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.15s;
}
.drawer-cta:hover { background: #ea6c0e; }
</style>`;

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = HEADER;
  if (footerEl) footerEl.outerHTML = FOOTER;

  // ドロワー注入
  document.head.insertAdjacentHTML('beforeend', DRAWER_STYLE);
  document.body.insertAdjacentHTML('beforeend', DRAWER);

  // ドロワー開閉ロジック
  var overlay = document.querySelector('.drawer-overlay');
  var drawer = document.querySelector('.drawer');
  var menuBtn = document.querySelector('.hd-menu-btn');
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // ドロワー内リンクをクリックしたら閉じる
  if (drawer) {
    drawer.querySelectorAll('.drawer-nav a, .drawer-cta').forEach(function(a) {
      a.addEventListener('click', closeDrawer);
    });
  }
})();
