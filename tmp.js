// =============================================
// PROJECT DATA — Edit these arrays to add projects
// For images: { type: 'image', src: 'path/to/image.jpg', label: 'Label' }
// For YouTube videos: { type: 'youtube', videoId: 'dQw4w9WgXcQ', label: 'Label' }
// =============================================

const projectData = {
  gamedev: [
    {
      name: "Echoes of the Void",
      description: "A first-person survival horror game set in an abandoned space station. Built with Unreal Engine 5, featuring dynamic lighting, AI-driven enemy behavior, and a branching narrative system. Players must manage resources while uncovering the mystery of the station's crew.",
      tags: ["Unreal Engine 5", "C++", "Horror"],
      media: [
        { type: 'image', src: './images/echoes-menu.jpg', label: 'Main Menu' },
        { type: 'image', src: './images/echoes-gameplay.jpg', label: 'Gameplay' },
        { type: 'youtube', videoId: 'dQw4w9WgXcQ', label: 'Trailer' },
      ]
    },
    {
      name: "Pixel Knights",
      description: "A 2D roguelike with procedurally generated dungeons and real-time combat. Features over 50 unique weapons, a combo system, and online co-op for up to 4 players. Developed in Unity with custom pixel art.",
      tags: ["Unity", "C#", "Roguelike"],
      media: [
        { type: 'image', src: './images/knights-combat.jpg', label: 'Combat' },
        { type: 'image', src: './images/knights-dungeon.jpg', label: 'Dungeon' },
      ]
    },
  ],
  "3d": [
    {
      name: "Mech Warrior — Hard Surface Model",
      description: "High-poly mech design created in Blender with fully rigged joints and PBR textures. Rendered in Cycles with volumetric lighting. The model contains 120k polygons with clean topology ready for game engine import.",
      tags: ["Blender", "PBR", "Hard Surface"],
      media: [
        { type: 'image', src: './images/mech-front.jpg', label: 'Front View' },
        { type: 'image', src: './images/mech-detail.jpg', label: 'Detail' },
        { type: 'youtube', videoId: 'dQw4w9WgXcQ', label: 'Turntable' },
      ]
    },
  ],
  software: [
    {
      name: "LevelForge — Level Editor Tool",
      description: "A custom node-based level editor built with C++ and ImGui. Supports drag-and-drop tile placement, layer management, and exports to multiple game engine formats. Used internally on 3 game projects.",
      tags: ["C++", "ImGui", "Tools"],
      media: [
        { type: 'image', src: './images/levelforge-ui.jpg', label: 'Interface' },
        { type: 'image', src: './images/levelforge-nodes.jpg', label: 'Node Graph' },
      ]
    },
  ],
};

// =============================================
// RENDER PROJECTS
// =============================================

function createMediaSlide(media) {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide flex items-center justify-center rounded-lg overflow-hidden bg-sol-deep';
  slide.style.aspectRatio = '16/9';

  if (media.type === 'image') {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.label;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.onerror = () => {
      // Fallback if image doesn't load
      slide.innerHTML = `
        <div class="text-center text-sol-muted">
          <i data-lucide="image" class="w-10 h-10 mx-auto mb-2 opacity-40"></i>
          <p class="text-xs font-mono opacity-60">${media.label}</p>
          <p class="text-[10px] font-mono opacity-30 mt-1">Image not found: ${media.src}</p>
        </div>
      `;
      lucide.createIcons();
    };
    slide.appendChild(img);
  } else if (media.type === 'youtube') {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${media.videoId}`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none';
    slide.appendChild(iframe);
  }

  return slide;
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card flex flex-col md:flex-row gap-6 bg-sol-surface/30 rounded-xl p-5 border border-sol-surface/50';
  card.style.transitionDelay = `${index * 0.1}s`;

  const carouselId = `carousel-${Math.random().toString(36).slice(2, 9)}`;

  // Create carousel track and add media slides
  const track = document.createElement('div');
  track.className = 'carousel-track';
  project.media.forEach(m => {
    track.appendChild(createMediaSlide(m));
  });

  const dots = project.media.map((_, i) => `
    <button data-dot="${i}" class="w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-sol-accent w-4' : 'bg-sol-muted/40'}" onclick="goToSlide('${carouselId}', ${i})"></button>
  `).join('');

  const tags = project.tags.map(t => `<span class="px-2 py-0.5 text-[10px] font-mono rounded border border-sol-accent/30 text-sol-accent/80">${t}</span>`).join('');

  // Build carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.id = carouselId;
  carouselContainer.className = 'relative overflow-hidden rounded-lg';
  carouselContainer.appendChild(track);

  // Add navigation buttons if multiple media items
  if (project.media.length > 1) {
    const btnLeft = document.createElement('button');
    btnLeft.className = 'carousel-nav-btn absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-sol-deep/70 text-sol-text flex items-center justify-center';
    btnLeft.onclick = () => moveCarousel(carouselId, -1);
    btnLeft.innerHTML = '<i data-lucide="chevron-left" class="w-4 h-4"></i>';
    carouselContainer.appendChild(btnLeft);

    const btnRight = document.createElement('button');
    btnRight.className = 'carousel-nav-btn absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-sol-deep/70 text-sol-text flex items-center justify-center';
    btnRight.onclick = () => moveCarousel(carouselId, 1);
    btnRight.innerHTML = '<i data-lucide="chevron-right" class="w-4 h-4"></i>';
    carouselContainer.appendChild(btnRight);

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5';
    dotsContainer.innerHTML = dots;
    carouselContainer.appendChild(dotsContainer);
  }

  // Build content section
  const contentDiv = document.createElement('div');
  contentDiv.className = 'md:w-1/2 flex flex-col justify-center';
  contentDiv.innerHTML = `
    <div class="flex flex-wrap gap-1.5 mb-3">${tags}</div>
    <h3 class="text-sol-heading font-bold text-xl mb-3">${project.name}</h3>
    <p class="text-sol-text text-sm leading-relaxed">${project.description}</p>
  `;

  // Build media container
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'md:w-1/2 flex-shrink-0';
  mediaDiv.appendChild(carouselContainer);

  // Add to card
  card.appendChild(mediaDiv);
  card.appendChild(contentDiv);

  return card;
}

// Carousel state
const carouselStates = {};

window.goToSlide = function(id, index) {
  const el = document.getElementById(id);
  if (!el) return;
  const track = el.querySelector('.carousel-track');
  const total = track.children.length;
  if (index < 0 || index >= total) return;
  carouselStates[id] = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  el.querySelectorAll('[data-dot]').forEach(d => {
    const di = parseInt(d.dataset.dot);
    d.className = `w-${di === index ? '4' : '2'} h-2 rounded-full transition-all ${di === index ? 'bg-sol-accent' : 'bg-sol-muted/40'}`;
  });
};

window.moveCarousel = function(id, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  const total = el.querySelector('.carousel-track').children.length;
  const current = carouselStates[id] || 0;
  const next = (current + dir + total) % total;
  goToSlide(id, next);
};

function renderAllProjects() {
  ['gamedev', '3d', 'software'].forEach(key => {
    const containerId = key === '3d' ? 'projects-3d' : key === 'software' ? 'projects-software' : 'projects-gamedev';
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    (projectData[key] || []).forEach((p, i) => {
      container.appendChild(createProjectCard(p, i));
    });
  });
  lucide.createIcons();
  observeCards();
}

// Intersection observer for fade-in
function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.project-card').forEach(c => observer.observe(c));
}

// =============================================
// ELEMENT SDK
// =============================================

const defaultConfig = {
  developer_name: 'Your Name',
  developer_title: 'Game Developer & 3D Artist',
  developer_bio: 'Passionate about creating immersive game experiences, detailed 3D worlds, and polished software tools.',
  contact_email: 'your.email@example.com',
  contact_linkedin: 'https://linkedin.com/in/yourprofile',
  contact_github: 'https://github.com/yourprofile',
  contact_gitlab: 'https://gitlab.com/yourprofile',
  contact_discord: 'YourUsername#1234',
  section_gamedev: 'Game Development & Design',
  section_3d: '3D Modelling & Art',
  section_software: 'Other Software',
  background_color: '#002630',
  surface_color: '#004153',
  text_color: '#93a1a1',
  accent_color: '#FF8904',
  heading_color: '#eee8d5',
  font_family: 'Outfit',
  font_size: 16,
};

async function onConfigChange(config) {
  const c = { ...defaultConfig, ...config };
  const $ = id => document.getElementById(id);

  $('header-name').textContent = c.developer_name;
  $('header-title').textContent = c.developer_title;
  $('hero-bio').textContent = c.developer_bio;
  $('title-gamedev').textContent = c.section_gamedev;
  $('title-3d').textContent = c.section_3d;
  $('title-software').textContent = c.section_software;
  $('nav-gamedev').textContent = c.section_gamedev.split('&')[0].trim().split(' ').slice(0,2).join(' ') || 'Game Dev';
  $('nav-3d').textContent = c.section_3d.split('&')[0].trim().split(' ').slice(0,2).join(' ') || '3D Art';
  $('nav-software').textContent = c.section_software.split('&')[0].trim().split(' ').slice(0,2).join(' ') || 'Software';

  // Contact links
  const emailVal = c.contact_email || defaultConfig.contact_email;
  $('contact-email').href = `mailto:${emailVal}`;
  $('contact-linkedin').href = c.contact_linkedin || defaultConfig.contact_linkedin;
  $('contact-github').href = c.contact_github || defaultConfig.contact_github;
  $('contact-gitlab').href = c.contact_gitlab || defaultConfig.contact_gitlab;
  const discordVal = c.contact_discord || defaultConfig.contact_discord;
  $('contact-discord').href = discordVal.includes('http') ? discordVal : `https://discord.com/users/${discordVal}`;

  // Colors
  document.body.style.backgroundColor = c.background_color;
  document.querySelectorAll('.section-divider').forEach(el => {
    el.style.background = `linear-gradient(90deg, transparent, ${c.accent_color} 20%, ${c.accent_color} 80%, transparent)`;
  });

  // Font
  const font = c.font_family || defaultConfig.font_family;
  document.body.style.fontFamily = `${font}, Outfit, sans-serif`;

  const base = c.font_size || defaultConfig.font_size;
  $('hero-bio').style.fontSize = `${base}px`;
  document.querySelectorAll('h2').forEach(el => el.style.fontSize = `${base * 1.5}px`);
  document.querySelectorAll('h3').forEach(el => el.style.fontSize = `${base * 1.25}px`);
}

function makeColorMutable(key) {
  return {
    get: () => (window.elementSdk?.config?.[key]) || defaultConfig[key],
    set: (v) => { window.elementSdk?.setConfig({ [key]: v }); }
  };
}

window.elementSdk?.init({
  defaultConfig,
  onConfigChange,
  mapToCapabilities: (config) => ({
    recolorables: [
      makeColorMutable('background_color'),
      makeColorMutable('surface_color'),
      makeColorMutable('text_color'),
      makeColorMutable('accent_color'),
      makeColorMutable('heading_color'),
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (v) => { window.elementSdk?.setConfig({ font_family: v }); }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (v) => { window.elementSdk?.setConfig({ font_size: v }); }
    },
  }),
  mapToEditPanelValues: (config) => new Map([
    ['developer_name', config.developer_name || defaultConfig.developer_name],
    ['developer_title', config.developer_title || defaultConfig.developer_title],
    ['developer_bio', config.developer_bio || defaultConfig.developer_bio],
    ['contact_email', config.contact_email || defaultConfig.contact_email],
    ['contact_linkedin', config.contact_linkedin || defaultConfig.contact_linkedin],
    ['contact_github', config.contact_github || defaultConfig.contact_github],
    ['contact_gitlab', config.contact_gitlab || defaultConfig.contact_gitlab],
    ['contact_discord', config.contact_discord || defaultConfig.contact_discord],
    ['section_gamedev', config.section_gamedev || defaultConfig.section_gamedev],
    ['section_3d', config.section_3d || defaultConfig.section_3d],
    ['section_software', config.section_software || defaultConfig.section_software],
  ]),
});

// Initial render
renderAllProjects();
onConfigChange(defaultConfig);
lucide.createIcons();
