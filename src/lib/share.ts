export async function shareLink(url: string, title: string): Promise<void> {
  if (typeof navigator === 'undefined') return;
  if (navigator.share) {
    try {
      await navigator.share({ url, title });
      return;
    } catch {
      // user cancelled — fall through to clipboard
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    // brief visual feedback via a temporary element
    const el = document.createElement('div');
    el.textContent = 'Link disalin ✓';
    el.style.cssText =
      'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1F2A37;color:#fff;padding:10px 20px;border-radius:999px;font-family:var(--font-display,sans-serif);font-size:14px;z-index:9999;pointer-events:none;';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  } catch {
    // clipboard blocked — do nothing
  }
}
