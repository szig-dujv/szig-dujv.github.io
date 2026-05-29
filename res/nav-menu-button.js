// 1) Hamburger menü kezelése
    const hamburger = document.getElementById('nav-menu-b');
    const navMenu = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
		
		// EZ AZ ÚJ RÉSZ: Kezeljük a body görgetését
		if (navMenu.classList.contains('active')) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

    });

    // 2) Mobil nézetben a submenu-k nyitogatása (kattintásra)
    // Megkeressük az összes .has-submenu elemet
    const submenuParents = document.querySelectorAll('.has-submenu');
    
    function closeAllDropdowns(exceptElement = null) {
        submenuParents.forEach(parent => {
            const dropdown = parent.querySelector('.dropdown-menu');
            if (dropdown && parent !== exceptElement) {
                dropdown.classList.remove('show');
            }
        });
    }

    // Asztali nézetben hover működik, de mobilban a kattintás váltja
    // Annak érdekében, hogy ne zavarja a hover-t asztalon, csak max-width 900px alatt aktiváljuk a kattintásos viselkedést.
    function handleMobileSubmenu() {
        const isMobile = window.innerWidth <= 900;
        submenuParents.forEach(parent => {
            const link = parent.querySelector('a');
            const dropdown = parent.querySelector('.dropdown-menu');
            if (!dropdown) return;

            if (isMobile) {
                // Mobil: kattintásra nyitjuk/csukjuk
                parent.style.cursor = 'pointer';
                link.addEventListener('click', (e) => {
                    // Csak akkor akadályozzuk a link alapértelmezett ugrását, ha a dropdown nyitását szeretnénk.
                    // Ha a dropdown nyitva van és a linkre kattint, akkor menjen a céloldalra? Itt demo: nem akadályozzuk, de a dropdown viselkedést kezeljük.
                    // De hogy ne ugorjon el az oldal tetejére (mert a link #), meggátoljuk az alapértelmezettet, ha szükséges.
                    if (link.getAttribute('href') === '#') {
                        e.preventDefault();
                    }
                    // Bezárjuk a többit
                    closeAllDropdowns(parent);
                    dropdown.classList.toggle('show');
                });
            } else {
                // Asztali: hover alapú, biztosítjuk hogy a .show class ne legyen aktív
                dropdown.classList.remove('show');
                // Eltávolítjuk a kattintás eseményt (ha korábban hozzáadtuk)
                link.removeEventListener('click', () => {});
            }
        });
    }

    // Inicializálás és ablak átméretezéskor újraalkalmazzuk
    handleMobileSubmenu();
    window.addEventListener('resize', () => {
        // Ha asztalira váltunk és a mobil menü nyitva volt, zárjuk be
        if (window.innerWidth > 900 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
        handleMobileSubmenu();
        // Továbbá minden dropdown .show class-t eltávolítunk asztali nézetben
        if (window.innerWidth > 900) {
            document.querySelectorAll('.dropdown-menu.show').forEach(d => d.classList.remove('show'));
        }
    });

    // Kereső gomb demo
    const searchBtn = document.querySelector('.search-icon');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => alert('Keresés funkció – itt nyithatnál keresőmodált.'));
    }

    // Aktív link kiemelés (ha rákattintanak egy sima linkre)
    const allLinks = document.querySelectorAll('.nav-menu li a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Csak a nem submenu szülő linkeknél vagy sima linkeknél
            const parentLi = this.closest('li');
            if (parentLi && !parentLi.querySelector('.dropdown-menu')) {
                allLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
            // Mobil menüben kattintás után ha nem submenu-zárás, bezárjuk a menüt
            if (window.innerWidth <= 900 && !parentLi?.querySelector('.dropdown-menu')) {
                navMenu.classList.remove('active');
            }
        });
    });
