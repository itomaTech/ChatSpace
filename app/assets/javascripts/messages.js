$(function() {

  function buildHTML(message) {
    var imageBox = "";
    if (message.image) {
      imageBox = `${message.image}`
    }
    var html = `<div class="message">
                  <div class="message__upper-info">
                    <p class="message__upper-info__talker">
                      ${message.name}
                    </p>
                    <p class="message__upper-info__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <p class="message__text">
                      ${message.body}
                    <div class="image-box">
                      <image src="${imageBox}" >
                    </div>
                  </p>
                </div>`
    return html;
  }


  $(".new-message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax( {
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html)
      $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight+100}, "fast");
      $('.new-message')[0].reset();
    })
    .fail(function() {
      alert('非同期通信に失敗しました');
    })
    .always(function() {
      $('.submit-btn').prop("disabled", false);
    })
  })
});
