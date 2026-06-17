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
    <a href="https://jowa-fan.pages.dev" target="_blank" rel="noopener" class="hd-sister">企業向け研修 ↗</a>
    <a href="/whitepaper" class="hd-dl">資料DL</a>
    <a href="/#contact" class="hd-cta">無料でお問い合わせ</a>
  </nav>
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
        <p class="ft-meta">運営：株式会社JOWA<br>contact@jowa.fun</p>
      </div>
      <div>
        <h4 class="ft-col-title">プログラム</h4>
        <ul class="ft-col-links">
          <li><a href="/programs/7habits.html">7つの習慣®ワークショップ</a></li>
          <li><a href="/programs/team-building.html">チームビルディング120分の奇跡</a></li>
          <li><a href="/programs/treasure.html">トレジャーグランプリ</a></li>
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
          <li><a href="https://jowa-fan.pages.dev" target="_blank" rel="noopener">JOWA（企業向け研修）</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ft-bottom">
    <div class="ft-bottom-inner">
      <p class="ft-copy">© 2026 JOWA. All rights reserved.</p>
      <nav class="ft-bottom-nav">
        <a href="/privacy">プライバシーポリシー</a>
        <a href="/terms">利用規約</a>
      </nav>
    </div>
  </div>
</footer>`;

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = HEADER;
  if (footerEl) footerEl.outerHTML = FOOTER;
})();
