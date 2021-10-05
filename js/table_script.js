$(document).ready(function () {
    $("#mySearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#smdh_table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
