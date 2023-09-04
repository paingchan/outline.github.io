
// Store the user's preferred mode (default to dark mode)
let currentMode = localStorage.getItem('mode') || 'dark';


// Define language-specific translations for the contact popup

function showContactPopup() {
    const contactPopup = document.getElementById('contact-popup');
    contactPopup.style.display = 'block';
}

function closeContactPopup() {
    const contactPopup = document.getElementById('contact-popup');
    contactPopup.style.display = 'none';
}

function openWeChat() {
    // Implement the logic to open WeChat here
}

function openInstagram() {
    // Implement the logic to open Instagram here
}

function openEmail() {
    // Implement the logic to open the default email client here
}

// Add this code to trigger the popup when "Buy Now" button is clicked
const buyButtons = document.querySelectorAll('.buy-button'); // Get all "Buy Now" buttons

buyButtons.forEach(button => {
    button.addEventListener('click', showContactPopup);
});

// Define language-specific translations
const translations = {
    en: {
        'header-title': 'Secure Your Online World',
        'header-description': 'Explore the internet privately and securely with Outline VPN',
        'select-language-label': 'Select Language:',
        'user-guide-title': 'How to Use and Connect to Outline VPN',
        'user-guide-step1': 'Step 1: Download and install Outline VPN on your device.',
        'user-guide-step2': 'Step 2: Launch the application and follow the setup wizard.',
        'user-guide-step3': 'Step 3: Connect to a VPN server of your choice.',
        'user-guide-step4': 'Step 4: Enjoy secure and private browsing!',
        'package1-title': '1 Month Plan',
        'package1-description': 'Stay secure for 30 days',
        'package1-price': 'Price: 25¥/month',
        'package2-title': '1 Year Plan',
        'package2-description': 'Enjoy online privacy for a year',
        'package2-price': 'Price: 250¥/year',
        'contact-title': 'Contact Us',
        'contact-description': 'If you have any questions or need assistance with your purchase, feel free to contact us:',
        'wechat-contact': 'WeChat: <a href="weixin://">Open WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">Open Instagram</a>',
        'email-contact': 'Email: <a href="mailto:your@email.com">Send Email</a>',
    },
    th: {
        'header-title': 'Thai Translation for Header Title',
        'header-description': 'Thai Translation for Header Description',
        'select-language-label': 'เลือกภาษา:',
        'user-guide-title': 'วิธีใช้และเชื่อมต่อกับ Outline VPN',
        'user-guide-step1': 'ขั้นตอนที่ 1: ดาวน์โหลดและติดตั้ง Outline VPN บนอุปกรณ์ของคุณ',
        'user-guide-step2': 'ขั้นตอนที่ 2: เปิดใช้งานแอปพลิเคชันและทำตามวิธีการติดตั้ง',
        'user-guide-step3': 'ขั้นตอนที่ 3: เชื่อมต่อกับเซิร์ฟเวอร์ VPN ที่คุณต้องการ',
        'user-guide-step4': 'ขั้นตอนที่ 4: สนุกกับการเรียกดูที่ปลอดภัยและเชื่อมต่อออนไลน์!',
        'package1-title': 'แผน 1 เดือน',
        'package1-description': 'คงความปลอดภัยไว้ในระยะเวลา 30 วัน',
        'package1-price': 'ราคา: 25 ¥/เดือน',
        'package2-title': 'แผน 1 ปี',
        'package2-description': 'เพลิดเพลินกับความเป็นส่วนตัวออนไลน์นานหนึ่งปี',
        'package2-price': 'ราคา: 250¥/ปี',
        'contact-title': 'ติดต่อเรา',
        'contact-description': 'หากคุณมีคำถามหรือต้องการความช่วยเหลือในการซื้อสินค้า โปรดติดต่อเรา:',
        'wechat-contact': 'WeChat: <a href="weixin://">เปิด WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">เปิด Instagram</a>',
        'email-contact': 'อีเมล: <a href="mailto:your@email.com">ส่งอีเมล</a>',
    },
    id: {
        'header-title': 'Indonesian Translation for Header Title',
        'header-description': 'Indonesian Translation for Header Description',
        'select-language-label': 'Pilih Bahasa:',
        'user-guide-title': 'Cara Menggunakan dan Menghubungkan ke Outline VPN',
        'user-guide-step1': 'Langkah 1: Unduh dan instal Outline VPN di perangkat Anda',
        'user-guide-step2': 'Langkah 2: Buka aplikasi dan ikuti panduan pengaturan',
        'user-guide-step3': 'Langkah 3: Hubungkan ke server VPN pilihan Anda',
        'user-guide-step4': 'Langkah 4: Nikmati penjelajahan yang aman dan pribadi!',
        'package1-title': 'Paket 1 Bulan',
        'package1-description': 'Tetap aman selama 30 hari',
        'package1-price': 'Harga: 25¥/bulan',
        'package2-title': 'Paket 1 Tahun',
        'package2-description': 'Nikmati privasi online selama setahun',
        'package2-price': 'Harga: ¥250/tahun',
        'contact-title': 'Hubungi Kami',
        'contact-description': 'Jika Anda memiliki pertanyaan atau memerlukan bantuan dengan pembelian Anda, jangan ragu untuk menghubungi kami:',
        'wechat-contact': 'WeChat: <a href="weixin://">Buka WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">Buka Instagram</a>',
        'email-contact': 'Email: <a href="mailto:your@email.com">Kirim Email</a>',

    },
};

// Function to change language and update text content
function changeLanguage() {
    const selectedLanguage = document.getElementById('language').value;
    const elementsToUpdate = [
        'user-guide-title',
        'user-guide-step1',
        'user-guide-step2',
        'user-guide-step3',
        'user-guide-step4',
        'package1-title',
        'package1-description',
        'package1-price',
        'package2-title',
        'package2-description',
        'package2-price',
        'contact-title',
        'contact-description',
        'wechat-contact',
        'instagram-contact',
        'email-contact',
    ];

    // Update text content of elements based on selected language
    elementsToUpdate.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element && translations[selectedLanguage][elementId]) {
            element.textContent = translations[selectedLanguage][elementId];
        }
    });
}

// Add this code to trigger language change when the dropdown is changed
const languageDropdown = document.getElementById('language');
languageDropdown.addEventListener('change', changeLanguage);

// Initialize the mode icon based on the user's preference
setModeIcon();

// Toggle dark mode when the mode selector is clicked
document.getElementById('mode-selector').addEventListener('click', toggleDarkMode);

// Listen for language changes
document.getElementById('language').addEventListener('change', changeLanguage);

// Define language-specific translations for the contact popup
const contactTranslations = {
    en: {
        'contact-title': 'Contact Us',
        'contact-description': 'If you have any questions or need assistance with your purchase, feel free to contact us:',
        'wechat-contact': 'WeChat: <a href="weixin://">Open WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">Open Instagram</a>',
        'email-contact': 'Email: <a href="mailto:your@email.com">Send Email</a>',
    },
    th: {
        'contact-title': 'ติดต่อเรา',
        'contact-description': 'หากคุณมีคำถามหรือต้องการความช่วยเหลือในการซื้อสินค้า โปรดติดต่อเรา:',
        'wechat-contact': 'WeChat: <a href="weixin://">เปิด WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">เปิด Instagram</a>',
        'email-contact': 'อีเมล: <a href="mailto:your@email.com">ส่งอีเมล</a>',
    },
    id: {
        'contact-title': 'Hubungi Kami',
        'contact-description': 'Jika Anda memiliki pertanyaan atau memerlukan bantuan dengan pembelian Anda, jangan ragu untuk menghubungi kami:',
        'wechat-contact': 'WeChat: <a href="weixin://">Buka WeChat</a>',
        'instagram-contact': 'Instagram: <a href="instagram://user?username=yourinstagram">Buka Instagram</a>',
        'email-contact': 'Email: <a href="mailto:your@email.com">Kirim Email</a>',
    },
};

// Function to change language and update text content in the contact popup
function changeContactLanguage() {
    const selectedLanguage = document.getElementById('language').value;
    const contactElementsToUpdate = [
        'contact-title',
        'contact-description',
        'wechat-contact',
        'instagram-contact',
        'email-contact',
    ];

    // Update text content of elements in the contact popup based on selected language
    contactElementsToUpdate.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element && contactTranslations[selectedLanguage][elementId]) {
            element.innerHTML = contactTranslations[selectedLanguage][elementId];
        }
    });
}

// Add this code to trigger language change in the contact popup when the dropdown is changed
languageDropdown.addEventListener('change', changeContactLanguage);

function showUserGuidePopup() {
    const userGuidePopup = document.getElementById('user-guide-popup');
    userGuidePopup.style.display = 'block';
}

function closeUserGuidePopup() {
    const userGuidePopup = document.getElementById('user-guide-popup');
    userGuidePopup.style.display = 'none';
}

function setModeIcon() {
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const lightModeIcon = document.getElementById('light-mode-icon');

    if (currentMode === 'dark') {
        darkModeIcon.style.display = 'inline';
        lightModeIcon.style.display = 'none';
        document.body.classList.add('dark-mode');
    } else {
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'inline';
        document.body.classList.remove('dark-mode');
    }
}

function toggleDarkMode() {
    currentMode = currentMode === 'dark' ? 'light' : 'dark';

    // Store the user's preferred mode in local storage
    localStorage.setItem('mode', currentMode);
    setModeIcon();
}