function checkDate() {
    const targetDate = new Date(); 

    const currentDate = new Date();

    const link = document.getElementById('hideLink');

    if (currentDate < targetDate) {
        link.style.display = 'block';
    }
}

checkDate();