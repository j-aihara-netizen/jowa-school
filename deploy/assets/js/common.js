/* JOWA SCHOOL — common.js */

// スムーススクロール（固定ヘッダー52pxオフセット）
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
    }
  });
});

// ── 資料ダウンロード モーダル ──────────────────────────────
(function () {
  const modalHTML = `
<div class="wp-modal-overlay" id="wp-modal-overlay" role="dialog" aria-modal="true" aria-label="資料ダウンロード">
  <div class="wp-modal">
    <button class="wp-modal-close" id="wp-modal-close" aria-label="閉じる">✕</button>

    <div id="wp-modal-form-area">
      <div class="wp-modal-eyebrow">FREE DOWNLOAD</div>
      <h2 class="wp-modal-title">JOWA SCHOOL プログラム紹介資料を<br>無料でダウンロード</h2>
      <ul class="wp-modal-list">
        <li>プログラム内容・実施条件・対応人数</li>
        <li>料金目安・スケジュール例</li>
        <li>学校・旅行会社様の導入事例</li>
        <li>よくある質問</li>
      </ul>

      <div class="hs-form-frame" data-region="na2" data-form-id="bcb5c232-00b7-400c-9e4b-4fdb1b8b9132" data-portal-id="246127011"></div>

      <p class="wp-modal-note">ご入力情報はプライバシーポリシーに基づき管理します。第三者への提供は行いません。</p>
    </div>

    <div id="wp-modal-thanks" style="display:none;flex-direction:column;align-items:center;text-align:center;gap:16px;padding:8px 0;">
      <div style="width:52px;height:52px;background:#CFFAFE;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--teal);">✓</div>
      <div style="font-family:var(--font-disp);font-size:18px;font-weight:800;color:var(--ink);">ありがとうございます</div>
      <p style="font-size:14px;color:var(--sub);line-height:1.7;">ご登録が完了しました。<br>以下のボタンから資料をダウンロードしてください。</p>
      <a href="/assets/docs/jowa-school-programs.pdf" id="wp-dl-btn" download style="display:inline-flex;align-items:center;gap:8px;background:var(--teal);color:var(--white);padding:13px 28px;border-radius:100px;font-size:14px;font-weight:700;text-decoration:none;transition:background .15s;">📄 資料をダウンロードする</a>
      <p class="wp-modal-note">ダウンロードが始まらない場合は右クリック→「名前を付けて保存」をお試しください。</p>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const overlay = document.getElementById('wp-modal-overlay');
  const closeBtn = document.getElementById('wp-modal-close');

  function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showThanks() {
    document.getElementById('wp-modal-form-area').style.display = 'none';
    document.getElementById('wp-modal-thanks').style.display = 'flex';
  }

  // 資料ダウンロードリンクをモーダルトリガーに変換
  document.querySelectorAll('a[href="/whitepaper"], a[href*="/whitepaper"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  // HubSpot フォーム送信検知（postMessage）
  window.addEventListener('message', function (event) {
    if (
      event.data &&
      event.data.type === 'hsFormCallback' &&
      event.data.eventName === 'onFormSubmitted'
    ) {
      showThanks();
    }
  });
})();
