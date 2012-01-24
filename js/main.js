$(function () {
  // tooltip demo
  $('.tooltip-demo.well').tooltip({
    selector: "a[rel=tooltip]"
  })
  $('.tooltip-test').tooltip()

  // popover demo
  $("a[rel=popover]")
    .popover()
    .click(function(e) {
      e.preventDefault()
    })

  // button state demo
  $('#fat-btn')
    .click(function () {
      var btn = $(this)
      btn.button('loading')
      setTimeout(function () {
        btn.button('reset')
      }, 3000)
    })

  // carousel demo
  $('.carousel').carousel()
});