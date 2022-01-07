(function() {
  let url = Array.from(document.getElementsByTagName('iframe'))[0].src
  const pieces = url.split('&')
  pieces.splice(3,1,'giftDate=2022-01-06T00:00:00')
  url = pieces.join('&')
  window.open(url, '_blank')
})()