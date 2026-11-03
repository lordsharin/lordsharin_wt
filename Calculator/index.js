const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.value;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "=") {

            if (display.value !== "") {

                try {
                    display.value = eval(display.value);
                }

                catch (error) {
                    display.value = "Error";
                }

            }

        }

        else {
            display.value = display.value + value;
        }

    });

});