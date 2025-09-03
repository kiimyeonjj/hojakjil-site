import { results, mbtis, codeToMbti } from './data.js';

const code = new URLSearchParams(location.search).get('code');
const mbti = codeToMbti[code];
const result = results[mbtis[mbti]];

const flavorEls = document.querySelectorAll('.flavor');
const result_imgEl = document.querySelector('.result_img');
const detail_imgEl = document.querySelector('.detail_img');

if (result) {
  result_imgEl.src = result.result_img;
  detail_imgEl.src = result.detail_img;

  flavorEls.forEach((el, i) => { el.innerHTML = result.flavor[i] || result.flavor[0]; });

  // 공유용 메타(절대 URL 권장)
  const absImageUrl = new URL(result.result_img, location.origin).toString();

  window.shareMeta = {
    resultId: mbti, // 예: 'isfj'
    title: `나의 에그타르트: ${result.flavor[0]}`,
    imageUrl: absImageUrl,                         // ← 이게 shareImage()에서 쓰임
    buildShareUrl(source = 'copy') {
      const u = new URL(location.href);

      // UTM 기본값
      u.searchParams.set('utm_source', source);              // copy / image
      u.searchParams.set('utm_medium', 'share_btn_click');

      // ✅ 캠페인 버전 (여기만 v1 → v2로 교체하면 됨)
      u.searchParams.set('utm_campaign', 'promotion_cafe_v1');

      // A/B 그룹 구분
      if (window.AB_TEST_GROUP) {
        u.searchParams.set('ab_group', window.AB_TEST_GROUP);
      }

      return u.toString();
    }
  };
}
