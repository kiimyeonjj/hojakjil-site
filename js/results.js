import { results, mbtis, codeToMbti } from './data.js';

// 쿼리스트링에서 해시 형태의 code 값 가져오기
const code = new URLSearchParams(location.search).get('code');
const mbti = codeToMbti[code];
const result = results[mbtis[mbti]];


// 결과를 표시할 DOM 요소들
const flavorEls = document.querySelectorAll('.flavor');
const result_imgEl = document.querySelector('.result_img');
const detail_imgEl = document.querySelector('.detail_img');


// 값이 정상적으로 매핑되었을 경우만 출력
if (result) {
  result_imgEl.src = result.result_img;
  detail_imgEl.src = result.detail_img;

  flavorEls.forEach((flavorEl, index) => {
    flavorEl.innerHTML = result.flavors[index];
  });
} else {
  // 유효하지 않은 code 값일 경우
  document.body.innerHTML = "<h2>유효하지 않은 결과입니다. 테스트를 다시 시도해주세요.</h2>";
}
