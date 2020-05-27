$("#signup").click(function () {
  $("#first").fadeOut("fast", function () {
    $("#second").fadeIn("fast");
  });
});

$("#signin").click(function () {
  $("#second").fadeOut("fast", function () {
    $("#first").fadeIn("fast");
  });
});


$(function () {
  $("form[name='login']").validate({
    rules: {

      email: {
        required: true,
        email: true
      },
      password: {
        required: true,

      }
    },
    messages: {
      email: "Por favor, digite seu e-mail",

      password: {
        required: "Por favor, digite sua senha",

      }

    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});



$(function () {

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },

    messages: {
      firstname: "Por favor, digite seu nome",
      lastname: "Por favor, digite seu sobrenome",
      password: {
        required: "Por favor, digite uma senha",
        minlength: "Sua senha deve ter ao menos 6 digitos"
      },
      email: "Por favor, digite um e-mail válido"
    },

    submitHandler: function (form) {
      form.submit();
    }
  });
});