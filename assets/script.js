document.addEventListener('DOMContentLoaded', function() {
    // تحديث التاريخ والوقت
    function updateDateTime() {
        const now = new Date();
        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');
        
        if (dateElement && timeElement) {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            dateElement.textContent = now.toLocaleDateString('ar-SA', options);
            timeElement.textContent = now.toLocaleTimeString('ar-SA');
        }
    }

    // تحديث التاريخ والوقت كل ثانية
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // تفعيل حالة التنقل النشطة
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // تأثير التحويم على كروت الأخبار
    const newsCards = document.querySelectorAll('.news-card, .side-news-item, .main-news');
    if (newsCards.length > 0) {
        newsCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // تحديث الأخبار العاجلة
    const breakingNews = document.querySelector('.breaking-news');
    const newsUpdates = [
        'عاجل: آخر التطورات في القضايا المهمة - تابعوا معنا',
        'جديد: إعلان نتائج مهمة في القطاع الاقتصادي',
        'عاجل: تطورات جديدة في الأحداث الجارية',
        'حصري: معلومات جديدة حول القضايا الراهنة'
    ];

    if (breakingNews) {
        let newsIndex = 0;
        setInterval(() => {
            newsIndex = (newsIndex + 1) % newsUpdates.length;
            breakingNews.innerHTML = `<strong>عاجل:</strong> ${newsUpdates[newsIndex]}`;
        }, 5000);
    }

    // تأثيرات النموذج
    const form = document.querySelector('.contact-form form');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });
        
        // إرسال النموذج
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('.submit-btn');
            button.innerHTML = 'جاري الإرسال...';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.innerHTML = 'تم الإرسال ✓';
                setTimeout(() => {
                    button.innerHTML = 'إرسال الرسالة';
                    button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    form.reset();
                }, 2000);
            }, 1000);
        });
    }
});
