const menu_lateral = document.getElementById("menu_lateral");
const btn_dropdown = document.getElementById("btn_dropdown");

function menu() {
    if (menu_lateral.style.visibility === 'hidden' || menu_lateral.style.visibility === '') {
        menu_lateral.style.visibility = "visible";
        setTimeout(function() {
            menu_lateral.style.transform = "translateX(0%)";
        }, 200);
    } else {
        setTimeout(function() {
            menu_lateral.style.visibility = 'hidden';
        }, 200);
        menu_lateral.style.transform = "translateX(-100%)";
    }
}

btn_dropdown.addEventListener("click", menu);

document.addEventListener("click", function(event) {
    if (!menu_lateral.contains(event.target) && event.target !== btn_dropdown) {
        if (menu_lateral.style.visibility === 'visible') {
            setTimeout(function() {
                menu_lateral.style.visibility = 'hidden';
            }, 200);
            menu_lateral.style.transform = "translateX(-100%)";
        }
    }
});
