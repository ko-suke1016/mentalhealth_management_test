$(document).on('turbolinks:load', function() {

   // 説明画面が出力
   $(".recovery-item").on('click',function(){
      $(".recovery-memo").fadeIn();
      $(".task-menu").fadeOut();
   })

   // 問題と解答が出力
   $(".recovery_question_start").on('click',function(){
      $('.recovery-memo').fadeOut(function(){
         $("#recovery-item").fadeIn();
     });
   })


   $(".send_selection").on('click',function(){
   // コメントとデータの送信
   var target = $(this);
   // 対象となる要素の文字色を選択されたものに変更
   target.css("color", "#0000FF");
   // クリックされた要素の指定するIDを取得
   var result = target.data("send-id");
   // paramsに値を代入
   var params = {
       score: result
   }
   // ajaxで送信処理
   $.ajax({
       url: "recovery_icon",
       type: "post",
       data: params
   })
   $.when(
      $('.answer_after').fadeOut(function(){
         $(".not-btn").fadeIn();
      })
     ).done(function(){
      if ( result == 7 ) {
         $('.recovery-true').fadeIn();
      }else{
         $('.recovery-false').fadeIn();
      }
      $('.recovery-comentary').fadeIn();
      $('.remove').fadeIn();
   })
})

})
