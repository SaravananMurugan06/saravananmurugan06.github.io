let link = window.location.href;
let path = link.split('/');
path = path[path.length - 1]
path = path.split('.');
path = path[0];
document.getElementById('addNavBar').insertAdjacentHTML('beforeend', `<div class="navbar-no-shadow wf-section">
<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease-out-quad"
    data-easing2="ease-in-quad" role="banner" class="navbar-no-shadow-container w-nav">
    <div class="container-regular">
        <div class="navbar-wrapper"><a href="https://saravanan-murugan.webflow.io/" aria-current="page"
                class="navbar-brand w-nav-brand w--current" aria-label="home"><img
                    src="./public/63cac271550bb066d7200d10_Wolf.jpg" loading="lazy" width="170" height="auto"
                    alt="Wolf logo"></a>
            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                <ul role="list" class="nav-menu w-list-unstyled">
                    <li><a href="./index.html" aria-current="page" class="nav-link-2 ${path == 'index' ? 'w--current' : ''}">HOME</a></li>
                    <li><a href="./project.html" class="nav-link-2 ${path == 'project' ? 'w--current' : ''}">PROJECTS</a>
                    </li>
                    <li><a href="./about.html" class="nav-link-2 ${path == 'about' ? 'w--current' : ''}">ABOUT</a>
                    </li>
                    <li><a href="https://saravanan-murugan.webflow.io/contact" class="nav-link-2">CONTACT</a>
                    </li>
                    <li>
                        <div data-hover="false" data-delay="0" class="nav-dropdown w-dropdown">
                            <div class="nav-dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                                aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false"
                                role="button" tabindex="0">
                                <div class="nav-dropdown-icon w-icon-dropdown-toggle" aria-hidden="true"></div>
                                <div>Resources</div>
                            </div>
                            <nav class="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list"
                                id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0"><a
                                    href="https://saravanan-murugan.webflow.io/#"
                                    class="nav-dropdown-link w-dropdown-link" tabindex="0">Resource Link 1</a><a
                                    href="https://saravanan-murugan.webflow.io/#"
                                    class="nav-dropdown-link w-dropdown-link" tabindex="0">Resource Link 2</a><a
                                    href="https://saravanan-murugan.webflow.io/#"
                                    class="nav-dropdown-link w-dropdown-link" tabindex="0">Resource Link 3</a>
                            </nav>
                        </div>
                    </li>
                    <li class="mobile-margin-top-10">
                        <div class="nav-button-wrapper"><a href="tel:91+8870023236"
                                class="button-primary w-button">CONNECT</a></div>
                    </li>
                </ul>
            </nav>
            <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu"
                role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                aria-expanded="false">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>
</div>`)