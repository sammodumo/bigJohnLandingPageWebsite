# Musician Landing Page

A stunning, responsive landing page for musicians with modern design and interactive features.

## Features

- **Eye-catching Hero Banner** - Perfect for showcasing your image
- **Vibrant Color Scheme** - Orange, purple, and gold gradients that draw attention
- **Responsive Design** - Looks great on all devices
- **Interactive Music Player** - Simulated music player with controls
- **Tour Dates Section** - Display upcoming concerts
- **Contact Form** - Let fans get in touch
- **Social Media Integration** - Connect with your audience
- **Smooth Animations** - Professional transitions and effects

## Color Palette

- **Primary**: Orange gradient (#ff6b35 to #e94560)
- **Secondary**: Purple gradient (#667eea to #764ba2)
- **Accent**: Gold (#ffd700)
- **Background**: Dark navy (#1a1a2e)

## Setup Instructions

1. **Add Your Images**: Replace the placeholder image references in `index.html` with your actual images:
   - `musician-banner.jpg` - Your main hero banner image (recommended: 1920x1080px)
   - `about-image.jpg` - About section image (recommended: 600x400px)
   - `album1.jpg`, `album2.jpg`, `album3.jpg` - Album cover images (recommended: 400x400px)

2. **Customize Content**: 
   - Update the musician name "Alex Rivera" with your name
   - Modify the bio and about section text
   - Update tour dates and venues
   - Change social media links to your actual profiles
   - Update contact information

3. **Colors**: The color scheme is defined in CSS variables at the top of `styles.css`. You can easily customize:
   ```css
   :root {
       --primary-color: #ff6b35;
       --secondary-color: #1a1a2e;
       --accent-color: #e94560;
       --gold-color: #ffd700;
   }
   ```

## File Structure

```
myweb/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Features Included

### Interactive Elements
- Mobile-responsive navigation
- Animated music player overlay
- Contact form with validation
- Smooth scrolling navigation
- Parallax effects
- Floating musical notes animation
- Notification system

### Sections
1. **Hero/Banner** - Main image with call-to-action buttons
2. **About** - Artist biography with statistics
3. **Music** - Album/song showcase with play buttons
4. **Tour** - Upcoming concert dates
5. **Contact** - Contact form and information
6. **Footer** - Additional links and social media

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization Tips

1. **Images**: Use high-quality images for the best visual impact
2. **Colors**: The gradient combinations create a vibrant, attention-grabbing effect
3. **Content**: Keep text concise and engaging
4. **Social Links**: Update all social media URLs to point to your actual profiles

## Adding Your Banner Image

To add your own banner image:

1. Save your image as `musician-banner.jpg` in the same folder as `index.html`
2. Or update the `src` attribute in the hero section:
   ```html
   <img src="your-image-name.jpg" alt="Your Name" class="hero-image" id="hero-image">
   ```

The banner image should be high resolution (1920x1080 or larger) for best results on all screen sizes.

## Launch Instructions

1. Open `index.html` in a web browser
2. Or use a local server for development:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - VS Code: Use Live Server extension

Enjoy your new musician landing page! 🎵
