var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var title = $('input[name="title"]').val();
        var url = $('input[name="url"]').val();
        var reasons = $('textarea[name="reasons"]').val();
        
        var msg = `${key}\n作品のタイトル：${title}\nURL：${url}\n作品への想い：${reasons}`;
        sendText(msg);

        return false;
    });
});