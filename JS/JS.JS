function perro() {
    $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        $('#perrito').attr('src', data.message)
    });
}