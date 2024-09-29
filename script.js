

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
        // console.log(totalDays)
    
        const years = Math.floor(totalDays / 365);
        const remDays = totalDays % 365;
        // console.log(years)
        // console.log(remDays)
        
        const months = Math.floor(remDays / 30);
        const days = remDays % 30;
        // console.log(days)

        yearArea.textContent = `${years} Year`;
        monthArea.textContent = `${months} Month`;
        dayArea.textContent = `${days} Day`;
    } else {
        yearArea.textContent = '0';
        monthArea.textContent = '0';
        dayArea.textContent = '0';
    }
}
 