import { results, mbtis, codeToMbti } from './data.js';

// 쿼리스트링에서 해시 형태의 code 값 가져오기
const code = new URLSearchParams(location.search).get('code');
const mbti = codeToMbti[code];
const result = results[mbtis[mbti]];


// 결과를 표시할 DOM 요소들
const detailtextEl = document.querySelector('.detail_text');
const characterEl = document.querySelector('.character');
const result_titleEl = document.querySelector('.result_title');
const boxEls = document.querySelectorAll('.box');
const flavorEls = document.querySelectorAll('.flavor');
const smartstoreEl = document.querySelector('.smartstore');
const smartstoreImgEl = document.querySelector('.smartstore img');
const onedayclassEl = document.querySelector('.onedayclass');
const onedayclassImgEl = document.querySelector('.onedayclass img');

// 값이 정상적으로 매핑되었을 경우만 출력
if (result) {
  detailtextEl.innerHTML = result.detail_text;
  characterEl.src = result.character;
  result_titleEl.src = result.result_title;

  boxEls.forEach((boxEl, index) => {
    boxEl.innerHTML = result.results[index];
  });

  flavorEls.forEach((flavorEl, index) => {
    flavorEl.innerHTML = result.flavors[index];
  });

  smartstoreEl.href = result.smartstoreUrl;
  smartstoreImgEl.src = result.smartstoreImg;

  onedayclassEl.href = result.onedayclassUrl;
  onedayclassImgEl.src = result.onedayclassImg;
} else {
  // 유효하지 않은 code 값일 경우
  document.body.innerHTML = "<h2>유효하지 않은 결과입니다. 테스트를 다시 시도해주세요.</h2>";
}
