    // Tab Switching Logic
    function switchDay(dayIdentifier) {
        document.querySelectorAll('.day-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.day-tab').forEach(el => el.classList.remove('active'));

        let targetContentId;
        let targetButtonIndex;

        if (typeof dayIdentifier === 'number') {
            targetContentId = 'day' + dayIdentifier;
            targetButtonIndex = dayIdentifier - 1; // Assuming Day 1 is index 0, Day 2 is index 1, etc.
        } else { // Assuming it's 'shopping'
            targetContentId = 'dayShoppingList';
            // Find the index of the '待買清單' button dynamically
            const allTabs = Array.from(document.querySelectorAll('.day-tab'));
            targetButtonIndex = allTabs.findIndex(button => button.textContent === '待買清單');
        }
        
        document.getElementById(targetContentId).classList.add('active');
        const buttons = document.querySelectorAll('.day-tab');
        if(buttons[targetButtonIndex]) {
            buttons[targetButtonIndex].classList.add('active');
            buttons[targetButtonIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Real-time Countdown Logic
    function updateCountdown() {
        const tripStart = new Date("2025-12-30T14:15:00").getTime();
        const now = new Date().getTime();
        const distance = tripStart - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "旅程進行中 ✈️";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Pad numbers with leading zeros for consistency
        const fHours = hours.toString().padStart(2, '0');
        const fMinutes = minutes.toString().padStart(2, '0');
        const fSeconds = seconds.toString().padStart(2, '0');

        document.getElementById("countdown").innerHTML = `⏰ 倒數 ${days}天 ${fHours}時 ${fMinutes}分 ${fSeconds}秒`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); 