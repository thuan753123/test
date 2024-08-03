// Tạo popup
const popup = document.createElement('div');

function getRootURL() {
    const { hostname } = window.location;
    return hostname`;
}

async function fetchSettings(shop) {
    try {
        const response = await fetch(`/popup-settings/${shop}`);
        const settings = await response.json();
        return settings;
    } catch (error) {
        console.error('Error fetching settings:', error);
        return null;
    }
}

async function initPopup() {
    const shop = getRootURL();
    const settings = await fetchSettings(shop);

    // Giá trị mặc định nếu không có settings từ backend
    const defaultSettings = {
        backgroundColor: '#f1f1f1',
        textColor: '#000000',
        borderRadius: '5px',
        title: 'Welcome to our website!',
        content: 'This is the popup content.'
    };

    // Sử dụng settings từ backend nếu có, nếu không dùng giá trị mặc định
    const finalSettings = { ...defaultSettings, ...settings };

    popup.innerHTML = `
        <div id="custom-popup" style="
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 300px;
            padding: 20px;
            background-color: ${finalSettings.backgroundColor};
            color: ${finalSettings.textColor};
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: ${finalSettings.borderRadius};
            z-index: 1000;
        ">
            <p style="margin: 0;">${finalSettings.title}</p>
            <div>${finalSettings.content}</div>
            <button id="close-popup" style="
                margin-top: 10px;
                padding: 5px 10px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            ">Close</button>
        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('custom-popup').remove();
    });
}

// Khởi chạy popup khi trang được tải
window.onload = initPopup;
