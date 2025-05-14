export const questions = [
  {
    number: '01',
    question: '문을 열고 호작질 카페에 들어갔다. 사장님이 자리를 잠시 비우신 듯 하다.',
    choices: [
      { text: '사장님~!~!~! 힘차게 불러본다', value: 'e' },
      { text: '화장실 가셨나... 자리에 앉아 기다린다.', value: 'i' }
    ]
  },
  {
    number: '02',
    question: '우선 자리에 앉으려는데 나는 어느 자리에 앉을까?',
    choices: [
      { text: '늘 앉던 익숙한 자리', value: 's' },
      { text: '오늘은 그림을 그려볼까? 스케치북이 있는 큰 테이블 자리', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '울적한 기분이었던 나에게 사장님이 다가와 힘내시라며 에그타르트를 하나 주셨다.',
    choices: [
      { text: '헉 어떻게 아셨어요ㅜ 감사합니다😭', value: 'f' },
      { text: '아싸 개이득^^ 에그타르트를 맛있게 먹는다', value: 't' }
    ]
  },
  {
    number: '04',
    question: '친구에게 전화가 왔다. 오늘 뭐하냐고 묻는다면?',
    choices: [
      { text: '뭐.. 그냥 있어', value: 'p' },
      { text: 'OO하고 OO하고 OO할 예정인데?', value: 'j' }
    ]
  },
  {
    number: '05',
    question: '새로 시도한 에그타르트가 너무 맛있을 때',
    choices: [
      { text: '새로운 취향을 찾았다고 생각한다', value: 'n' },
      { text: '뭐 때문에 맛있는 건지 궁금해한다', value: 's' }
    ]
  },
  {
    number: '06',
    question: "영 기분이 별로인 날에는",
    choices: [
      { text: '친구나 만나러 나갈까', value: 'e' },
      { text: '방에 누워서 쉬어야지', value: 'i' }
    ]
  },
  {
    number: '07',
    question: '카페에서 깜짝 고백을 받으면?',
    choices: [
      { text: "'음.. 일단 생각해보겠습니다..'<br>하고 얼버무린다", value: 'f' },
      { text: '확실하게 거절한다', value: 't' }
    ]
  },
  {
    number: '08',
    question: '저녁 메뉴를 정할 때',
    choices: [
      { text: '하…오늘 저녁 뭐 먹지', value: 's' },
      { text: '안 먹고도 배부를 수 있는 약이 있을까', value: 'n' }
    ]
  },
  {
    number: '09',
    question: '길을 걷다 애매하게 아는 사람과 마주친다면',
    choices: [
      { text: "'혹시 oo분 아니세요?' 하며 반갑게 인사한다", value: 'e' },
      { text: '못 본 척 지나간다', value: 'i' }
    ]
  },
  {
    number: '10',
    question: '호작질 카페에서 스페셜 타르트 데이를 공지했다.',
    choices: [
      { text: '인스타 디엠으로 예약 후 가장 먼저 신메뉴를 맛본다', value: 'j' },
      { text: "마지막 날 급하게 가서 '사장님 아직 남아있나요?!!'(헉..헉...)", value: 'p' }
    ]
  }
]

export const results = [
  {//SP 그룹
    flavor: ['애플 시나몬'],
    result_img: '/images/result_visual_apple.png',
    detail_img: '/images/detail_apple.png',
  },

  {//SJ 그룹
    flavor: ['오리지널'],
    result_img: '/images/result_visual_original.png',
    detail_img: '/images/detail_original.png',
  },

  {//NF 그룹
    flavor: ['옥수수'],
    result_img: '/images/result_visual_corn.png',
    detail_img: '/images/detail_corn.png',
  },

  {//NT 그룹
    flavor: ['치즈'],
    result_img: '/images/result_visual_cheese.png',
    detail_img: '/images/detail_cheese.png',
  }
]
export const mbtis = {
  isfp: 0, esfp: 0, istp: 0, estp: 0,
  isfj: 1, esfj: 1, istj: 1, estj: 1,
  infp: 2, enfp: 2, infj: 2, enfj: 2,
  intp: 3, entp: 3, intj: 3, entj: 3
};

export const mbtiToCode = {
  isfp: '865ef7',
  esfp: '87fc99',
  istp: '3e4c02',
  estp: '5f21d1',
  isfj: '93c773',
  esfj: '9422f1',
  istj: '7d7fa1',
  estj: '9a9c7b',
  infp: '26fcd9',
  enfp: '11a9c3',
  infj: '58dc47',
  enfj: 'd94560',
  intp: 'cbfe94',
  entp: 'f55f26',
  intj: 'c32493',
  entj: 'a3c94e'
};

export const codeToMbti = {
  '865ef7': 'isfp',
  '87fc99': 'esfp',
  '3e4c02': 'istp',
  '5f21d1': 'estp',
  '93c773': 'isfj',
  '9422f1': 'esfj',
  '7d7fa1': 'istj',
  '9a9c7b': 'estj',
  '26fcd9': 'infp',
  '11a9c3': 'enfp',
  '58dc47': 'infj',
  'd94560': 'enfj',
  'cbfe94': 'intp',
  'f55f26': 'entp',
  'c32493': 'intj',
  'a3c94e': 'entj'
};