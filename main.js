;(function () {
  var words = [
      'for Psychological Issues',
      'for Emotional Issues',
      'for Relationship Issues',
      'for Personal Issues',
    ],
    i = 0
  setInterval(function () {
    $('#changingword').fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn()
    })
  }, 3000)
})()
