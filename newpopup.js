// Tạo popup
const popup = document.createElement('div');

// Hàm để lấy root URL của website
function getRootURL() {
    const {  hostname } = window.location;
    return hostname;
}

// Hàm để lấy settings từ backend
async function fetchSettings(shop) {
    try {
        const response = await fetch(`https://kentvps.io.vn/popup-settings/${shop}`);
        const settings = await response.json();
        return settings;
    } catch (error) {
        console.error('Error fetching settings:', error);
        return null;
    }
}

// Hàm để khởi tạo popup với settings từ backend
async function initPopup() {
    const shop = getRootURL();
    const settings = await fetchSettings(shop);

    // Giá trị mặc định nếu không có settings từ backend
    const defaultSettings = {
        backgroundColor: '#ffffff',
        textColor: '#333333',
        borderRadius: '5px',
        imageUrl: 'https://via.placeholder.com/50',
        location: 'San Francisco',
        productName: 'MEN COTTON BAG',
        timeAgo: '4 minutes ago'
    };

    // Sử dụng settings từ backend nếu có, nếu không dùng giá trị mặc định
    const finalSettings = { ...defaultSettings, ...settings };

    popup.innerHTML = `
        <div id="custom-popup" style="
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 320px;
            padding: 10px;
            background-color: ${finalSettings.backgroundColor};
            color: ${finalSettings.textColor};
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: ${finalSettings.borderRadius};
            z-index: 1000;
            display: flex;
            align-items: center;
            font-family: Arial, sans-serif;
        ">
            <img src="${finalSettings.imageUrl}" alt="Product Image" style="
                width: 50px;
                height: 50px;
                margin-right: 10px;
                border-radius: 5px;
            ">
            <div style="flex-grow: 1;">
                <p style="margin: 0; font-size: 12px;">Someone in ${finalSettings.location} just bought</p>
                <p style="margin: 0; font-size: 14px; font-weight: bold;">${finalSettings.productName}</p>
                <p style="margin: 0; font-size: 12px; color: #888;">${finalSettings.timeAgo}</p>
            </div>
            <button id="close-popup" style="
                background: none;
                border: none;
                font-size: 16px;
                color: #888;
                cursor: pointer;
                padding: 0;
                margin-left: 10px;
            ">&times;</button>
        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('custom-popup').remove();
    });
}

// Khởi chạy popup khi trang được tải
document.addEventListener('DOMContentLoaded', initPopup);
