// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Music player functionality
let currentlyPlaying = null;

function playMusic() {
    // Create audio visualization effect
    showMusicPlayerWithTrack('IMIZAMO');
    
    // You can integrate with actual music streaming APIs here
    console.log('Playing BIGJOHN music...');
    
    // Show notification
    showNotification('🎵 Now Playing: IMIZAMO by BIGJOHN');
}

function showMusicPlayer() {
    showMusicPlayerWithTrack('IMIZAMO');
}

function showMusicPlayerWithTrack(trackName) {
    // Create a simple music player overlay
    const playerOverlay = document.createElement('div');
    playerOverlay.className = 'music-player-overlay';
    playerOverlay.innerHTML = `
        <div class="music-player">
            <div class="player-controls">
                <button class="control-btn" onclick="previousTrack()">
                    <i class="fas fa-step-backward"></i>
                </button>
                <button class="control-btn play-pause" onclick="togglePlayPause()">
                    <i class="fas fa-pause"></i>
                </button>
                <button class="control-btn" onclick="nextTrack()">
                    <i class="fas fa-step-forward"></i>
                </button>
            </div>
            <div class="track-info">
                <h4>${trackName}</h4>
                <p>BIGJOHN</p>
            </div>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <button class="close-player" onclick="closeMusicPlayer()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles for the music player
    const playerStyles = `
        <style>
            .music-player-overlay {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                border-radius: 15px;
                padding: 20px;
                color: white;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 1000;
                animation: slideInRight 0.5s ease;
                backdrop-filter: blur(10px);
            }
            
            .music-player {
                display: flex;
                align-items: center;
                gap: 15px;
                min-width: 300px;
            }
            
            .player-controls {
                display: flex;
                gap: 10px;
            }
            
            .control-btn {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .control-btn:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.1);
            }
            
            .play-pause {
                background: rgba(255,107,53,0.8);
            }
            
            .track-info h4 {
                margin: 0;
                font-size: 14px;
            }
            
            .track-info p {
                margin: 0;
                font-size: 12px;
                opacity: 0.8;
            }
            
            .progress-bar {
                width: 100px;
                height: 4px;
                background: rgba(255,255,255,0.3);
                border-radius: 2px;
                overflow: hidden;
            }
            
            .progress {
                height: 100%;
                background: #ffd700;
                width: 30%;
                animation: progressAnimation 3s ease-in-out infinite;
            }
            
            .close-player {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
                opacity: 0.7;
            }
            
            .close-player:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes progressAnimation {
                0% { width: 30%; }
                50% { width: 70%; }
                100% { width: 30%; }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', playerStyles);
    document.body.appendChild(playerOverlay);
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        closeMusicPlayer();
    }, 10000);
}

function togglePlayPause() {
    const playPauseBtn = document.querySelector('.play-pause i');
    if (playPauseBtn.classList.contains('fa-pause')) {
        playPauseBtn.className = 'fas fa-play';
    } else {
        playPauseBtn.className = 'fas fa-pause';
    }
}

function previousTrack() {
    showNotification('⏮️ Previous Track');
}

function nextTrack() {
    showNotification('⏭️ Next Track');
}

function closeMusicPlayer() {
    const overlay = document.querySelector('.music-player-overlay');
    if (overlay) {
        overlay.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const notificationStyles = `
        <style>
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(45deg, #ff6b35, #e94560);
                color: white;
                padding: 15px 25px;
                border-radius: 25px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1001;
                animation: notificationSlide 0.5s ease;
                font-weight: 600;
            }
            
            @keyframes notificationSlide {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        </style>
    `;
    
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.innerHTML = notificationStyles.replace('<style>', '').replace('</style>', '');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlide 0.5s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Album play buttons
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const albumCard = this.closest('.album-card');
            const albumTitle = albumCard.querySelector('.album-info h3').textContent;
            
            // Update track info based on actual songs
            let trackName = albumTitle;
            if (albumTitle === 'IMIZAMO') {
                trackName = 'IMIZAMO';
            } else if (albumTitle === 'RETLO POPA') {
                trackName = 'RETLO POPA';
            } else if (albumTitle === 'P.E.A.C.E') {
                trackName = 'P.E.A.C.E';
            }
            
            showNotification(`🎵 Playing: ${trackName} by BIGJOHN`);
            showMusicPlayerWithTrack(trackName);
        });
    });
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        
        // Show success message
        showNotification(`✉️ Thanks ${name}! Message sent to BIGJOHN successfully.`);            // Reset form
            this.reset();
            
            // Add some visual feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sent!';
            submitBtn.style.background = '#28a745';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.album-card, .tour-date, .contact-item, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Special animation for about image
    const aboutImage = document.querySelector('.image-frame');
    if (aboutImage) {
        observer.observe(aboutImage);
        
        // Add click animation
        aboutImage.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 2000);
        });
        
        // Add floating animation every 5 seconds
        setInterval(() => {
            if (aboutImage.getBoundingClientRect().top < window.innerHeight) {
                aboutImage.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    aboutImage.style.animation = '';
                }, 1000);
            }
        }, 5000);
    }
});

// Ticket purchase simulation
document.addEventListener('DOMContentLoaded', function() {
    const ticketButtons = document.querySelectorAll('.tour-date .btn-outline');
    ticketButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const venue = this.closest('.tour-date').querySelector('.venue-info h3').textContent;
            showNotification(`🎫 Redirecting to tickets for ${venue}...`);
            
            // Simulate loading
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            setTimeout(() => {
                this.innerHTML = 'Buy Tickets';
            }, 2000);
        });
    });
});

// Social media link interactions
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let platformName = 'Social Media';
            
            if (platform.includes('spotify')) platformName = 'Spotify';
            else if (platform.includes('apple')) platformName = 'Apple Music';
            else if (platform.includes('youtube')) platformName = 'YouTube';
            else if (platform.includes('instagram')) platformName = 'Instagram';
            else if (platform.includes('twitter')) platformName = 'Twitter';
            
            showNotification(`🔗 Opening ${platformName}...`);
        });
    });
});

// Add floating music notes animation
function createFloatingNotes() {
    const notes = ['♪', '♫', '♬', '♩'];
    const hero = document.querySelector('.hero');
    
    setInterval(() => {
        const note = document.createElement('div');
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.className = 'floating-note';
        note.style.cssText = `
            position: absolute;
            color: rgba(255, 215, 0, 0.7);
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}%;
            top: 100%;
            pointer-events: none;
            animation: floatUp 4s ease-out forwards;
            z-index: 10;
        `;
        
        const floatUpKeyframes = `
            @keyframes floatUp {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        if (!document.querySelector('style[data-float-notes]')) {
            const style = document.createElement('style');
            style.setAttribute('data-float-notes', 'true');
            style.innerHTML = floatUpKeyframes;
            document.head.appendChild(style);
        }
        
        hero.appendChild(note);
        
        setTimeout(() => {
            note.remove();
        }, 4000);
    }, 2000);
}

// Start floating notes animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(createFloatingNotes, 2000);
});

// Add some CSS animations for slide-out
const additionalStyles = `
    <style>
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);
