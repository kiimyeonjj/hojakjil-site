import { questions, mbtiToCode } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // HTML 요소 선택
  const progressValueEl = document.querySelector('.progress .value');
  const numberEl = document.querySelector('.number');
  const questionEl = document.querySelector('.question');
  const choice1El = document.querySelector('.choice1');
  const choice2El = document.querySelector('.choice2');

  // 상태값
  let currentNumber = 0;
  let mbti = '';

  // 🎯 핵심: MBTI 4글자 추출 함수 (각 축별 마지막 선택 기준)
  function extractValidMbti(mbtiString) {
    const getLast = (group) => {
      for (let i = mbtiString.length - 1; i >= 0; i--) {
        if (group.includes(mbtiString[i])) return mbtiString[i];
      }
      return '';
    };

    const e_or_i = getLast(['e', 'i']);
    const s_or_n = getLast(['s', 'n']);
    const t_or_f = getLast(['t', 'f']);
    const j_or_p = getLast(['j', 'p']);

    return e_or_i + s_or_n + t_or_f + j_or_p;
  }

  // 질문 렌더링
  function renderQuestion() {
    const question = questions[currentNumber];
    
    // 데이터가 정상적으로 로드되는지 확인하는 부분
    console.log('Rendering Question:', question);  // 이 부분 추가하여 질문 정보 확인

    // 질문 번호와 텍스트 업데이트
    if(question) {
      questionEl.innerHTML = question.question;
      numberEl.innerHTML = question.number;
      choice1El.innerHTML = question.choices[0].text;
      choice2El.innerHTML = question.choices[1].text;
      progressValueEl.style.width = ((currentNumber + 1) / questions.length) * 100 + '%';
    }
  }

  // 다음 질문으로 이동
  function nextQuestion(choiceNumber) {
    const question = questions[currentNumber];
    const value = question.choices[choiceNumber].value;
    mbti += value;

    console.log(`[Q${currentNumber + 1}] 선택값: ${value} → 누적 MBTI: ${mbti}`);

    if (currentNumber === questions.length - 1) {
      showResultPage();
      return;
    }

    currentNumber++;
    renderQuestion();
  }

  // 결과 페이지로 이동
  function showResultPage() {
    const finalMbti = extractValidMbti(mbti); // 🎯 여기서 4자 추출
    const code = mbtiToCode[finalMbti];

    console.log('최종 MBTI:', finalMbti);
    console.log('변환된 코드:', code);

    // 이동
    location.href = '/results?code=' + code;
  }

  // 이벤트 연결
  choice1El.addEventListener('click', () => nextQuestion(0));
  choice2El.addEventListener('click', () => nextQuestion(1));

  // 초기 질문 표시
  renderQuestion();
});
