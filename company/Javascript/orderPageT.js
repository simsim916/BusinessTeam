
function selectAll() {
    const checkAll = document.querySelector('#checkAll');
    const isChecked = checkAll.checked;
    // console.log(checkAll);
    if (isChecked) {
        const checkboxes = document.querySelectorAll('.chk');

        for (const a of checkboxes) {
            a.checked = true;
        }
    } else {
        const checkboxes = document.querySelectorAll('.chk');

        for (const a of checkboxes) {
            a.checked = false;
        }
    }
    console.log(isChecked);
}
