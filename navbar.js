let link = window.location.href;
let path = link.split('/');
let routeChecker = (pathCheck) => `${path == pathCheck ? 'w--current' : ''}`;
let aboutLink = `<li><a href="./about.html" class="nav-link-2 ">ABOUT</a>
                    </li>`;
let homeLink = `https://saravanan-murugan.webflow.io/`;
let projectLink = `./project.html`;
path = path[path.length - 1]
path = path.split('.');
path = path[0];
document.getElementById('addNavBar').insertAdjacentHTML('beforeend', 
`<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease-out-quad" data-easing2="ease-in-quad" role="banner" class="navbar-no-shadow-container w-nav">
    <div class="container-regular">
        <div class="navbar-wrapper">
            <a href="/" aria-current="page" class="navbar-brand w-nav-brand w--current" aria-label="home">
                <img src="https://uploads-ssl.webflow.com/6267b69b3043423e90c33ceb/63cac271550bb066d7200d10_Wolf.jpg"
                    loading="lazy" width="170" height="Auto" alt="Wolf logo">
            </a>
            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                <ul role="list" class="nav-menu w-list-unstyled">
                    <li class="list-item-14">
                        <a href="https://saravanan-murugan.webflow.io/" aria-current="page" class="nav-link-2 ${routeChecker('home')}">HOME</a>
                    </li>
                    <li class="list-item-15"><a href="https://saravananmurugan06.github.io/project.html"
                            class="nav-link-2 ${routeChecker('project')}">PROJECTS</a></li>
                    <li class="list-item-16"><a href="https://demo-site-fa1620.webflow.io" class="nav-link-2 ${routeChecker('about')}">ABOUT</a>
                    </li>
                    <li class="list-item-17"><a href="/contact" class="nav-link-2">CONTACT</a></li>
                    <li class="mobile-margin-top-10">
                        <div class="nav-button-wrapper">
                            <a href="tel:91+8870023236" class="button-primary w-button">CONNECT</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button"
                tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div class="w-icon-nav-menu">
                </div>
            </div>
        </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>`)

document.getElementById('addFooterBar').insertAdjacentHTML('beforeend', `
<div class="container-8">
    <div class="footer-wrapper-three-2"><a href="/" aria-current="page" class="w-inline-block w--current"><img
                src="https://uploads-ssl.webflow.com/6267b69b3043423e90c33ceb/6427d19c2b8b8c5130431476_Wolf.webp"
                loading="lazy" width="152.5" alt="Wolf Logo"></a>
        <div class="footer-block-three-2"><a href="${homeLink}" aria-current="page"
                class="footer-link-three-2 ${path == 'project' ? 'w--current' : ''}">Home</a><a href="${projectLink}"
                class="footer-link-three-2 ${path == 'project' ? 'w--current' : ''}">Projects</a><a href="/contact" class="footer-link-three-2">Contact</a>
        </div>
        <div class="footer-social-block-three-2"><a href="http://www.dribbble.com/Saravanan_Murugan" target="_blank"
                class="footer-social-link-three-2 w-inline-block"><img
                    src="https://uploads-ssl.webflow.com/6267b69b3043423e90c33ceb/6325f4304d23be236a27127c_Dribbble.webp"
                    loading="lazy" width="24" alt="Dribbble Logo" class="image-15"></a><a
                href="http://www.twitter.com/Saravan73122331" target="_blank"
                class="footer-social-link-three-2 w-inline-block"><img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ab37a12aaf0_twitter%20big.svg"
                    loading="lazy" width="24" alt="Twitter Logo" class="image-16"></a><a
                href="http://www.instagram.com/designers_hook/" target="_blank"
                class="footer-social-link-three-2 w-inline-block"><img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a61f512aaed_instagram%20big.svg"
                    loading="lazy" width="24" alt="Instagram Logo" class="image-17"></a><a
                href="http://www.linkedin.com/in/saravanan-murugan-576947145/" target="_blank"
                class="footer-social-link-three-2 w-inline-block"><img
                    src="https://uploads-ssl.webflow.com/6267b69b3043423e90c33ceb/632618e19afbe105d3aabf1a_Linkedin.webp"
                    loading="lazy" width="24" alt="Linkedin Logo" class="image-18"></a></div>
    </div>
    <div class="footer-divider-two-2"></div>
    <div class="footer-bottom-2">
        <div class="footer-copyright-2">© 2022 Wolf. All rights reserved</div>
    </div>
</div>`)

    