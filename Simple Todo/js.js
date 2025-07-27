    var ul = document.getElementById("list");
    var input = document.getElementById("input");

    function add() {
        if (input.value.trim() === "") return;

        var listitem = document.createElement("li");
        listitem.innerHTML = input.value + 
            "<button class='delete-btn' onclick='deleteitem(event)'>" +
            "<i class='fas fa-trash-alt'></i></button>";
        ul.append(listitem);
        input.value = "";
    }

    function deleteitem(event) {
        event.target.closest("li").remove();
    }