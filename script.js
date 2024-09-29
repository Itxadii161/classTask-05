

function findDate() {
    var yearArea = document.getElementById("yearArea");
    var monthArea = document.getElementById("monthArea");
    var dayArea = document.getElementById("dayArea");

    const selectDate = document.getElementById('selectDate').value;
    var myDate = new Date(selectDate);
    var currentDate = new Date();

    if (selectDate) {
        var diffDate = currentDate - myDate;
        const totalDays = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    
        const years = Math.floor(totalDays / 365);
        const remDays = totalDays % 365;

        const months = Math.floor(remDays / 30);
        const days = remDays % 30;
        
        yearArea.textContent = `${years} Year${years === 1 ? '' : 's'}`;
        monthArea.textContent = `${months} Month${months === 1 ? '' : 's'}`;
        dayArea.textContent = `${days} Day${days === 1 ? '' : 's'}`;
    } else {
        yearArea.textContent = '0';
        monthArea.textContent = '0';
        dayArea.textContent = '0';
    }
}
 