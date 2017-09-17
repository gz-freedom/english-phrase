// event bindings
$(document).on("click", "#btn-nav-mode .btn", function() {
    // toggle list mode and memorize mode
    let $list = $("#list-mode"), $memorize = $("#memorize-mode");
    $(this).addClass("btn-warning").removeClass("btn-secondary")
        .siblings().addClass("btn-secondary").removeClass("btn-warning");
    if(this.id === "btn-list-mode") {
        $("#list-mode").show().siblings("#memorize-mode").hide();
    } else {
        $("#list-mode").hide().siblings("#memorize-mode").show();
    }
}).on("click", "#list-phrases .btn-edit", function() {
    // edit
    $("#editModal").modal();
}).on("click", "#list-phrases .btn-delete", function() {
    // delete
    $("#deleteModal").modal();
});