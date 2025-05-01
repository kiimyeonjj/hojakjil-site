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
    result_explain_img: [
      '∙ 물 흘러가듯 유연하게 살자~~' ,
      '∙ 이것도 괜찮고, 저것도 딱히 나쁘진 않은데? 하다가 아무거나 골라요',
      '∙ 계획이나 장기적 목표를 세우고 실천하는 것은 어려워요(ㅜㅜ)',
      '∙ 단순하지만 현실적이에요. 겉보기만큼 대책이 없지는 않아요. (선택을 못할 뿐...)'
    ],
    detail_text: "즉흥적인 경험으로<br>현실을 인식하는 당신!<br>'애플시나몬타르트'의<br>새콤달콤한 사과의 식감과<br>시나몬의 향긋함을 느껴보세요<br>당신에게 새로운<br>미각적 자극이 될 거에요😊 ",
    smartstoreImg: '/images/smartstore_thumbnail.png',
    smartstoreUrl: 'https://smartstore.naver.com/hojakjil4445/products/6749631192'
  },
  {//SJ 그룹
    flavor: ['오리지널'],
    result_img: '/images/result_visual_original.png',
    result_explain: [
      '∙ 항상 같은 메뉴를 먹어도 아무렇지 않아요. 익숙한 게 좋아요',
      '∙ 일할 땐 일하고! 놀 땐 놀고! 뭐든 확실한 게 좋아요.',
      '∙ 전략적으로 계획을 세우고 실천하는 것을 좋아해요. 시간관리에 능통한 당신!',
      '∙ 이따금씩 의무와 책임감에 사로잡혀 스트레스를 받기도 해요😓'
    ],
    detail_text: "새로움보다는 안정적인 선택을 추구하는 당신!<br>호작질의 오리지널타르트는<br>포르투갈에서 배워온<br>정통 레시피 그대로 만들어요😊<br>남녀노소 호불호 없는<br>주문 수 베스트1위!<br>포르투갈 정통의 맛을 느껴보세요 ",
    smartstoreImg: '/images/smartstore_thumbnail.png',
    smartstoreUrl: 'https://smartstore.naver.com/hojakjil4445/products/6749631192'
  },
  {//NF 그룹
    flavor: ['옥수수'],
    result_img: '/images/result_visual_corn.png',
    result_explain: [
      '∙ 나만의 개성을 찾는 것을 중요하게 여기기 때문에 새롭고 과감한 것에도 잘 도전해요',
      '∙ 생각을 멈출 수가 없어요. (생각 안 하는 거 어떻게 하는 건데…)',
      '∙ 사소한 것에도 의미 부여를 잘해요',
      '∙ 사람들과의 관계가 중요해요. 남에게 피해 끼치는 게 제일 싫어요😤'
    ],
    detail_text: "기분에 따라 생각이<br>빠르게 변하는 당신!<br> 호작질의 옥수수타르트는<br>으깬 옥수수와 달콤한 에그필링이 더해져 달콤고소하고<br>위에는 옥수수 크럼블이<br>올라가 바삭함이 두배!!<br>기존 에그타르트와는 다른 통통 튀는 맛을 느낄 수 있어요😉",
    smartstoreImg: '/images/smartstore_thumbnail.png',
    smartstoreUrl: 'https://smartstore.naver.com/hojakjil4445/products/6749631192'

  },
  {//NT 그룹
    flavor: ['치즈'],
    result_img: '/images/result_visual_cheese.png',
    result_explain: [
      '∙ 어떤 행동이든 원인과 근거가 있어요. 논리적으로 맞고 틀리고가 가장 중요해요. (이건 뭐가 들어가서 맛있는 거지?)',
      '∙ 간결하고 직관적인 것을 선호해요',
      '∙ ‘왜?’라는 질문을 많이 해서 오해를 받을 때가 종종 있어요',
      '∙ 스스로에게 엄격해요. 부지런하게 자기 계발에 애쓰는 편이에요'
    ],
    detail_text: '객관적인 사실을 기반으로<br>사고하는 당신!<br>호작질의 치즈타르트는<br>끼리치즈(kiri)가 듬뿍 들어가서<br>더욱 부드럽고 진한 풍미가 느껴져요<br>아이들 간식은 물론,<br>와인 안주로 정말 좋아요🍷',
    smartstoreImg: '/images/smartstore_thumbnail.png',
    smartstoreUrl: 'https://smartstore.naver.com/hojakjil4445/products/6749631192'
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