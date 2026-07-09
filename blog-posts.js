/* SHARED BLOG – JEDINÝ ZDROJ PRAVDY.
   Nový článok = pridaj OBJEKT HORE (najnovší prvý). Automaticky sa zobrazí:
     - na homepage (index.html) prvé 3 karty,
     - na /blog (blog.html) všetky.
   Netreba už editovať HTML na dvoch miestach – stačí tento zoznam.

   Polia:
     url       – cieľová URL (bez domény)
     img       – titulný obrázok
     imgFallback – (voliteľné) náhrada ak img zlyhá
     category  – farebný štítok na homepage (Záchrana / Osveta / Zdravie / Road Trip …)
     listTag   – (voliteľné) štítok na /blog; default "BLOG"
     title     – nadpis
     excerpt   – krátky popis
     badge     – (voliteľné) rožtek, napr. "Novinka" (na homepage) */
(function () {
    const POSTS = [
        {
            url: 'blog/svajciarsko-so-psom-low-budget-road-trip',
            img: '/BLOG/SWISS/foto/webp/titulka.webp',
            category: 'Road Trip',
            listTag: 'BLOG · ROAD TRIP',
            title: 'Švajčiarsko na vlastnú päsť (so psom)',
            excerpt: '8 dní, vyše 2000 km a rozpočet do tisícky. Ako prejsť najdrahšiu krajinu Európy takmer zadarmo — trasa, jazerá, ceny a tipy.',
            badge: 'Novinka'
        },
        {
            url: 'blog/blog-mnaucin',
            img: './FOTO/projekt-mnaucin.jpg',
            imgFallback: './images/1.webp',
            category: 'Záchrana',
            title: 'Misia Mňaučín',
            excerpt: 'Príbeh štyroch mačičiek (Berta, Bela, Bejby a Beo), ktoré vďaka láske napokon dostali druhú šancu na život.'
        },
        {
            url: 'blog/kauza-fifinka-vrazedna-turistika-a-zlyhanie-statu',
            img: './images/kauza-fifinka-thumbnail.png',
            imgFallback: './FOTO/fifinka.png',
            category: 'Osveta',
            title: 'KAUZA FIFINKA. Vražedná turistika a zlyhanie štátu',
            excerpt: 'Prípad turistov vs štát a kruté podmienky v ktorých psy niekedy musia prežívať.'
        },
        {
            url: 'blog/ako-sa-ochranit-psa-pred-kliestami-zazracna-tabletka-neexistuje',
            img: './images/Ako-ochranit-psa-pred-kliestami-600x400.jpg',
            imgFallback: './images/1.webp',
            category: 'Zdravie',
            title: 'Ako ochrániť psa pred kliešťami: Zázračná tabletka (ne)existuje',
            excerpt: 'Opäť je tu to ročné obdobie. Slnko svieti a kliešte lezúce na našich psoch pribúdajú.'
        },
        {
            url: 'blog/cesta-snp-so-psom-vybava-3-cast',
            img: './images/Cesta-SNP-so-psom-2022-vybava-pescezles.sk_-600x400.jpg',
            category: 'Cesta SNP',
            title: 'Cesta SNP so psom - Výbava (3.časť)',
            excerpt: 'Zážitky z putovania Cestou SNP. Naša životná výzva a odhodlanie.'
        },
        {
            url: 'blog/cesta-snp-so-psom-priprava-2-cast',
            img: './images/Cesta-SNP-so-psom-Priprava-2.cast-Nahladovy-obrazok-Pescezles-768x512.jpg',
            category: 'Cesta SNP',
            title: 'Cesta SNP so psom - Príprava (2.časť)',
            excerpt: 'Ako sa pripraviť na najväčšie turistické dobrodružstvo Slovenska s najlepším chlpatým kamošom.'
        },
        {
            url: 'blog/cesta-snp-so-psom-pociatok-1-cast',
            img: './images/Cesta-SNP-so-psom-pociatok-titulna-foto-pescezles.sk--600x400.jpg',
            category: 'Cesta SNP',
            title: 'Cesta SNP so psom - Počiatok (1.časť)',
            excerpt: 'Keď sme prvýkrát spravili ten rozhodujúci krok. História sa začala písať.'
        }
    ];

    const fb = (p) => p.imgFallback ? ` onerror="this.onerror=null;this.src='${p.imgFallback}'"` : '';

    // Karta pre homepage (bohatší štýl + Novinka rožtek + šípka)
    function homeCard(p) {
        const badge = p.badge
            ? `<div class="absolute top-0 right-8 transform -translate-y-1/2"><span class="bg-les-950 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">${p.badge}</span></div>`
            : '';
        return `
                <article onclick="location.href='${p.url}'" class="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-white flex flex-col group hover:-translate-y-4 transition-transform duration-500 hover:shadow-2xl hover:shadow-cez-900/10 cursor-pointer">
                    <a href="${p.url}" class="aspect-video bg-les-900 overflow-hidden relative block">
                        <div class="absolute inset-0 bg-les-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img src="${p.img}"${fb(p)} alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    </a>
                    <div class="p-8 flex flex-col flex-grow relative bg-white">
                        ${badge}
                        <span class="text-xs uppercase font-bold text-les-500 tracking-wider mb-3">${p.category}</span>
                        <h3 class="text-2xl font-black mb-4 text-les-950 group-hover:text-cez-600 transition-colors leading-tight">${p.title}</h3>
                        <p class="text-les-800 mb-8 flex-grow font-medium leading-relaxed">${p.excerpt}</p>
                        <a href="${p.url}" class="flex items-center font-black text-les-950 group-hover:text-cez-600 transition-colors w-max uppercase text-sm tracking-widest">
                            Prečítať viac <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </article>`;
    }

    // Karta pre /blog (jednoduchší štýl)
    function listCard(p) {
        const tag = p.listTag || 'BLOG';
        return `
            <a href="${p.url}" class="bg-white rounded-3xl overflow-hidden shadow-lg border border-pes-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <div class="relative overflow-hidden" style="aspect-ratio:16/9">
                    <img src="${p.img}"${fb(p)} alt="${p.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-8 flex flex-col flex-grow">
                    <span class="text-xs uppercase font-bold text-les-600 tracking-wider mb-2">${tag}</span>
                    <h3 class="text-2xl font-black mb-4 group-hover:text-cez-600 transition-colors">${p.title}</h3>
                    <p class="text-les-800 mb-6 flex-grow">${p.excerpt}</p>
                    <span class="font-bold text-les-950 pb-1 border-b-2 border-les-900 inline-block w-max group-hover:text-cez-600 group-hover:border-les-600">PREČÍTAŤ</span>
                </div>
            </a>`;
    }

    const home = document.getElementById('blog-grid-home');
    if (home) home.innerHTML = POSTS.slice(0, 3).map(homeCard).join('');

    const list = document.getElementById('blog-grid-list');
    if (list) list.innerHTML = POSTS.map(listCard).join('');
})();
