$(document).ready(function() {
    // Function to load initial team data if not exists
    const loadTeamData = () => {
        const defaultTeamData = [
            {
                name: "Rohan Kulkarni",
                class: "B",
                branch: "CSE(DS)",
                year: "2025-26",
                role: "Captain"
            },
            {
                name: "Nrual Wakode",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Vice-captain"
            },
            {
                name: "Soham Thakur",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Manager"
            },
            {
                name: "Aagam Kothari",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Manager"
            },
            {
                name: "Aagam Kothari",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Chief-Technical Officer"
            },
            {
                name: "Suyesh Mishra",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Chief-Technical Officer"
            },
            {
                name: "Akash Malsane",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Technical Officer"
            },
            {
                name: "Yash Lad",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Non-Technical Officer"
            },
            {
                name: "Anubrat Chaterjee",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Non-Technical Officer"
            },
            {
                name: "Mayank Zade",
                class: "12",
                branch: "Science",
                year: "2024-25",
                role: "Publicity Head"
            }
        ];

        if (!localStorage.getItem("teamData")) {
            localStorage.setItem("teamData", JSON.stringify(defaultTeamData));
        }
    };

    // Function to update the teams page with data from localStorage
    const updateTeamsPageFromStorage = () => {
        const teamData = JSON.parse(localStorage.getItem("teamData")) || [];
        $('.container-box').each(function() {
            const memberName = $(this).find('h3').text().replace('Name: ', '').trim();
            const member = teamData.find(m => m.name.toLowerCase() === memberName.toLowerCase());
            
            if (member) {
                $(this).find('.details').html(`
                    <h3>Name: ${member.name}</h3>
                    <p>Class: ${member.class}</p>
                    <p>Branch: ${member.branch}</p>
                    <p>Academic Year: ${member.year}</p>
                    ${member.role ? `<p>Role: ${member.role}</p>` : ''}
                `);
            }
        });
    };

    // Initialize localStorage with default data if needed
    loadTeamData();

    // If we're on the teams page
    if ($('.container-box').length) {
        // Update the page with data from localStorage
        updateTeamsPageFromStorage();
        
        // Set up image modal functionality
        const $modal = $(`
            <div class="modal" style="display: none;">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img class="modal-image" src="" alt="Team Member">
                </div>
            </div>
        `).appendTo('body');

        const $modalImage = $modal.find('.modal-image');

        $('.container-box img').on('click', function() {
            $modalImage.attr('src', $(this).attr('src'));
            $modal.css('display', 'flex');
        });

        $modal.find('.close').on('click', function() {
            $modal.css('display', 'none');
        });

        $(window).on('click', function(e) {
            if ($(e.target).is($modal)) {
                $modal.css('display', 'none');
            }
        });
    }

    // If we're on the admin page
    if ($('#updateForm').length) {
        const $messageDiv = $('#message');
        const $form = $('#updateForm');
        const $nameInput = $('#name');

        $nameInput.on('change', function() {
            const name = $(this).val().trim();
            const teamData = JSON.parse(localStorage.getItem("teamData")) || [];
            const member = teamData.find(m => m.name.toLowerCase() === name.toLowerCase());
            
            if (member) {
                $('#class').val(member.class);
                $('#branch').val(member.branch);
                $('#year').val(member.year);
                $messageDiv.text('Member found! Update their details below.')
                          .css('color', 'green');
            } else {
                $form[0].reset();
                $nameInput.val(name);
                $messageDiv.text(`No member found with name "${name}"`)
                          .css('color', 'red');
            }
        });

        $('#updateButton').on('click', function() {
            const name = $nameInput.val().trim();
            const newClass = $('#class').val().trim();
            const branch = $('#branch').val().trim();
            const year = $('#year').val().trim();

            if (!name || !newClass || !branch || !year) {
                $messageDiv.text('Please fill all fields')
                          .css('color', 'red');
                return;
            }

            let teamData = JSON.parse(localStorage.getItem("teamData")) || [];
            const memberIndex = teamData.findIndex(m => m.name.toLowerCase() === name.toLowerCase());

            if (memberIndex !== -1) {
                // Preserve the member's role when updating
                const role = teamData[memberIndex].role;
                
                teamData[memberIndex] = {
                    name,
                    class: newClass,
                    branch,
                    year,
                    role
                };

                localStorage.setItem("teamData", JSON.stringify(teamData));
                $messageDiv.text(`Details for ${name} updated successfully! Refresh the teams page to see changes.`)
                          .css('color', 'green');
                $form[0].reset();
            } else {
                $messageDiv.text(`Team member "${name}" not found.`)
                          .css('color', 'red');
            }
        });
    }
});