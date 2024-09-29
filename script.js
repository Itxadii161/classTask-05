

function findDate() {
    var yearArea = document.getElementById("yearArea");
    var monthArea = document.getElementById("monthArea");
    var dayArea = document.getElementById("dayArea");

    const selectDate = document.getElementById('selectDate').value;
    var myDate = new Date(selectDate);
    var currentDate = new Date();

    if (selectDate) {
        const year = currentDate.getFullYear() - myDate.getFullYear(); 
        yearArea.textContent = `${year} Year`;

        const month = currentDate.getMonth() - myDate.getMonth();
        monthArea.textContent = `${month} Month`;

        const day = currentDate.getDate - myDate.getDate();
        dayArea.textContent = `${day}  Day`;
    } else {
        yearArea.textContent = '0';
        monthArea.textContent = '0';
        dayArea.textContent = '0';
    }
}
 