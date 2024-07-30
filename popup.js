const popup = document.createElement('div');

    // Thêm nội dung vào popup
    popup.innerHTML = `
        <div id="custom-popup" style="position: fixed; bottom: 20px; left: 20px; background-color: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); z-index: 1000;">
            <p>This is a custom popup!</p>
            <button id="close-popup" style="background: #f00; color: #fff; border: none; padding: 5px 10px;">Close</button>
        </div>
    `;

    // Thêm popup vào body
    document.body.appendChild(popup);

    // Đóng popup khi nhấn nút "Close"
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('custom-popup').remove();
    });
