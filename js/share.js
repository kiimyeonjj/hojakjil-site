const btnEl = document.querySelector('.share-or-copy')

// 각 지원 기능 확인
const isSupportedShare = !!navigator?.share
const isSupportedClipboard = !!navigator?.clipboard
const isSupportedClipboardCommand = document.queryCommandSupported?.('copy')

// 공유 및 복사 기능 상태 체크
const healthEl = document.createElement('div')
healthEl.style.display = 'none'
healthEl.innerHTML = `s: ${isSupportedShare}, c: ${isSupportedClipboard}, cc: ${isSupportedClipboardCommand}`
document.body.append(healthEl)

// 모바일 브라우저 내장 공유 기능
async function startNativeShare() {
  await navigator.share({
    title: '나와 찰떡인 에그타르트 찾기!',
    text: '나는 어떤 맛일까? 내 안에 숨어있는 에그타르트를 찾아보세요!',
    url: 'https://hojakjil-test.netlify.app/?utm_source=result&utm_medium=share_btn_click&utm_campaign=promotion' // 현재 페이지 주소!
  })
}

// 주소 복사 기능
async function copyToClipboard() {
  // 레거시 우선
  if (isSupportedClipboardCommand) {
    const textarea = document.createElement('textarea')
    textarea.style.position = 'fixed'
    textarea.style.top = 0
    textarea.style.left = 0
    textarea.value = 'https://hojakjil-test.netlify.app/?utm_source=result&utm_medium=share_btn_click&utm_campaign=promotion'

    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('링크를 복사했어요')
    return
  }
  if (isSupportedClipboard) {
    await navigator.clipboard.writeText('https://hojakjil-test.netlify.app/?utm_source=result&utm_medium=share_btn_click&utm_campaign=promotion')
    alert('링크를 복사했어요')
  }
}

// 모든 기능이 없는 경우 공유 버튼 제거
if (!isSupportedShare && !isSupportedClipboard && !isSupportedClipboardCommand) {
  btnEl.style.display = 'none'
}

// 공유 버튼을 클릭했을 떄
btnEl?.addEventListener('click', async function () {
  if (isSupportedShare) {
    await startNativeShare()
    return
  }
  if (isSupportedClipboard || isSupportedClipboardCommand) {
    await copyToClipboard()
  }
})
