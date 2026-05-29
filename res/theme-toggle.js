(function() {
	// --- DOM elemek ---
	const lightBtn = document.querySelector('.theme-btn[data-mode="light"]');
	const darkBtn = document.querySelector('.theme-btn[data-mode="dark"]');
	const autoBtn = document.querySelector('.theme-btn[data-mode="auto"]');
	const allBtns = [lightBtn, darkBtn, autoBtn];
	
	// --- Állapotok ---
	let selectedMode = 'auto';     // 'light', 'dark', 'auto'
	let systemThemeListener = null;
	let mediaQueryList = null;

	// --- Segédfüggvények ---
	// Lekéri a rendszer aktuális preferenciáját ('light' vagy 'dark')
	function getSystemPreference() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	// Tényleges téma alkalmazása a body-ra (data-theme attribútum)
	function setEffectiveTheme(theme) {
		// theme = 'light' vagy 'dark'
		document.body.setAttribute('data-theme', theme);
		// Frissítjük a státuszjelző feliratot (a kiválasztott módot mutatja, de a tényleges témát is)
		updateStatusText();
	}

	// Aktív osztályok frissítése a három gomb között (kizárólag a selectedMode alapján)
	function updateActiveButtonClass() {
		allBtns.forEach(btn => {
			const mode = btn.getAttribute('data-mode');
			if (mode === selectedMode) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		});
	}

	// Auto mód esetén feliratkozás a rendszertéma változásra, light/dark esetén leiratkozás
	function manageSystemListener() {
		// Előző listener eltávolítása, ha létezik
		if (systemThemeListener && mediaQueryList) {
			mediaQueryList.removeEventListener('change', systemThemeListener);
			systemThemeListener = null;
			mediaQueryList = null;
		}
		
		if (selectedMode === 'auto') {
			// Beállítjuk a mediaquery figyelőt
			const mq = window.matchMedia('(prefers-color-scheme: dark)');
			mediaQueryList = mq;
			// Listener függvény
			const handler = (e) => {
				const newSystemTheme = e.matches ? 'dark' : 'light';
				setEffectiveTheme(newSystemTheme);
				// Csak a téma frissül, a selectedMode továbbra is 'auto' marad, az ikon színes marad
				updateStatusText();
			};
			systemThemeListener = handler;
			// Hozzáadjuk az eseményfigyelőt
			if (mq.addEventListener) {
				mq.addEventListener('change', handler);
			} else {
				// Régebbi böngésző kompatibilitás
				mq.addListener(handler);
			}
			// Azonnal beállítjuk a tényleges témát a rendszer szerint
			const currentSys = getSystemPreference();
			setEffectiveTheme(currentSys);
		} else {
			// light vagy dark mód: fixen a kiválasztott témát alkalmazzuk
			setEffectiveTheme(selectedMode);
		}
	}

	// Teljes frissítés: tárolás, aktív gomb osztály, téma alkalmazása, listener kezelés, státusz
	function applyFullMode(mode) {
		selectedMode = mode;
		// localStorage mentés
		localStorage.setItem('themeMode', mode);
		// Aktív gomb osztály frissítése (ikon színes lesz a kiválasztott gombon)
		updateActiveButtonClass();
		// Kezeljük a rendszerlistener-t és állítsuk be a tényleges témát
		manageSystemListener();
		// plusz: ha auto, akkor a fenti manageSystemListener már beállítja a correct effective theme-t.
		// Frissítsük a státusz szöveget
		updateStatusText();
	}

	// --- Gomb eseménykezelők ---
	function onModeClick(mode) {
		return () => {
			if (selectedMode === mode) return; // már ebben a módban vagyunk, nincs változás
			applyFullMode(mode);
		};
	}

	// Inicializálás: betöltéskor localStorage + rendszerbeállítások
	function init() {
		// Előzmény lekérése
		const savedMode = localStorage.getItem('themeMode');
		let initialMode = 'auto';  // alapértelmezett
		
		if (savedMode && (savedMode === 'light' || savedMode === 'dark' || savedMode === 'auto')) {
			initialMode = savedMode;
		} else {
			// ha nincs mentve, alapértelmezett auto, de mentsük is el
			localStorage.setItem('themeMode', 'auto');
		}
		
		// Gombok eseményeinek regisztrálása
		lightBtn.addEventListener('click', onModeClick('light'));
		darkBtn.addEventListener('click', onModeClick('dark'));
		autoBtn.addEventListener('click', onModeClick('auto'));
		
		// Alkalmazzuk a kezdeti módot
		selectedMode = initialMode;
		updateActiveButtonClass();
		
		// Beállítjuk a témakezelést
		if (selectedMode === 'auto') {
			// auto mód: beállítjuk a rendszerlistener-t és a tényleges témát
			const mq = window.matchMedia('(prefers-color-scheme: dark)');
			mediaQueryList = mq;
			const handler = (e) => {
				// Csak ha még mindig auto mód aktív (lehet, hogy közben a felhasználó nem váltott)
				if (selectedMode === 'auto') {
					const newTheme = e.matches ? 'dark' : 'light';
					setEffectiveTheme(newTheme);
					updateStatusText();
				}
			};
			systemThemeListener = handler;
			if (mq.addEventListener) {
				mq.addEventListener('change', handler);
			} else {
				mq.addListener(handler);
			}
			// Kezdeti téma a rendszer szerint
			const startSys = getSystemPreference();
			setEffectiveTheme(startSys);
		} else {
			// light vagy dark fix
			setEffectiveTheme(selectedMode);
		}
		
		updateStatusText();
		
		// Egy extra biztonság: ha auto módban a kezdeti beállítás után frissítjük az aktív osztályt
		// illetve a localStorage konzisztens
	}

	// Az oldalon található info gomb csak egy kis interakciót mutat a jelenlegi témával kapcsolatban
	const infoButton = document.getElementById('infoBtn');
	if (infoButton) {
		infoButton.addEventListener('click', () => {
			const currentTheme = document.body.getAttribute('data-theme') || 'light';
			const modeText = currentTheme === 'light' ? '☀️ Világos' : '🌙 Sötét';
			const selectedModeText = 
				selectedMode === 'light' ? 'világos fix mód' :
				(selectedMode === 'dark' ? 'sötét fix mód' : 'automata (rendszerkövető)');
			alert(`Jelenleg a téma: ${modeText}\nA kapcsoló állása: ${selectedModeText}\nAz aktív gomb ikonja színes, a többiek szürkék.`);
		});
	}
	
	// Indítás
	init();
})();