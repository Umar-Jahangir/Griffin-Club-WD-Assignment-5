$(document).ready(function() {
    $('#adminForm').on('submit', function(event) {
        event.preventDefault();

        // Client-side validation
        if (!validateForm()) return;

        const formData = new FormData(this);
        const notice = {
            eventName: $('#eventName').val(),
            eventDate: $('#eventDate').val(),
            eventTime: $('#eventTime').val(),
            eventLocation: $('#eventLocation').val(),
            aboutTheEvent: $('#aboutTheEvent').val(),
            fileAttached: $('#eventFile')[0].files.length > 0
        };

        // Save to localStorage
        const notices = JSON.parse(localStorage.getItem('notices')) || [];
        notices.push(notice);
        localStorage.setItem('notices', JSON.stringify(notices));

        // Optional: Handle file upload if needed
        if (formData.get('eventFile').size > 0) {
            // Future implementation for file handling
            console.log('File uploaded:', formData.get('eventFile').name);
        }

        alert('Notice successfully added!');
        $('#adminForm')[0].reset();
    });

    function validateForm() {
        const requiredFields = ['#eventName', '#eventDate', '#eventTime', '#eventLocation'];
        let isValid = true;

        requiredFields.forEach(selector => {
            const $field = $(selector);
            if (!$field.val().trim()) {
                $field.addClass('error');
                isValid = false;
            } else {
                $field.removeClass('error');
            }
        });

        return isValid;
    }
});  