const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('odtad');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;

}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

