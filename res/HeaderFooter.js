class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="nav-menu-button" id="nav-menu-button">
				<button type="button" class="nav-menu-b" id="nav-menu-b" aria-label="Menü">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" class="nav-menu-icon" aria-hidden="true">
						<path d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"/>
						<path d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"/>
						<path d="m 3,15 c 0,-0.5523 0.44772,-1 1,-1 h 6 c 0.5523,0 1,0.4477 1,1 0,0.5523 -0.4477,1 -1,1 H 4 C 3.44772,16 3,15.5523 3,15 Z"/>
					</svg>
				</button>
		</div>
		<div class="top-bar">
        <div class="container">
			<p class=elerhetosegek>2400 Dunaújváros, Dózsa György út 15/A <br> OM azonosító: 030180</p>
            <div class="social">
				<a class="top-gomb" aria-label="Facebook oldal megnyitása" href="https://www.facebook.com/szigdujv" rel="noopener noreferrer" title="Facebook" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" focusable="false" class="chakra-icon css-1j8cdq4" aria-hidden="true">
						<g fill="" fill-rule="evenodd">
							<g fill="" fill-rule="nonzero">
								<g>
									<g>
										<g>
											<path d="M17.5 4.167v11.666c0 .92-.746 1.667-1.667 1.667h-3.125c-.23 0-.416-.187-.416-.417v-5h1.95c.198 0 .368-.139.408-.333l.3-1.5c.012-.06-.003-.124-.041-.172-.04-.048-.097-.077-.159-.078h-2.458V7.292c0-.115.093-.209.208-.209h2.083c.23 0 .417-.186.417-.416v-1.25c0-.23-.187-.417-.417-.417H12.5C11.12 5 10 6.12 10 7.5V10H8.975c-.23 0-.417.187-.417.417v1.25c0 .23.187.416.417.416H10v5c0 .23-.187.417-.417.417H4.167c-.92 0-1.667-.746-1.667-1.667V4.167c0-.92.746-1.667 1.667-1.667h11.666c.92 0 1.667.746 1.667 1.667z" transform="translate(-1132 -15) translate(962 9) translate(164) translate(6 6)">
											</path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</a>
				<a class="top-gomb" aria-label="TikTok profil megnyitása" href="https://www.tiktok.com/@szig_tiktok" title="TikTok" target="_blank" rel="noopener noreferrer">
					<svg width="20px" height="20px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
						<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z">
						</path>
					</svg>
				</a>
				<div class="top-gomb" id="theme-switch" role="group" aria-label="Színséma választó">
					<button class="theme-btn" data-mode="light" aria-label="Világos téma">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"></path></svg>
					</button>
					<button class="theme-btn" data-mode="dark" aria-label="Sötét téma">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path></svg>
					</button>
					<button class="theme-btn" data-mode="auto" aria-label="Automatikus (rendszerkövető)">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M337.5-463Q311-498 289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396q-32-32-58.5-67ZM567-364.5Q630-328 702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452q51 51 114 87.5ZM743-380q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z"></path></svg>
					</button>
				</div>
			</div>
        </div>
    </div>
	
	<div class="logo">
                <div class="logo-img"></div>
                <div class="logo-text">
                    <h1>Dunaújvárosi Széchenyi István Gimnázium</h1>
                </div>
            </div>
	
	<div class="main-nav">
        <div class="nav-menu">
            <ul class="nav-links" id=navLinks>
                <li>
					<a href="/" class="nav-b">Főoldal</a>
				</li>
                <li>
					<a href="https://szig-dujv.hu/" class="nav-b">szig-dujv.hu/</a>
				</li>
				<a class="G-class" href="https://classroom.google.com/" rel="noopener noreferrer" target="_blank">
					<span class="LMS-logo">
						<svg viewBox="0 0 448 448" height="16" width="16">
  							<path d="m 441.16,189.48 -2.26,-9.59 H 230.46 v 88.22 H 355 c -12.93,61.4 -72.93,93.72 -121.94,93.72 -35.66,0 -73.25,-15 -98.13,-39.11 a 140.08,140.08 0 0 1 -41.8,-98.88 c 0,-37.16 16.7,-74.33 41,-98.78 24.3,-24.45 61,-38.13 97.49,-38.13 41.79,0 71.74,22.19 82.94,32.31 L 377.25,56.88 C 358.86,40.72 308.34,0 229.6,0 V 0 C 168.85,0 110.6,23.27 68.02,65.71 26,107.5 4.25,167.93 4.25,224 c 0,56.07 20.58,113.48 61.3,155.6 43.51,44.92 105.13,68.4 168.58,68.4 57.73,0 112.45,-22.62 151.45,-63.66 38.34,-40.4 58.17,-96.3 58.17,-154.9 0,-24.67 -2.48,-39.32 -2.59,-39.96 z"></path>
						</svg>
					</span>CLASSROOM
				</a>
				<a class="nav-kreta" href="https://klik030180001.e-kreta.hu" rel="noopener noreferrer" target="_blank">
					<span class="LMS-logo">
						<svg width="16px" height="16px" viewBox="0 0 20 20">
							    <path d="M 0,0 H 5.233 V 6.603 L 10.979,0 h 7.645 L 9.682,10.13 19.364,20.261 H 10.979 L 5.233,13.67 v 6.591 H 0 Z" id="path1"></path>
							    <path d="M 12.976,10.081 21.268,1.479 V 18 Z" id="path2"></path>
						</svg>
					</span>KRÉTA
				</a>
			</ul>
        </div>
    </div>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>Dunaújvárosi Széchenyi István Gimnázium</h4>
                    <p>2400 Dunaújváros, Dózsa György út 15/A</p>
                    <p>OM azonosító: 030180</p>
                    <p>Dunaújvárosi Tankerületi Központ</p>
                </div>
                <div class="footer-col">
                    <h4>Hasznos linkek</h4>
                    <p><a href="#">Adatkezelési tájékoztató</a></p>
                    <p><a href="#">Felvételi információk</a></p>
                    <p><a href="#">...</a></p>
                </div>
            </div>
            <div class="copyright">
                &copy; Dunaújvárosi Széchenyi István Gimnázium
            </div>
        </div>
    </footer>
		`
	}
}

customElements.define('my-footer', MyFooter)
