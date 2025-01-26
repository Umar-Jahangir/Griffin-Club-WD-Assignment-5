document.addEventListener('DOMContentLoaded', () => {
    
    //2nd marquee
    const header = document.querySelector('header');
    const marquee = document.createElement('marquee');
    marquee.textContent = 'Explore the skies with us!';
    marquee.style.color = '#133E87';
    marquee.style.fontSize = '20px';
    marquee.style.fontWeight = 'bold';
    marquee.style.marginTop = '20px'; //space between marquee and nav
    marquee.direction = 'left';
    marquee.behavior = 'alternate';
    header.appendChild(marquee);

    const navItems = document.querySelectorAll('header nav ul li');
    navItems.forEach((item) => {
        item.style.marginRight = '20px'; //spacing between items
    });

    // Add margin-bottom to the navigation bar
    const nav = document.querySelector('header nav');
    nav.style.marginBottom = '20px'; //space below the nav bar

    
});

//Images hover effect
const images = document.querySelectorAll('img');
images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

//Current Year Display
const achievementsSection = document.querySelector('.win');
const yearSpan = document.createElement('p');
yearSpan.style.color = '#88C273';
yearSpan.textContent = `Current Year: ${new Date().getFullYear()}`;
achievementsSection.appendChild(yearSpan);

// Table highlight on hover
const tableRows = document.querySelectorAll('.listOfAchievements table tr');
tableRows.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#FFF4B7';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '#D4BDAC';
    });
});

//play pause button
document.addEventListener('DOMContentLoaded', () => {
    const videoIframe = document.getElementById('bannerVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    let isPlaying = true; //video will play automatically

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            const pauseUrl = videoIframe.src.replace("autoplay=1", "autoplay=0");
            videoIframe.src = pauseUrl;
            playPauseBtn.textContent = "Play";//video will start from the start
        } else {
            const playUrl = videoIframe.src.replace("autoplay=0", "autoplay=1");
            videoIframe.src = playUrl;
            playPauseBtn.textContent = "Pause";
        }
        isPlaying = !isPlaying; //Toggle
    });
});