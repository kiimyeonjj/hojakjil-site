const btnEl = document.querySelector('.share-or-copy');
const sheetEl = document.getElementById('share-sheet');

const isSupportedClipboard = !!navigator?.clipboard;
const isSupportedClipboardCommand = document.queryCommandSupported?.('copy');

// 시트 열기/닫기
function openSheet(){
  sheetEl?.classList.remove('hidden');
  requestAnimationFrame(() => {
    sheetEl?.classList.add('show');
  });
}

function closeSheet(){
  sheetEl?.classList.remove('show');
  setTimeout(() => { sheetEl?.classList.add('hidden'); }, 300);
}


// 링크 복사
async function copyLink() {
  const url = window.shareMeta?.buildShareUrl('copy') || location.href;
  try {
    if (isSupportedClipboard) {
      await navigator.clipboard.writeText(url);
    } else if (isSupportedClipboardCommand) {
      const ta = document.createElement('textarea');
      ta.style.position='fixed'; ta.style.opacity='0'; ta.value = url;
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
    } else { throw new Error('no clipboard'); }
    alert('링크를 복사했어요!');
    window.gtag?.('event','share_click',{ method:'copy', content_id: window.shareMeta?.resultId, content_type:'result' });
  } catch {
    alert('복사가 안 되면 주소창의 URL을 직접 복사해주세요!');
  }
}

// 이미지로 공유 (Web Share API + 폴백: 이미지 저장 + 링크 복사)
async function shareImage() {
  const meta = window.shareMeta;
  if (!meta) return copyLink();

  const shareUrl = meta.buildShareUrl('image');

  try {
    const res = await fetch(meta.imageUrl);
    const blob = await res.blob();
    const file = new File([blob], `hojakjil_result.jpg`, { type: blob.type });

    if (navigator.canShare && navigator.canShare({ files:[file] })) {
      await navigator.share({
        url: shareUrl,   // ✅ 링크
        files:[file]     // ✅ 이미지 파일
      });
      window.gtag?.('event','share_success',{
        method:'image',
        content_id: meta.resultId,
        content_type:'result',
        ab_test_group: window.AB_TEST_GROUP
      });
    } else {
      // 폴백: 이미지 저장 + 링크 복사
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `hojakjil_${meta.resultId}.jpg`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
      await copyLink();
      alert('이미지를 저장하고 링크도 복사했어요! SNS에 사진 업로드 후 링크를 텍스트로 붙여 넣어주세요.');
    }
  } catch (e) {
    console.error(e);
    gtag('event', 'share_fail', { method: 'image', error: e.message });
    await copyLink();
  }
}

// 단일 버튼 눌렀을 때 → 옵션 시트 열기
btnEl?.addEventListener('click', openSheet);

// 옵션 시트 버튼들
sheetEl?.querySelector('.opt.image')?.addEventListener('click', () => { closeSheet(); shareImage(); });
sheetEl?.querySelector('.opt.copy')?.addEventListener('click', () => { closeSheet(); copyLink(); });
sheetEl?.querySelector('.opt.cancel')?.addEventListener('click', closeSheet);
sheetEl?.querySelector('.backdrop')?.addEventListener('click', closeSheet);
