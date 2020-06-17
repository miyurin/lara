$(function() {
    'use strict';
    let cmds = document.getElementsByClassName('del');
    let i;

    for (i = 0; i < cmds.length; i++) {
        cmds[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('削除しますか?')) {
                document.getElementById('form_' + this.dataset.id).submit();
            }
        });
    }

    $('.menu:even').css("background-color","#DEDEDE");
    $('.menu:odd').css("background-color","#E0A4AF");

    $("#word1").on('input',() => {
        let value = $("#word1").val();
        let request = $.ajax({
            type: 'GET',
            url: "../../ajaxtest",
            cache: false,
            dataType: 'json',
            timeout: 3000,
        });
        request.done((data) => {
            let words = data.words;
            let text = "";
            for(let i=0; i<words.length; i++) {
                if(value == words[i].word1) {
                    text = "重複があります!";
                    $("#has_duplicate1").text(text);
                    return;
                }else {
                    text = "";
                    $("#has_duplicate1").text(text);
                }
            }
        })
    });

    $("#word2").on('input', function() {
        let text = "";
        $("#has_duplicate2").text(text);
        if(!(/^[ぁ-んー　、。]*$/).test($("#word2").val())) {
            text = "ひらがなで入力してください!!";
            $("#has_duplicate2").text(text);
        }
    });
});