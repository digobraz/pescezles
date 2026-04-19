/* SHARED FOOTER – edituj len tu, zmena sa prejaví na celom webe */
(function () {
    const html = `
    <footer class="bg-les-950 pt-24 pb-12 text-white relative border-t border-white/10">
        <div class="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03]" style="background-image: url('./images/1.webp');"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div class="mb-16">
                <img src="./images/pescezles-500x91-1.png" alt="PESCEZLES" class="h-12 w-auto object-contain mx-auto mb-6">
                <p class="text-pes-200 leading-relaxed text-lg font-medium max-w-2xl mx-auto">
                    Uvítame akúkoľvek pomoc, zdieľanie, správu, odporučenie, kontakt, finančnú, materiálnu alebo duševnú a fyzickú podporu. Ďakujeme vám za pomoc pri našej misii.
                </p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a href="https://www.instagram.com/pescezles/" class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-cez-600 hover:text-white transition-all transform hover:-translate-y-2 border border-white/10" target="_blank" rel="noopener"><i class="fa-brands fa-instagram text-2xl"></i></a>
                <a href="https://www.facebook.com/pescezles" class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-cez-600 hover:text-white transition-all transform hover:-translate-y-2 border border-white/10" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f text-2xl"></i></a>
                <a href="https://www.youtube.com/@pescezles" class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-cez-600 hover:text-white transition-all transform hover:-translate-y-2 border border-white/10" target="_blank" rel="noopener"><i class="fa-brands fa-youtube text-2xl"></i></a>
                <a href="https://www.tiktok.com/@stacho.man" class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-cez-600 hover:text-white transition-all transform hover:-translate-y-2 border border-white/10" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok text-2xl"></i></a>
            </div>
            <div class="mb-20">
                <a href="mailto:spolupraca@pescezles.sk" class="inline-flex flex-col items-center group">
                    <span class="text-cez-500 font-black tracking-widest uppercase text-xs mb-3">Máš nápad? Napíš nám!</span>
                    <span class="text-2xl md:text-3xl font-black text-white hover:text-cez-500 transition-colors border-b-2 border-transparent hover:border-cez-600 pb-1">spolupraca@pescezles.sk</span>
                </a>
            </div>
            <div class="border-t border-white/10 pt-10 flex justify-center items-center text-xs text-pes-200 font-bold opacity-50">
                <p>&copy; 2026 PESCEZLES. Všetky práva vyhradené.</p>
            </div>
        </div>
    </footer>
    `;
    document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
