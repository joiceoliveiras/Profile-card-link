function checkDate() {
    const targetDate = new Date(2024, 6, 7); 

    const currentDate = new Date();

    const link = document.getElementById('hideLink');

    if (currentDate < targetDate) {
        link.style.display = 'block';
    }
}

checkDate();