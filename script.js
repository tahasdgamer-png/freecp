function startOperation() {
    // ۱. مخفی کردن فرم ورودی (دیگه تموم شد، الان فقط کارِ سروره!)
    document.getElementById('username').style.display = 'none';
    document.getElementById('cp-amount').style.display = 'none';
    document.getElementById('start-btn').style.display = 'none';

    // ۲. نمایش نوار پیشرفت
    const container = document.getElementById('progress-container');
    container.style.display = 'block';

    const bar = document.getElementById('bar');
    const statusText = document.getElementById('status');
    const audio = document.getElementById('myAudio');
    
    let width = 0;

    // ۳. شروع عملیات با زمان‌بندی
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            
            // مخفی کردن نوار و نمایش متن نهایی
            container.style.display = 'none';
            document.getElementById('final-msg').style.display = 'block';

            // پخش صدا به صورت لوپ
            audio.loop = true;
            audio.play();
        } else {
            width++;
            bar.style.width = width + '%';

            // تغییر پیام‌ها برای ایجاد استرسِ نمایشی
            if (width === 20) statusText.innerText = "در حال اتصال به دیتابیس...";
            if (width === 40) statusText.innerText = "در حال دور زدن فایروال اکتیویژن...";
            if (width === 60) statusText.innerText = "در حال تزریق بسته‌های سی‌پی...";
            if (width === 80) statusText.innerText = "عملیات در مرحله نهایی...";
        }
    }, 300); // این ۳۰۰ یعنی هر ۳۰۰ میلی‌ثانیه یک درصد پر میشه (کلاً ۳۰ ثانیه طول می‌کشه)
}