// =============================================
// PROJECT DATA — Edit these arrays to add projects
// For images: { type: 'image', src: 'path/to/image.jpg', label: 'Label' }
// For YouTube videos: { type: 'youtube', videoId: 'dQw4w9WgXcQ', label: 'Label' }
// =============================================

const projectData = {
  gamedev: [
    {
      name: "Swift Wind - WIP",
      description: "Fast-paced 2D action platformer game, where players must complete objectives as quickly as possible and try to optimize every level. Set in Japanese fantasy Sengoku period (1467 - 1603) you take on the role of a samurai wielding the cursed sword Swift Wind, who must fulfill his quest to lift the curse that binds him to the sword.",
      tags: ["Unity", "C#", "Action", "Platformer", "Speedrunning", "Team Project"],
      media: [
        { type: 'youtube', videoId: 'qRSlem80AvU', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/2.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/4.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/5.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/6.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Swift Wind/7.png', label: 'Front View' },
      ]
    },
    {
      name: "Spaceshi_ Captain",
      description: "My first finished Unity project. Simple top-down space-shooter, with 3 levels, ship stat upgrades, and weapon upgrades. In the first level you only face meteors, in the second one enemy ships arrive, and the third one combines both ending with a boss fight. Also has an Android version with usable controls. Meant to be a simple intro GameDev project. All the models are made by me.",
      tags: ["Unity", "C#", "Arcade", "Space-shooter", "Solo Project"],
      media: [
        { type: 'youtube', videoId: 'bvuPAoTLhUA', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/2.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/4.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/5.png', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Space/6.png', label: 'Front View' },
      ],
      downloadUrl: "https://jasinop.itch.io/spaceshi-captain"
    },
    {
      name: "Frenzypede",
      description: "Nature is cruel and its only rule is kill or be killed, or rather eat or be eaten. You are a lonely centipede just hatching into this disastrous world and you have only 1 goal: BE THE BIGGEST CENTIPEDE THE WORLD HAS EVER SEEN! How will you achieve this? By eating every fruit in your path? Killing (mostly) harmless insects? Or perhaps even going after your sibling centipedes?",
      tags: ["Card Game", "nanDeck", "Party Game", "Team Project"],
      media: [
        { type: 'image', src: 'assets/GameDev/Frenzypede/1.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Frenzypede/2.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/GameDev/Frenzypede/3.jpg', label: 'Front View' },
      ],
      downloadUrl: 'https://github.com/Jasinop/Frenzypede/blob/playtest-print/frenzypede-print-compressed.pdf'
    },
    {
      name: "Lost in Minds - WIP",
      description: "Memory game, where you play as a forgetful dwarf moving through the hexagonal mines, looking for rare gem-pairs to dig up, finding helpful equipment on the way and lighting up important places you visited with a torch to not forget your path. You compete with other dwarfs to find the most gems by getting to the gem-pairs first and stealing partially claimed gems from your opponents. Make sure you don’t get lost by forgetting which tiles you explored, and don’t be afraid to confuse your opponents by lying about the layout of the mines.",
      tags: ["Board Game", "nanDeck", "Memory", "Team Project"],
      media: [
        { type: 'image', color: '#1a2a3a', label: 'WIP' },
      ]
    },
  ],
  "3d": [
    {
      name: "Coffee Mill — Model a real world object",
      description: "A simple model I made for an assignment. The goal was to choose an object somewhere in the real world, gather reference images of it, and model it accurately according to the references. I used polygonal modelling for building the mesh, and very simple materials to get a similar look to the real one.",
      tags: ["Blender", "Polygonal Modelling", "Real world recreation"],
      media: [
        { type: 'image', src: 'assets/Blender/Coffee Mill/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/2.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/4.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/5.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/6.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/7.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/8.jpg', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Coffee Mill/9.png', label: 'Front View' },
      ]
    },
    {
      name: "Funky Goblin — Model a character head",
      description: "This was my first experience with sculpting and texture painting. The model was for an assignment for an advanced course focused on the entire process of designing, modelling, texturing and presenting one's own character. I made the eye materials using Blender nodes, the hair with particle systems, and the skin and scar textures in Substance Painter. I am now working on another character for a full body project, where I hope to learn from this one, and sculpt the mesh more properly for a better topology.",
      tags: ["Blender", "Sculpting", "Texture painting", "Substance Painter", "Character Design"],
      media: [
        { type: 'image', src: 'assets/Blender/Goblin/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/2.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/4.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/5.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/6.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/7.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/8.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/9.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Goblin/10.png', label: 'Front View' },
      ]
    },
    {
      name: "Hexblade — Model a robotic character",
      description: "A multi-part mechanical model that I created for an assignment with the goal of designing, modelling, and texturing a robotic character. The idea was to aim for some kind of robotic guard/warrior, which has an idle state and an alerted state. All the parts of the robot were designed with the movement of the whole contraption in mind. The model is not constrained, but the joints can simulate realistic bending and if animated, the movement of the robot would look fine. I made all the materials in Blender nodes.",
      tags: ["Blender", "Polygonal Modelling", "Procedural materials", "Robot", "Character Design"],
      media: [
        { type: 'youtube', videoId: 'nqVq-6KmrDE', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Robot/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Robot/2.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Robot/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Robot/4.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Robot/5.png', label: 'Front View' },
      ]
    },
    {
      name: "Temple Heist — Make an animation",
      description: "The aim of this assignment was to create an animated story. I chose to design a minimalistic futuristic temple with a mysterious artifact hovering in the middle of the room. I used particle systems to create the animated pillars in the room. The hand was not modelled or painted by me, but I modified it with a capturing device for the artifact and fully rigged it to prepare it for the animation.",
      tags: ["Blender", "Polygonal Modelling", "Animation", "Environment Design", "Model Rigging"],
      media: [
        { type: 'youtube', videoId: 'J2IIZ8ItM7Q', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Anim/1.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Anim/2.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Anim/3.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Anim/4.png', label: 'Front View' },
        { type: 'image', src: 'assets/Blender/Anim/5.png', label: 'Front View' },
      ]
    },
  ],
  software: [
    {
      name: "Bachelor Thesis - Interactive 2D Scene Drawing and Lighting with Global Illumination",
      description: "An application which allows the user to draw shapes with different properties, such as lights, walls and transparent objects, into a 2D scene. The application computes real-time global illumination for the dynamic 2D scene utilising its own rendering engine based on OpenGL. In order to compute global illumination, the Path Tracing algorithm is used together with several optimisation techniques. The Digital Differential Analyzer (DDA) algorithm is used to sample the scene during tracing and a Distance Map is utilised to skip over empty pixels. The application also offers a graphical user interface which allows: the setting of drawing and rendering related properties, accessing different visualisation modes, and saving/loading drawn scenes as images.",
      tags: ["C++", "ImGui", "OpenGL", "GLSL", "Path Tracing", "Global Illumination", "Drawing", "Real-time lighting"],
      media: [
        { type: 'youtube', videoId: 'GbpzxVkxuvQ', label: 'Front View' },
        { type: 'image', src: 'assets/Other/Thesis/1.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/Thesis/2.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/Thesis/3.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/Thesis/4.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/Thesis/5.png', label: 'Interface' },
      ],
      downloadUrl: 'https://is.muni.cz/th/g0ajr/'
    },
    {
      name: "Mystic Land - Walkable first person 3D scene showcasing various CG techniques",
      description: "An application made without any existing game engine, rendering engine or physics engine. The goal was to work with low-level CG, everything is coded in C++ utilising OpenGL and simple shaders meant to showcase different CG techniques. Techniques I implemented include: environmental mapping with a skybox, normal mapping on the pavement, cone lights and fog simulation. The assets present in the scene are mainly there to showcase the techniques, and they were not created by me.",
      tags: ["C++", "OpenGL", "GLSL", "Environmental Mapping", "Low-level"],
      media: [
        { type: 'youtube', videoId: 'f2nXK0ui0FU', label: 'Front View' },
        { type: 'image', src: 'assets/Other/CGAPI/1.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/CGAPI/2.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/CGAPI/3.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/CGAPI/4.png', label: 'Interface' },
        { type: 'image', src: 'assets/Other/CGAPI/5.png', label: 'Interface' },
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
    <div class="flex items-start justify-between gap-4 mb-3">
      <div class="flex flex-wrap gap-1.5">${tags}</div>
      ${project.downloadUrl ? `
        <a href="${project.downloadUrl}" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 w-8 h-8 rounded-lg bg-sol-surface/50 hover:bg-sol-accent/20 border border-sol-surface/50 hover:border-sol-accent/40 flex items-center justify-center transition-all duration-200 text-sol-text hover:text-sol-accent" title="Download">
          <i data-lucide="download" class="w-4 h-4"></i>
        </a>
      ` : ''}
    </div>
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
  developer_name: 'Patrik Jašo',
  developer_title: 'Game Developer & 3D Artist',
  developer_bio: '“Great results, can be achieved with small forces.” ― Sun Tzu, The Art of War',
  contact_email: 'pjasinop@gmail.com',
  contact_linkedin: 'https://www.linkedin.com/in/patrik-ja%C5%A1o-557150397/',
  contact_github: 'https://github.com/Jasinop',
  contact_itchio: 'https://jasinop.itch.io/',
  contact_discord: 'https://discord.com/users/383933267021266957',
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
  $('contact-itchio').href = c.contact_itchio || defaultConfig.contact_itchio;
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

// Initial render
renderAllProjects();
onConfigChange(defaultConfig);
lucide.createIcons();
