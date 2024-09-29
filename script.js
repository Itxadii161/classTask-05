

function findDate() {
    var yearArea = document.getElementById("yearArea");
    var monthArea = document.getElementById("monthArea");
    var dayArea = document.getElementById("dayArea");

    const selectDate = document.getElementById('selectDate').value;

    if (selectDate) {
        const year = new Date(selectDate).getFullYear();
        yearArea.textContent = `${year} Year`;

        const month = new Date(selectDate).getMonth();
        monthArea.textContent = `${month} Month`;

        const day = new Date(selectDate).getDate();
        dayArea.textContent = `${day} Day`;
    } else {
        yearArea.textContent = '0';
        monthArea.textContent = '0.';
        dayArea.textContent = '0';
    }
}
 