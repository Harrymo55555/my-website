'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu({ returnFocus = false } = {}) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '開啟導覽選單');
  document.body.classList.remove('menu-open');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) return closeMenu();
  navigation.classList.add('is-open');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', '關閉導覽選單');
  document.body.classList.add('menu-open');
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu({ returnFocus: true });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const desktopMedia = matchMedia('(min-width: 601px)');
desktopMedia.addEventListener('change', event => { if (event.matches) closeMenu(); });

const cooperationEmail = document.querySelector('#cooperation-email');
const contactHint = document.querySelector('#contact-hint');
const defaultBody = '您好，我想了解寶福諾合作。\n\n國家／地區：\n合作類型：\n公司／店舖名稱：\n現有渠道：\n聯絡方式：\n合作意向：\n';
cooperationEmail.href = `mailto:15626293906@163.com?subject=${encodeURIComponent('寶福諾｜全球渠道合作')}&body=${encodeURIComponent(defaultBody)}`;

document.querySelectorAll('[data-partner]').forEach(link => {
  link.addEventListener('click', () => {
    const partner = link.dataset.partner;
    const body = defaultBody.replace('合作類型：', `合作類型：${partner}`);
    cooperationEmail.href = `mailto:15626293906@163.com?subject=${encodeURIComponent(`寶福諾｜${partner}合作諮詢`)}&body=${encodeURIComponent(body)}`;
    cooperationEmail.firstChild.textContent = `發送${partner}合作電郵 `;
    contactHint.textContent = `已選擇${partner}合作，點擊上方按鈕開啟電郵`;
  });
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('15626293906@163.com');
    status.textContent = '已複製電郵地址';
  } catch {
    status.textContent = '請選取並複製：15626293906@163.com';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
