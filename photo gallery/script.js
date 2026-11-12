const moments = [
  { 
    src:"Screenshot 2026-11-12 192708.png", title:" Central District Multimedia", year:"Aug 2026",
    desc:"Having a great time with my new family and friends.",
    why:"Being with them, I explore my creativity and passion in photography anchored in Christian values." 
  },
  
  { 
    src:"college friends.jpg", title:"College Friends", year:"2025-2026",
    desc:"Through joy and laughter, we created memories that will last a lifetime.",
    why:"The bond we share is unbreakable, and I am grateful for their presence in my life." 
  },
  
  { src:"solo date.jpg", title:"First solo date", year:"Sep 2026",
    desc:"Attaching myself to the beauty of nature, I found peace and clarity in my own company.",
    why:"No deadlines, no phones, just myself." 
  },
  
  { 
    src:"camtech photo studio team.jpg", title:"Camtech Photo Studio, my first part-time job", year:"Oct 2026",
    desc:"I learned the ropes of photography and customer service, and I gained valuable experience in a professional setting.",
    why:"I felt proud of myself for taking on a new challenge and learning new skills." 
  },
  
  { 
    src:"chess.jpg", title:"Board Games", year:"2026",
    desc:"Playing chess again, was like a trip down memory lane, and I felt a sense of nostalgia and joy.",
    why: "Chess has always been a game that I enjoy, and playing it again reminded me of the fun times I had when I was younger." 
  },
  
  { 
    src:"aoftc.jpeg", title:"Ambassadors of Faith, Love, and Hope - Templo Central", year:"July 2025",
    desc:"Enriching my faith in singing and serving the Lord through music, I found a sense of purpose and fulfillment in my life.",
    why:"The joy of serving the Lord God through music and sharing my faith with others." 
  },
  
  { 
    src:"birthday suprise in my 20th bday.jpg", title:"Birthday Suprise", year:"Apr 2026",
    desc:"My choir friends after Special Worship Service at Templo surprised me with a birthday celebration, and I felt loved and appreciated.",
    why:"The joy of being surrounded by friends who care about me and want to make me feel special." 
  },
  
  { 
    src:"camera club.jpg", title:"NEU Camera Club", year:"Nov 2025-2026",
    desc:"Being part of the School Organization, I learned new techniques and skills in photography, and I gained valuable experience in a collaborative setting.",
    why:"Developing my skills and knowledge in photography, I felt proud of myself for being part of a team that shares my passion."
  },

  { 
    src:"Orencia family .jpg", title:"Family New Year", year:"Jan 2026",
    desc:"Celebrating the New Year with my family, I felt a sense of warmth and togetherness, and I cherished the moments we shared.",
    why:"Keeping the family bond strong, I felt grateful for the love and support of my family."
  },

  { 
    src:"my everything.jpg", title:"Mama & Papa", year:"2026",
    desc:"My parents have always been my biggest supporters, and I am grateful for their love and guidance.",
    why:"The unconditional love and support of my parents has shaped who I am today."
  },

  { 
    src: "ext girls.jpg", title:"Extension Choir Girlies", year:"2026",
    desc:"Reuniting with my choir friends after a long time, I felt a sense of nostalgia and joy",
    why:"cherishing the friendships and memories that have been built over time, I felt grateful for the bond we share." 
  },

  {
    src: "boi.jpg", title:"SHS BFF date", year:"2026",
    desc:"spending quality time with my best friend from high school.",
    why:"The joy of having a close friend who understands and supports me through all of life's adventures."
  },

  {
    src: "cbi.jpg", title:"CBI", year:"2022-2024",
    desc:"I learn to be a better person and to serve fellow student through Christian Values and responsibility.",
    why: "leadership, student development enrich in my life and I am grateful for the experiences and lessons learned through Christian Values."
  }

];

const grid = document.getElementById('grid');

moments.forEach((m, i) => {
  grid.insertAdjacentHTML('beforeend', `
    <div class="col-12 col-sm-6 col-lg-3">
      <article class="card moment h-100">
        <img src="${m.src}" class="card-img-top" alt="${m.title}" data-i="${i}" loading="lazy">
        <div class="card-body">
          <div class="year">${m.year}</div>
          <h5 class="card-title mt-1">${m.title}</h5>
          <p class="card-text small">${m.desc}</p>
          <p class="why small mb-0">${m.why}</p>
        </div>
      </article>
    </div>`);
});

const modal = new bootstrap.Modal(document.getElementById('lightbox'));

grid.addEventListener('click', e => {
  const img = e.target.closest('img[data-i]');
  if (!img) return;
  const m = moments[img.dataset.i];
  document.getElementById('lbImg').src = m.src;
  document.getElementById('lbImg').alt = m.title;
  document.getElementById('lbTitle').textContent = m.title + ' (' + m.year + ')';
  document.getElementById('lbWhy').textContent = m.why;
  modal.show();
});