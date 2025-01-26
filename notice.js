$(document).ready(function () {
    const notices = JSON.parse(localStorage.getItem('notices')) || [];
    const $noticeList = $('#notices');

    notices.forEach((notice) => {
        const $li = $(`
            <li>
                <strong>${notice.eventName}</strong><br>
                Date: ${notice.eventDate}<br>
                Time: ${notice.eventTime}<br>
                Location: ${notice.eventLocation}<br>
                Details: ${notice.aboutTheEvent}<br>
                <hr>
            </li>
        `);
        $noticeList.append($li);
    });
});
