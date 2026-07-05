// 1. كود فتح الدعوة وتأثير الاختفاء التدريجي للستارة الافتتاحية
const openBtn = document.getElementById('open-btn');
const splashScreen = document.getElementById('splash-screen');
const mainInvitation = document.getElementById('main-invitation');

openBtn.addEventListener('click', () => {
    splashScreen.style.opacity = '0';
    splashScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainInvitation.classList.remove('hidden');
    }, 800); 
});

// 2. حساب العداد التنازلي لـ تاريخ (12 ديسمبر 2026 في تمام الساعة 4:00 عصرًا)
const weddingDate = new Date('December 12, 2026 16:00:00').getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // معادلات حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // إدخال الأرقام في عناصر الـ HTML مع الحفاظ على صيغة الخانتين (مثل 05 بدلاً من 5)
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    
    // عند وصول موعد الزفاف
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = "<h3 class='gold-text'>حان وقت الفرحة! ألف مبروك للعروسين 🎉</h3>";
    }
}, 1000);