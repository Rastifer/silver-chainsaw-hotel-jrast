var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var maxAllowed = 3;

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedCheckboxes.length > maxAllowed) {
                this.checked = false;
            }
        });
    }