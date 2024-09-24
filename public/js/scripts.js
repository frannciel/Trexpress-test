/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


$(document).ready(function () {
    
    $('#myForm').submit(function(event) {
        event.preventDefault(); // Evita o envio normal do formulário

        // Obtém os dados do formulário
        var formData = $(this).serialize();
        console.log(formData);
        // Envia os dados via AJAX
        $.ajax({
            url: '/formulario/novo',
            type: 'POST',
            data: formData,
            success: function(response) {
                // Exibe a resposta do servidor
                $('#myForm').html(response);
                //$('#responseMessage').html('<div class="alert alert-success">' + response + '</div>');
            },
            error: function(xhr, status, error) {
                // Exibe uma mensagem de erro
               
                $('#responseMessage').html('<div class="alert alert-danger">Ocorreu um erro. Tente novamente.</div>');
            }
        });
    });
  
    
    /*
    var nextView = 2;
    var currentView = 1;
    var backView = 0;
    var numView = 10;

    updateProgressBar();

    $("#btnNext").on("click", function() {
        $("#view0"+currentView).addClass("visually-hidden");
        $("#view0"+nextView).removeClass("visually-hidden");
        nextView += 1;
        currentView += 1;
        backView += 1;
        disableButton();
    });

    $("#btnBack").on("click", function() {
        $("#view0"+currentView).addClass("visually-hidden");
        $("#view0"+backView).removeClass("visually-hidden");
        nextView -= 1;
        currentView -= 1;
        backView -= 1;
        disableButton();
      
    });

    function disableButton(){
        updateProgressBar();
        if(backView == 0){
            $("#btnBack").attr("disabled", true);
        } else if ($("#btnBack").prop("disabled")) {
            $("#btnBack").attr("disabled", false);
        }
        if(nextView > numView){
            $("#btnNext").attr("disabled", true);

            $("#btnNext").addClass("visually-hidden");
            $("#btnEnd").removeClass("visually-hidden");
        } else if ($("#btnNext").prop("disabled")){
            $("#btnNext").attr("disabled", false);

            $("#btnNext").removeClass("visually-hidden");
            $("#btnEnd").addClass("visually-hidden");
        }
    }

    function updateProgressBar(){
        let value = currentView / numView * 100
        $(".progress-bar").css("width", value+"%");
    }

    var processo = $("input[name='processo']").val();
    var objeto = $("textarea[name='objeto']").val();

    $("div#processo").val(processo);

    $("#btnEnd").on("click", function() {
        $("#resume").removeClass("visually-hidden");
        $("#form").addClass("visually-hidden");
    });
    */
});
