// Tạo một hàm để hiển thị popup
function showPopup() {
    // Tạo phần tử div cho popup
    const popup = document.createElement('div');

    // Thêm nội dung vào popup
    popup.innerHTML = `
        <div id="custom-popup" style="
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 300px;
            padding: 20px;
            background-color: #f1f1f1;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            z-index: 1000;
        ">
            <p style="margin: 0;">Welcome to our website!</p>
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

    // Thêm popup vào body của trang
    document.body.appendChild(popup);

    // Thêm sự kiện đóng popup khi nhấn nút
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('custom-popup').remove();
    });
}

// Hiển thị popup khi trang được tải
window.onload = function() {
    showPopup();
};
