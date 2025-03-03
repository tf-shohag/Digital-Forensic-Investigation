document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Function to create and append the Bitrix24 script
    const appendScript = (container) => {
        if (!container) return;
        
        // Clear any previous script
        const existingScript = container.querySelector('[data-b24-form]');
        if (existingScript) {
            existingScript.remove();
        }

        // Create and append the Bitrix24 script
        const script = document.createElement('script');
        script.id = 'bitrix-form-loader';
        script.async = true;
        script.src = 'https://cdn.bitrix24.com/b15773863/crm/form/loader_780.js?' + (Date.now() / 180000 | 0);
        script.setAttribute('data-b24-form', 'inline/780/626wsm');
        script.setAttribute('data-skip-moving', 'true');

        // Append to the container
        container.appendChild(script);
    };

    // Get form containers
    const mobileFormContainer = document.getElementById('mobileFormContainer');
    const desktopFormContainer = document.getElementById('desktopFormContainer');

    // Append scripts to both containers
    appendScript(mobileFormContainer);
    appendScript(desktopFormContainer);

    // Add click event to the CTA button (optional additional functionality)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to the visible form container
            const formContainer = window.innerWidth >= 768 ? desktopFormContainer : mobileFormContainer;
            formContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Services data
    const services = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2427" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2427)">
                        <path d="M51.5 53.4166L39.75 41.6666C38.0417 43 36.1562 44.0416 34.0937 44.7916C32.0312 45.5416 29.8333 45.9166 27.5 45.9166C23.75 45.9166 20.3646 45 17.3438 43.1666C14.3229 41.3333 11.9375 38.9166 10.1875 35.9166H16.3125C17.7292 37.4583 19.3854 38.677 21.2813 39.5729C23.1771 40.4687 25.25 40.9166 27.5 40.9166C31.6667 40.9166 35.2083 39.4583 38.125 36.5416C41.0417 33.625 42.5 30.0833 42.5 25.9166C42.5 21.75 41.0417 18.2083 38.125 15.2916C35.2083 12.375 31.6667 10.9166 27.5 10.9166C23.5833 10.9166 20.1979 12.2395 17.3438 14.8854C14.4896 17.5312 12.8958 20.7916 12.5625 24.6666H7.5625C7.89583 19.375 9.96875 14.927 13.7813 11.3229C17.5938 7.71871 22.1667 5.91663 27.5 5.91663C33.0833 5.91663 37.8125 7.85413 41.6875 11.7291C45.5625 15.6041 47.5 20.3333 47.5 25.9166C47.5 28.25 47.125 30.4479 46.375 32.5104C45.625 34.5729 44.5833 36.4583 43.25 38.1666L55 49.9166L51.5 53.4166ZM24.8125 35.9166L20.875 22.9166L17.625 32.1666H5V28.4166H15L19.125 16.5416H22.875L26.6875 29.2916L29.375 20.9166H33.125L36.875 28.4166H38.75V32.1666H34.5625L31.625 26.2916L28.5 35.9166H24.8125Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Cybercrime Investigation",
            description: "Hacking, data theft, or cyber fraud."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2434" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2434)">
                        <path d="M30 55.5C24.2083 54.0417 19.4271 50.7188 15.6563 45.5313C11.8854 40.3438 10 34.5833 10 28.25V13L30 5.5L50 13V28.25C50 31.7917 49.3958 35.1979 48.1875 38.4688C46.9792 41.7396 45.25 44.625 43 47.125L35 39.125C34.25 39.5833 33.4479 39.9271 32.5938 40.1563C31.7396 40.3854 30.875 40.5 30 40.5C27.25 40.5 24.8958 39.5208 22.9375 37.5625C20.9792 35.6042 20 33.25 20 30.5C20 27.75 20.9792 25.3958 22.9375 23.4375C24.8958 21.4792 27.25 20.5 30 20.5C32.75 20.5 35.1042 21.4792 37.0625 23.4375C39.0208 25.3958 40 27.75 40 30.5C40 31.4167 39.8854 32.3021 39.6563 33.1562C39.4271 34.0104 39.0833 34.8333 38.625 35.625L42.375 39.375C43.2083 37.6667 43.8542 35.875 44.3125 34C44.7708 32.125 45 30.2083 45 28.25V16.4375L30 10.8125L15 16.4375V28.25C15 33.2917 16.4167 37.875 19.25 42C22.0833 46.125 25.6667 48.875 30 50.25C31.0833 49.9167 32.1146 49.4896 33.0938 48.9688C34.0729 48.4479 35.0417 47.8333 36 47.125L39.5 50.625C38.125 51.75 36.6354 52.7292 35.0312 53.5625C33.4271 54.3958 31.75 55.0417 30 55.5ZM30 35.5C31.375 35.5 32.5521 35.0104 33.5313 34.0313C34.5104 33.0521 35 31.875 35 30.5C35 29.125 34.5104 27.9479 33.5313 26.9688C32.5521 25.9896 31.375 25.5 30 25.5C28.625 25.5 27.4479 25.9896 26.4688 26.9688C25.4896 27.9479 25 29.125 25 30.5C25 31.875 25.4896 33.0521 26.4688 34.0313C27.4479 35.0104 28.625 35.5 30 35.5Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Legal & Corporate Cases",
            description: "Digital evidence for lawsuits, fraud, or internal investigations."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2441" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2441)">
                        <path d="M12.5 53C11.125 53 9.94792 52.5104 8.96875 51.5313C7.98958 50.5521 7.5 49.375 7.5 48V13C7.5 11.625 7.98958 10.4479 8.96875 9.46875C9.94792 8.48958 11.125 8 12.5 8H47.5C48.875 8 50.0521 8.48958 51.0313 9.46875C52.0104 10.4479 52.5 11.625 52.5 13V48C52.5 49.375 52.0104 50.5521 51.0313 51.5313C50.0521 52.5104 48.875 53 47.5 53H12.5ZM12.5 21.3125H47.5V13H12.5V21.3125ZM12.5 34.6875H47.5V26.3125H12.5V34.6875ZM12.5 48H47.5V39.6875H12.5V48ZM15 19.625V14.625H20V19.625H15ZM15 33V28H20V33H15ZM15 46.375V41.375H20V46.375H15Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Data Recovery & Analysis",
            description: "Retrieving lost, deleted, or encrypted data."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2448" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2448)">
                        <path d="M50 28.4167C49.2917 28.4167 48.6979 28.1771 48.2187 27.6979C47.7396 27.2188 47.5 26.625 47.5 25.9167C47.5 25.2083 47.7396 24.6146 48.2187 24.1354C48.6979 23.6563 49.2917 23.4167 50 23.4167C50.7083 23.4167 51.3021 23.6563 51.7812 24.1354C52.2604 24.6146 52.5 25.2083 52.5 25.9167C52.5 26.625 52.2604 27.2188 51.7812 27.6979C51.3021 28.1771 50.7083 28.4167 50 28.4167ZM47.5 20.9167V8.41667H52.5V20.9167H47.5ZM22.5 30.9167C19.75 30.9167 17.3958 29.9375 15.4375 27.9792C13.4792 26.0208 12.5 23.6667 12.5 20.9167C12.5 18.1667 13.4792 15.8125 15.4375 13.8542C17.3958 11.8958 19.75 10.9167 22.5 10.9167C25.25 10.9167 27.6042 11.8958 29.5625 13.8542C31.5208 15.8125 32.5 18.1667 32.5 20.9167C32.5 23.6667 31.5208 26.0208 29.5625 27.9792C27.6042 29.9375 25.25 30.9167 22.5 30.9167ZM2.5 50.9167V43.9167C2.5 42.5 2.86458 41.1979 3.59375 40.0104C4.32292 38.8229 5.29167 37.9167 6.5 37.2917C9.08333 36 11.7083 35.0313 14.375 34.3854C17.0417 33.7396 19.75 33.4167 22.5 33.4167C25.25 33.4167 27.9583 33.7396 30.625 34.3854C33.2917 35.0313 35.9167 36 38.5 37.2917C39.7083 37.9167 40.6771 38.8229 41.4062 40.0104C42.1354 41.1979 42.5 42.5 42.5 43.9167V50.9167H2.5ZM7.5 45.9167H37.5V43.9167C37.5 43.4583 37.3854 43.0417 37.1562 42.6667C36.9271 42.2917 36.625 42 36.25 41.7917C34 40.6667 31.7292 39.8229 29.4375 39.2604C27.1458 38.6979 24.8333 38.4167 22.5 38.4167C20.1667 38.4167 17.8542 38.6979 15.5625 39.2604C13.2708 39.8229 11 40.6667 8.75 41.7917C8.375 42 8.07292 42.2917 7.84375 42.6667C7.61458 43.0417 7.5 43.4583 7.5 43.9167V45.9167ZM22.5 25.9167C23.875 25.9167 25.0521 25.4271 26.0312 24.4479C27.0104 23.4688 27.5 22.2917 27.5 20.9167C27.5 19.5417 27.0104 18.3646 26.0312 17.3854C25.0521 16.4063 23.875 15.9167 22.5 15.9167C21.125 15.9167 19.9479 16.4063 18.9687 17.3854C17.9896 18.3646 17.5 19.5417 17.5 20.9167C17.5 22.2917 17.9896 23.4688 18.9687 24.4479C19.9479 25.4271 21.125 25.9167 22.5 25.9167Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Social Media & Online Harassment",
            description: "Gathering evidence for legal action."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <mask id="mask0_262_2455" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                        <rect width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2455)">
                        <path d="M12.5 55.4167C11.125 55.4167 9.94792 54.9271 8.96875 53.9479C7.98958 52.9688 7.5 51.7917 7.5 50.4167V40.4167C7.5 39.0417 7.98958 37.8646 8.96875 36.8854C9.94792 35.9063 11.125 35.4167 12.5 35.4167H47.5C48.875 35.4167 50.0521 35.9063 51.0313 36.8854C52.0104 37.8646 52.5 39.0417 52.5 40.4167V50.4167C52.5 51.7917 52.0104 52.9688 51.0313 53.9479C50.0521 54.9271 48.875 55.4167 47.5 55.4167H12.5ZM12.5 50.4167H47.5V40.4167H12.5V50.4167ZM16.3125 31.6667L3.75 24.5417L18.75 22.0417L14.6875 7.35417L27.125 16.1667L34.625 2.91667L37.125 17.9167L51.8125 13.8542L43 26.2917L52.5 31.6667H42.375L35.75 27.9167L39.625 22.4167L33.125 24.2292L32 17.6042L28.75 23.4167L23.25 19.5417L25.0625 26.0417L18.4375 27.1667L25.9375 31.6667H16.3125Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Insider Threat Detection",
            description: "Investigating unauthorized access or data leaks."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <mask id="mask0_262_2462" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                        <rect width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2462)">
                        <path d="M27.375 38.875L41.5 24.75L37.9375 21.1875L27.375 31.75L22.125 26.5L18.5625 30.0625L27.375 38.875ZM30 55C24.2083 53.5417 19.4271 50.2188 15.6563 45.0313C11.8854 39.8438 10 34.0833 10 27.75V12.5L30 5L50 12.5V27.75C50 34.0833 48.1146 39.8438 44.3438 45.0313C40.5729 50.2188 35.7917 53.5417 30 55ZM30 49.75C34.3333 48.375 37.9167 45.625 40.75 41.5C43.5833 37.375 45 32.7917 45 27.75V15.9375L30 10.3125L15 15.9375V27.75C15 32.7917 16.4167 37.375 19.25 41.5C22.0833 45.625 25.6667 48.375 30 49.75Z" fill="#5BBC2E" />
                    </g>
                </svg>`,
            title: "Digital Evidence Validation",
            description: "Authenticating emails, messages, images, and documents."
        }
    ];

    // Generate service cards
    const servicesContainer = document.getElementById('services-container');
    
    services.forEach((service, index) => {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'service-card';
        card.dataset.index = index;
        
        const iconContainer = document.createElement('div');
        iconContainer.className = 'service-card-icon';
        iconContainer.innerHTML = service.icon;
        
        const title = document.createElement('h3');
        title.className = 'service-card-title';
        title.textContent = service.title;
        
        const description = document.createElement('p');
        description.className = 'service-card-description';
        description.textContent = service.description;
        
        // Append elements to card
        card.appendChild(iconContainer);
        card.appendChild(title);
        card.appendChild(description);
        
        // Append card to container
        servicesContainer.appendChild(card);
    });

    // Animation using Intersection Observer
    const header = document.querySelector('[data-animation="header"]');
    const cards = document.querySelectorAll('.service-card');
    
    // Create observer for header
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                headerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Create observer for cards
    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.index);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                cardsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "-50px" });
    
    // Observe elements
    headerObserver.observe(header);
    cards.forEach(card => {
        cardsObserver.observe(card);
    });
});





// Define services data
const services = [
    { text: "Recover deleted data from computers, phones, and digital devices" },
    { text: "Analyze digital evidence for legal proceedings and investigations" },
    { text: "Detect unauthorized access and data breaches in systems" },
    { text: "Document chains of custody for digital evidence" },
    { text: "Provide expert testimony on digital forensic findings" }
];

// Populate service texts for desktop view
for (let i = 0; i < services.length; i++) {
    const serviceElement = document.getElementById(`service-${i}`);
    if (serviceElement) {
        serviceElement.textContent = services[i].text;
    }
}

// Populate mobile services
const mobileServicesContainer = document.querySelector('.mobile-services');
if (mobileServicesContainer) {
    services.forEach(service => {
        const serviceElement = document.createElement('p');
        serviceElement.className = 'mobile-service-text';
        serviceElement.textContent = service.text;
        mobileServicesContainer.appendChild(serviceElement);
    });
}

// Check if it's mobile view and update display accordingly
function checkMobileView() {
    const isMobile = window.innerWidth < 768;
    const mobileServices = document.querySelector('.mobile-services');
    const desktopServices = document.querySelectorAll('.service-text');
    
    if (isMobile) {
        mobileServices.style.display = 'flex';
        desktopServices.forEach(service => {
            service.style.display = 'none';
        });
    } else {
        mobileServices.style.display = 'none';
        desktopServices.forEach(service => {
            service.style.display = 'block';
        });
    }
}

// Initialize and add resize listener
window.addEventListener('load', checkMobileView);
window.addEventListener('resize', checkMobileView);



// Define the forensic types data
const forensicTypes = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64" fill="none">
            <path d="M0.888672 63.8896L0.888672 52.0561H8.77764L8.77764 8.6668C8.77764 6.49734 9.5501 4.64014 11.095 3.09522C12.64 1.55029 14.4971 0.777832 16.6666 0.777832H75.8339V8.6668H16.6666L16.6666 52.0561H40.3335V63.8896H0.888672ZM52.167 63.8896C51.0494 63.8896 50.1126 63.5116 49.3565 62.7556C48.6005 61.9995 48.2225 61.0627 48.2225 59.9451L48.2225 20.5003C48.2225 19.3827 48.6005 18.4458 49.3565 17.6898C50.1126 16.9338 51.0494 16.5558 52.167 16.5558H75.8339C76.9515 16.5558 77.8883 16.9338 78.6443 17.6898C79.4004 18.4458 79.7784 19.3827 79.7784 20.5003L79.7784 59.9451C79.7784 61.0627 79.4004 61.9995 78.6443 62.7556C77.8883 63.5116 76.9515 63.8896 75.8339 63.8896H52.167ZM56.1115 52.0561H71.8894L71.8894 24.4447H56.1115L56.1115 52.0561Z" fill="currentColor" />
        </svg>`,
        title: "Computer & Mobile Forensics",
        description: "Investigating data, logs, and deleted files."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="none">
            <path d="M12.3278 56.4501C8.58058 52.5056 5.7373 48.1339 3.79794 43.3348C1.85859 38.5357 0.888916 33.5723 0.888916 28.4445C0.888916 23.3167 1.85859 18.3533 3.79794 13.5542C5.7373 8.75517 8.58058 4.38341 12.3278 0.438965L17.0611 5.1723C13.9056 8.32785 11.5389 11.96 9.96114 16.0688C8.38336 20.1776 7.59447 24.3029 7.59447 28.4445C7.59447 32.5862 8.38336 36.7114 9.96114 40.8202C11.5389 44.929 13.9056 48.5612 17.0611 51.7167L12.3278 56.4501ZM21.7945 46.9834C19.2306 44.4195 17.2748 41.5269 15.9271 38.3056C14.5794 35.0843 13.9056 31.7973 13.9056 28.4445C13.9056 25.0917 14.5794 21.8047 15.9271 18.5834C17.2748 15.3621 19.2306 12.4695 21.7945 9.90563L26.5278 14.639C24.5556 16.414 23.0764 18.5177 22.0903 20.9501C21.1042 23.3825 20.6111 25.8806 20.6111 28.4445C20.6111 30.8112 21.1042 33.2107 22.0903 35.6431C23.0764 38.0755 24.5556 40.2779 26.5278 42.2501L21.7945 46.9834ZM20.6111 75.7779L33.9236 35.8404C32.8718 34.92 32.0336 33.8353 31.4091 32.5862C30.7845 31.3371 30.4722 29.9566 30.4722 28.4445C30.4722 25.6834 31.4255 23.3496 33.332 21.4431C35.2385 19.5367 37.5722 18.5834 40.3334 18.5834C43.0945 18.5834 45.4283 19.5367 47.3347 21.4431C49.2412 23.3496 50.1945 25.6834 50.1945 28.4445C50.1945 29.9566 49.8822 31.3371 49.2577 32.5862C48.6331 33.8353 47.7949 34.92 46.7431 35.8404L60.0556 75.7779H52.1667L49.6028 67.889H31.1625L28.5 75.7779H20.6111ZM33.7264 60.0001L46.9403 60.0001L40.3334 40.2779L33.7264 60.0001ZM58.8722 46.9834L54.1389 42.2501C56.1111 40.4751 57.5903 38.3714 58.5764 35.939C59.5625 33.5066 60.0556 31.0084 60.0556 28.4445C60.0556 26.0779 59.5625 23.6783 58.5764 21.2459C57.5903 18.8135 56.1111 16.6112 54.1389 14.639L58.8722 9.90563C61.4361 12.4695 63.3426 15.3621 64.5917 18.5834C65.8408 21.8047 66.5639 25.0917 66.7611 28.4445C66.7611 31.7973 66.0873 35.0843 64.7396 38.3056C63.3919 41.5269 61.4361 44.4195 58.8722 46.9834ZM68.3389 56.4501L63.6056 51.7167C66.7611 48.5612 69.1278 44.929 70.7056 40.8202C72.2834 36.7114 73.0722 32.5862 73.0722 28.4445C73.0722 24.3029 72.2834 20.1776 70.7056 16.0688C69.1278 11.96 66.7611 8.32785 63.6056 5.1723L68.3389 0.438965C72.0861 4.38341 74.9294 8.75517 76.8688 13.5542C78.8081 18.3533 79.7778 23.3167 79.7778 28.4445C79.7778 33.5723 78.8574 38.5357 77.0167 43.3348C75.176 48.1339 72.2834 52.5056 68.3389 56.4501Z" fill="currentColor" />
        </svg>`,
        title: "Network Forensics",
        description: "Tracing cyberattacks, insider threats, and unauthorized access."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="76" viewBox="0 0 72 76" fill="none">
            <path d="M0.154297 75.3428L0.154297 67.4202H47.6902V75.3428H0.154297ZM22.5358 56.1304L0.154297 33.7489L8.47308 25.232L31.0526 47.6135L22.5358 56.1304ZM47.6902 30.976L25.3087 8.39642L33.8256 0.0776367L56.207 22.4591L47.6902 30.976ZM65.9123 71.3815L14.217 19.6862L19.7629 14.1403L71.4581 65.8356L65.9123 71.3815Z" fill="currentColor" />
        </svg>`,
        title: "Cybercrime Investigation",
        description: "Identifying hackers, scammers, and fraudsters."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
            <path d="M44.0358 12.0121C52.9759 12.0121 60.5482 15.1145 66.7528 21.3191C72.9575 27.5237 76.0598 35.0961 76.0598 44.0361C76.0598 52.9761 72.9575 60.5484 66.7528 66.7531C60.5482 72.9577 52.9759 76.06 44.0358 76.06C35.0958 76.06 27.5235 72.9577 21.3189 66.7531C15.1142 60.5484 12.0119 52.9761 12.0119 44.0361C12.0119 35.0961 15.1142 27.5237 21.3189 21.3191C27.5235 15.1145 35.0958 12.0121 44.0358 12.0121ZM44.0358 68.054C50.7075 68.054 56.3784 65.719 61.0486 61.0488C65.7187 56.3786 68.0538 50.7077 68.0538 44.0361C68.0538 37.3644 65.7187 31.6935 61.0486 27.0234C56.3784 22.3532 50.7075 20.0181 44.0358 20.0181C37.3642 20.0181 31.6933 22.3532 27.0231 27.0234C22.353 31.6935 20.0179 37.3644 20.0179 44.0361C20.0179 50.7077 22.353 56.3786 27.0231 61.0488C31.6933 65.719 37.3642 68.054 44.0358 68.054ZM44.0358 58.0466C47.2382 58.0466 50.107 57.1292 52.6423 55.2945C55.1775 53.4598 56.9788 51.0413 58.0463 48.0391L30.0254 48.0391C31.0928 51.0413 32.8942 53.4598 35.4294 55.2945C37.9646 57.1292 40.8334 58.0466 44.0358 58.0466ZM30.0254 36.0301C30.0254 37.1643 30.409 38.115 31.1762 38.8822C31.9435 39.6495 32.8942 40.0331 34.0284 40.0331C35.1625 40.0331 36.1133 39.6495 36.8805 38.8822C37.6477 38.115 38.0314 37.1643 38.0314 36.0301C38.0314 34.8959 37.6477 33.9452 36.8805 33.178C36.1133 32.4107 35.1625 32.0271 34.0284 32.0271C32.8942 32.0271 31.9435 32.4107 31.1762 33.178C30.409 33.9452 30.0254 34.8959 30.0254 36.0301ZM50.0403 36.0301C50.0403 37.1643 50.4239 38.115 51.1912 38.8822C51.9584 39.6495 52.9091 40.0331 54.0433 40.0331C55.1775 40.0331 56.1282 39.6495 56.8955 38.8822C57.6627 38.115 58.0463 37.1643 58.0463 36.0301C58.0463 34.8959 57.6627 33.9452 56.8955 33.178C56.1282 32.4107 55.1775 32.0271 54.0433 32.0271C52.9091 32.0271 51.9584 32.4107 51.1912 33.178C50.4239 33.9452 50.0403 34.8959 50.0403 36.0301ZM0.00292969 20.0181L0.00292969 8.00916C0.00292969 5.80751 0.786849 3.92277 2.35469 2.35493C3.92253 0.787093 5.80727 0.00317383 8.00891 0.00317383L20.0179 0.00317383V8.00916L8.00891 8.00916V20.0181H0.00292969ZM20.0179 88.069H8.00891C5.80727 88.069 3.92253 87.2851 2.35469 85.7172C0.786849 84.1494 0.00292969 82.2647 0.00292969 80.063L0.00292969 68.054H8.00891V80.063H20.0179V88.069ZM68.0538 88.069V80.063L80.0628 80.063V68.054H88.0687V80.063C88.0687 82.2647 87.2848 84.1494 85.717 85.7172C84.1492 87.2851 82.2644 88.069 80.0628 88.069L68.0538 88.069ZM80.0628 20.0181V8.00916H68.0538V0.00317383L80.0628 0.00317383C82.2644 0.00317383 84.1492 0.787093 85.717 2.35493C87.2848 3.92277 88.0687 5.80751 88.0687 8.00916V20.0181H80.0628Z" fill="currentColor" />
        </svg>`,
        title: "Social Media & Email Forensics",
        description: "Authenticating conversations for legal cases."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="73" viewBox="0 0 91 73" fill="none">
            <path d="M59.0897 72.4529V63.5076L41.1991 63.5076V41.1444H32.2538V50.0897H0.945313L0.945313 23.2538L32.2538 23.2538V32.1991H41.1991V9.83591L59.0897 9.83591V0.890625L90.3982 0.890625V27.7265L59.0897 27.7265V18.7812H50.1444V54.5623H59.0897V45.617H90.3982V72.4529L59.0897 72.4529ZM68.0349 63.5076H81.4529V54.5623H68.0349V63.5076ZM9.8906 41.1444H23.3085V32.1991H9.8906V41.1444ZM68.0349 18.7812H81.4529V9.83591L68.0349 9.83591V18.7812Z" fill="currentColor" />
        </svg>`,
        title: "Data Breach Investigations",
        description: "Identifying how and where a breach occurred."
    }
];

// Function to populate the grid
function populateGrid() {
    const grid = document.getElementById('forensic-types-grid');
    
    forensicTypes.forEach((type, index) => {
        // Create card element
        const card = document.createElement('div');
        card.className = `card ${index === forensicTypes.length - 1 ? 'last-item' : ''}`;
        
        // Add vertical divider for all but the last item
        if (index < forensicTypes.length - 1) {
            const divider = document.createElement('div');
            divider.className = 'divider';
            card.appendChild(divider);
        }
        
        // Create card content
        const content = document.createElement('div');
        content.className = 'card-content';
        
        // Create icon container
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container';
        
        // Create background icon (grey)
        const iconBg = document.createElement('div');
        iconBg.className = 'icon-bg';
        iconBg.innerHTML = type.icon;
        iconContainer.appendChild(iconBg);
        
        // Create foreground icon (primary color)
        const icon = document.createElement('div');
        icon.className = 'icon icon-hover';
        icon.innerHTML = type.icon;
        // Add animation with delay based on index
        icon.classList.add('animate-icon');
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.style.animationDuration = '0.6s';
        icon.style.animationFillMode = 'forwards';
        iconContainer.appendChild(icon);
        
        // Add hover effect
        iconContainer.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
        });
        
        iconContainer.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
        
        // Create title
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = type.title;
        
        // Create description
        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = type.description;
        
        // Assemble the card
        content.appendChild(iconContainer);
        content.appendChild(title);
        content.appendChild(description);
        card.appendChild(content);
        
        // Add to grid
        grid.appendChild(card);
    });
    
    // Animate icons after a short delay
    setTimeout(() => {
        document.querySelectorAll('.animate-icon').forEach(el => {
            el.style.animation = 'fadeIn 0.6s forwards';
        });
    }, 100);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateGrid();
    
    // Handle button hover animations
    const button = document.querySelector('.cta-button');
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#FFD700';
        button.style.borderColor = '#FFD700';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#182f59';
        button.style.color = 'white';
        button.style.borderColor = 'transparent';
    });
});




// Testimonial data
const testimonials = [
    {
      id: 1,
      content: "The guys in the team are extremely efficient and very humble. Kept me posted and helped me learn about lots of security related things. I never needed to do pen-testing. It really is an effective tool for companies like ours. If you are looking for reliability, Techforing is a Go-to! Try them! ",
      name: "ERIC HO",
      location: "Staff Software Engineer, RippleMatch ( ECUADOR )",
      image: "/dfi/Eric-Ho.webp"
    },
    {
      id: 2,
      content: "One of my crucial websites was showing ominous signs. We were being suspicious. Thankfully, we didn't waste time and immediately asked my subordinate to look for somebody. He got us with Techforing. They did a thorough job and made some recommendations. I will definitely work with them again. As he pointed at security holes, no other tech had pointed out before. Thank you, Techforing!",
      name: "ISRAEL SANCHEZ...",
      location: "CEO, Integrated Healing and Strength Systems, Inc. ( USA )",
      image: "/dfi/Israel-Sunchez.webp"
    },
    {
      id: 3,
      content: "Our website needed a risk assessment. TechForing Engineers are a pro in that. They did everything needed to get the job done. Guys are content and I got my peace of mind. Thanks TechForing. ",
      name: "EDDIE MURGIC",
      location: "President and CEO, Traveloko, LLC. ( USA )",
      image: "/dfi/murgic.webp"
    }
  ];
  
  // Create and render testimonial cards
  function renderTestimonials() {
    const testimonialGrid = document.getElementById('testimonialGrid');
    
    testimonials.forEach((testimonial, index) => {
      // Create card
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.setAttribute('data-index', index);
      
      // Create content
      const content = document.createElement('p');
      content.className = 'testimonial-content';
      content.textContent = testimonial.content;
      
      // Create author section
      const authorDiv = document.createElement('div');
      authorDiv.className = 'testimonial-author';
      
      // Create image
      const image = document.createElement('img');
      image.className = 'author-image';
      image.src = testimonial.image;
      image.alt = testimonial.name;
      
      // Create author info container
      const authorInfo = document.createElement('div');
      authorInfo.className = 'author-info';
      
      // Create name
      const name = document.createElement('h4');
      name.className = 'author-name';
      name.textContent = testimonial.name;
      
      // Create location
      const location = document.createElement('p');
      location.className = 'author-location';
      location.textContent = testimonial.location;
      
      // Assemble the elements
      authorInfo.appendChild(name);
      authorInfo.appendChild(location);
      
      authorDiv.appendChild(image);
      authorDiv.appendChild(authorInfo);
      
      card.appendChild(content);
      card.appendChild(authorDiv);
      
      testimonialGrid.appendChild(card);
      
      // Add animation with delay based on index
      setTimeout(() => {
        card.classList.add('visible');
      }, 100 * index);
    });
  }
  
  // Intersection Observer to trigger animations when scrolling
  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.testimonial-card:not(.visible)');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, 100 * index);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.querySelector('.testimonial-section');
    if (section) {
      observer.observe(section);
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
    setupIntersectionObserver();
  });




  document.addEventListener('DOMContentLoaded', function() {
    // Steps data
    const steps = [
        {
            id: 1,
            title: "CASE ASSESSMENT",
            description: "We analyze the situation and define investigation goals."
        },
        {
            id: 2,
            title: "DATA COLLECTION",
            description: "Recovering digital evidence from devices, cloud storage, or networks."
        },
        {
            id: 3,
            title: "FORENSIC ANALYSIS",
            description: "Using advanced tools to uncover hidden data and track digital footprints."
        },
        {
            id: 4,
            title: "EVIDENCE DOCUMENTATION",
            description: "Creating legally admissible reports for legal proceedings."
        },
        {
            id: 5,
            title: "REPORTING & TESTIMONY",
            description: "Providing expert witness services if needed."
        }
    ];

    const stepsContainer = document.getElementById('steps-container');

    // Create and append steps
    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';

        const hasLine = index < steps.length - 1;

        stepDiv.innerHTML = `
            <div class="step__number-container">
                <div class="step__number">${step.id}</div>
                ${hasLine ? '<div class="step__line"></div>' : ''}
            </div>
            <div class="step__content">
                <div class="step__header">
                    <h3 class="step__title">${step.title}</h3>
                </div>
                <div class="step__description-container">
                    <p class="step__description">${step.description}</p>
                </div>
            </div>
        `;

        stepsContainer.appendChild(stepDiv);
    });

    // Animation functions
    function animateHeader() {
        const header = document.querySelector('.forensic-process__header');
        setTimeout(() => {
            header.classList.add('forensic-process__header--animated');
        }, 100);
    }

    function animateStepNumbers() {
        const stepNumbers = document.querySelectorAll('.step__number');
        stepNumbers.forEach((number, index) => {
            setTimeout(() => {
                number.classList.add('step__number--animated');
            }, 200 + index * 100);
        });
    }

    function animateStepContents() {
        const stepContents = document.querySelectorAll('.step__content');
        stepContents.forEach((content, index) => {
            setTimeout(() => {
                content.classList.add('step__content--animated');
            }, 300 + index * 100);
        });
    }

    function animateSvgContainers() {
        const svgContainers = document.querySelectorAll('.forensic-process__image');
        const delays = [400, 400, 800, 1000];
        
        svgContainers.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('forensic-process__image--animated');
            }, delays[index]);
        });
    }

    function animateButton() {
        const button = document.querySelector('.forensic-process__button');
        setTimeout(() => {
            button.classList.add('forensic-process__button--animated');
        }, 200);
    }

    // Apply initial styles
    document.querySelector('.forensic-process__header').style.opacity = '0';
    document.querySelector('.forensic-process__header').style.transform = 'translateY(30px)';
    document.querySelector('.forensic-process__header').style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    // Observer for animations
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateHeader();
            animateStepNumbers();
            animateStepContents();
            animateSvgContainers();
            animateButton();
            observer.disconnect();
        }
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('.forensic-process'));
});


document.addEventListener('DOMContentLoaded', function() {
    // Play button functionality
    const playButton = document.querySelector('.play-button');
    const video = document.getElementById('testimonial-video');
    
    if (playButton && video) {
        playButton.addEventListener('click', function() {
            // Hide play button
            playButton.parentElement.style.display = 'none';
            // Play video
            video.play();
        });
    }

    // Animation
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
                
                // Stop observing this element
                observer.unobserve(element);
            }
        });
    }

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    // Select all elements with the 'fade-in' class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Data array containing all tab items and images
    const data = [
        { title: 'Loss of Critical Evidence', image: '/dfi/conse1.webp' },
        { title: 'Important data may be lost permanently.', image: '/dfi/conse2.webp' },
        { title: 'Legal & Financial Risks', image: '/dfi/conse3.webp' },
        { title: 'Cybercrime Escalation', image: '/dfi/conse4.webp' },
        { title: 'Data Integrity Issues', image: '/dfi/conse5.webp' },
        { title: 'Reputation Damage', image: '/dfi/conse6.webp' }
    ];

    let activeTab = 0;
    const tabsContainer = document.getElementById('tabsContainer');
    const imageContainer = document.getElementById('imageContainer');

    // Function to render tabs and images
    function renderContent() {
        // Clear previous content
        tabsContainer.innerHTML = '';
        imageContainer.innerHTML = '';

        // Create tabs
        data.forEach((item, index) => {
            const tabElement = document.createElement('div');
            
            // Determine tab styling based on active state
            if (index === activeTab) {
                tabElement.className = 'tab active';
            } else if (index === (activeTab + 1) % data.length) {
                tabElement.className = 'tab next';
            } else {
                tabElement.className = 'tab';
            }
            
            tabElement.textContent = item.title;
            tabElement.addEventListener('click', () => {
                setActiveTab(index);
            });
            
            tabsContainer.appendChild(tabElement);
        });

        // Create images
        data.forEach((item, index) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.className = `image-wrapper ${index === activeTab ? 'active' : ''}`;
            
            const img = document.createElement('img');
            img.className = 'image';
            img.src = item.image;
            img.alt = item.title;
            
            imageWrapper.appendChild(img);
            imageContainer.appendChild(imageWrapper);
        });
    }

    // Function to set active tab and update UI
    function setActiveTab(index) {
        activeTab = index;
        renderContent();
    }

    // Initial render
    renderContent();

    // Auto-rotate tabs every 3 seconds
    setInterval(() => {
        activeTab = (activeTab < data.length - 1) ? activeTab + 1 : 0;
        renderContent();
    }, 3000);
});


// This script adds intersection observer functionality to trigger animations when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-slide-right, .animate-slide-left');
    
    // Initial check for elements already in viewport on page load
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        } else {
            if (element.classList.contains('animate-slide-right')) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(-200px)';
            } else if (element.classList.contains('animate-slide-left')) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(200px)';
            }
        }
    });

    // Set up intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is in view
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Feature cards data
    const featureCards = [
        {
            id: 'certifications',
            title: 'Certified Digital Forensic Experts',
            description: 'Specialists in cyber investigations and legal forensics.',
            sideName: 'Certifications',
            icons: ['/dfi/ceh.webp', '/dfi/cisa.webp', '/dfi/cissp.webp'],
        },
        {
            id: 'legal-report',
            title: 'Legally Admissible Reports',
            description: 'Our findings can be used in court cases.',
            sideName: 'Legal Report',
        },
        {
            id: 'advanced-tools',
            title: 'Advanced Digital Recovery Tools',
            description: 'We use cutting-edge forensic technology.',
            sideName: 'Advanced tools',
        },
        {
            id: 'response',
            title: 'Immediate Response',
            description: 'We act quickly to recover and analyze data.',
            sideName: 'Response',
        },
        {
            id: 'coverage',
            title: 'Global Coverage',
            description: 'We handle investigations in over 114 countries.',
            sideName: 'Coverage',
        },
    ];

    // CEO Images data
    const ceoImages = [
        '/dfi/ceo1.webp',
        '/dfi/ceo2.webp',
        '/dfi/ceo3.webp',
        '/dfi/ceo4.webp',
    ];

    // Get the feature cards container
    const featureCardsContainer = document.querySelector('.wrm-feature-cards');

    // Generate feature cards
    featureCards.forEach((feature, index) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'wrm-feature-card wrm-animate';
        featureCard.id = `wrm-feature-${feature.id}`;
        
        // Calculate the offset for desktop view
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
            featureCard.style.marginRight = `${index * 30}px`;
            featureCard.style.marginLeft = `-${index * 30}px`;
        }
        
        // Side label
        const sideLabel = document.createElement('div');
        sideLabel.className = 'wrm-feature-side-label';
        
        const sideText = document.createElement('div');
        sideText.className = 'wrm-feature-side-text';
        sideText.textContent = feature.sideName;
        
        sideLabel.appendChild(sideText);
        
        // Content section
        const contentSection = document.createElement('div');
        contentSection.className = 'wrm-feature-content';
        
        const textDiv = document.createElement('div');
        textDiv.className = 'wrm-feature-text';
        
        const title = document.createElement('h3');
        title.textContent = feature.title;
        
        const description = document.createElement('p');
        description.textContent = feature.description;
        
        textDiv.appendChild(title);
        textDiv.appendChild(description);
        
        contentSection.appendChild(textDiv);
        
        // Icons if available
        if (feature.icons) {
            const iconsDiv = document.createElement('div');
            iconsDiv.className = 'wrm-feature-icons';
            
            feature.icons.forEach(icon => {
                const img = document.createElement('img');
                img.src = icon;
                img.alt = 'logo';
                iconsDiv.appendChild(img);
            });
            
            contentSection.appendChild(iconsDiv);
        }
        
        // Append everything to the feature card
        featureCard.appendChild(sideLabel);
        featureCard.appendChild(contentSection);
        
        // Append the feature card to the container
        featureCardsContainer.appendChild(featureCard);
        
        // Add animation with delay
        setTimeout(() => {
            featureCard.style.animation = `slideIn 0.6s ${index * 0.5}s ease-out forwards`;
        }, 100);
    });

    // Get the team images container
    const teamImagesContainer = document.querySelector('.wrm-team-images');

    // Generate team images
    ceoImages.forEach((image, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'wrm-team-image wrm-animate';
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Team member';
        
        imageContainer.appendChild(img);
        teamImagesContainer.appendChild(imageContainer);
        
        // Add animation with delay
        setTimeout(() => {
            imageContainer.style.animation = `slideUp 0.5s ${0.4 + (index * 0.1)}s forwards`;
        }, 100);
    });

    // Handle window resize for responsive adjustments
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        
        featureCards.forEach((feature, index) => {
            const featureCard = document.getElementById(`wrm-feature-${feature.id}`);
            if (windowWidth >= 768) {
                featureCard.style.marginRight = `${index * 30}px`;
                featureCard.style.marginLeft = `-${index * 30}px`;
            } else {
                featureCard.style.marginRight = '0';
                featureCard.style.marginLeft = '0';
            }
        });
    });

    // Intersection Observer for animations when elements come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('wrm-section-title')) {
                    entry.target.style.animation = 'fadeDown 0.6s ease forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the title
    const title = document.querySelector('.wrm-section-title');
    observer.observe(title);
});


document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth < 768;
    const boxes = document.querySelectorAll('.sa-box');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateBox(box) {
        const position = box.dataset.position;
        let x = 0, y = 0;

        switch (position) {
            case 'topLeft':
                x = -100; y = -100;
                break;
            case 'topRight':
                x = 100; y = -100;
                break;
            case 'bottomLeft':
                x = -100; y = 100;
                break;
            case 'bottomRight':
                x = 100; y = 100;
                break;
        }

        box.style.transform = `translate(${x}px, ${y}px)`;
        box.style.opacity = '0';

        setTimeout(() => {
            box.style.transition = 'transform 0.8s, opacity 0.8s';
            box.style.transform = 'translate(0, 0)';
            box.style.opacity = '1';
        }, 100);
    }

    function checkBoxes() {
        boxes.forEach(box => {
            if (isInViewport(box) && !box.classList.contains('sa-animated')) {
                if (!isMobile) {
                    animateBox(box);
                }
                box.classList.add('sa-animated');
            }
        });
    }

    // Initial check
    checkBoxes();

    // Check on scroll
    window.addEventListener('scroll', checkBoxes);

    // Animate button
    const button = document.querySelector('.sa-button');
    if (button) {
        button.style.transform = 'translateY(50px)';
        button.style.opacity = '0';

        setTimeout(() => {
            button.style.transition = 'transform 0.5s, opacity 0.5s';
            button.style.transform = 'translateY(0)';
            button.style.opacity = '1';
        }, 600);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const faqs = [
        {
            question: "Is my case confidential?",
            answer: "Yes, we handle every case with strict confidentiality and discretion."
        },
        {
            question: "Can you recover deleted files?",
            answer: "Yes, we specialize in advanced data recovery, including permanently deleted data."
        },
        {
            question: "Will the forensic report be valid in court?",
            answer: "Absolutely. Our reports follow legal standards and are admissible in court."
        },
        {
            question: "How long does a forensic investigation take?",
            answer: "It depends on the complexity of the case, but we act as fast as possible."
        },
        {
            question: "Can you help with cybersecurity after the investigation?",
            answer: "Yes, we offer security solutions to prevent future attacks."
        }
    ];

    const faqList = document.querySelector('.faq-list');

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" data-index="${index}">
                <h3>${faq.question}</h3>
                <button class="faq-toggle-btn">+</button>
            </div>
            <div class="faq-answer" style="display: none;">
                <p>${faq.answer}</p>
            </div>
        `;
        faqList.appendChild(faqItem);
    });

    let openIndex = 0;
    const toggleFAQ = (index) => {
        const questions = document.querySelectorAll('.faq-question');
        const answers = document.querySelectorAll('.faq-answer');
        const toggleBtns = document.querySelectorAll('.faq-toggle-btn');

        if (openIndex === index) {
            questions[openIndex].classList.remove('open');
            answers[openIndex].style.display = 'none';
            toggleBtns[openIndex].textContent = '+';
            openIndex = -1;
        } else {
            if (openIndex !== -1) {
                questions[openIndex].classList.remove('open');
                answers[openIndex].style.display = 'none';
                toggleBtns[openIndex].textContent = '+';
            }
            questions[index].classList.add('open');
            answers[index].style.display = 'block';
            toggleBtns[index].textContent = '−';
            openIndex = index;
        }
    };

    faqList.addEventListener('click', (event) => {
        const question = event.target.closest('.faq-question');
        if (question) {
            const index = parseInt(question.dataset.index);
            toggleFAQ(index);
        }
    });

    // Open the first FAQ item by default
    toggleFAQ(0);
});



// Form tracking variables
const formPushTracker = {};
let observer = null;
let formListenerInterval = null;
let buttonCheckInterval = null;

// Cookie management functions
function setCookie(name, value, days, domain) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  let domainAttribute = domain ? "; domain=" + domain : "";
  document.cookie = name + "=" + (value || "") + expires + domainAttribute + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function showCookieAlert() {
  const cookieAlert = document.getElementById('cookiecontainer');
  if (cookieAlert) {
    cookieAlert.style.display = 'flex';
  }
}

// Initialize dataLayer for GTM
window.dataLayer = window.dataLayer || [];
window.gtag = function() {
  window.dataLayer.push(arguments);
};

// Google Tag Manager
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5ZK559W');

// Bitrix24 Script
(function(w, d, u) {
  var s = d.createElement('script');
  s.async = true;
  s.src = u + '?' + (Date.now() / 60000 | 0);
  var h = d.getElementsByTagName('script')[0];
  h.parentNode.insertBefore(s, h);
})(window, document, 'https://cdn.bitrix24.com/b15773863/crm/site_button/loader_310_wozrt0.js');

// Form tracking initialization
function initializeFormListeners() {
  const formButtons = document.querySelectorAll(".b24-form-btn");
  
  if (formButtons.length === 0) return;
  
  formButtons.forEach(button => {
    // Remove any existing listeners to prevent duplicates
    const newButton = button.cloneNode(true);
    if (button.parentNode) {
      button.parentNode.replaceChild(newButton, button);
    }
    
    newButton.addEventListener("click", function() {
      setTimeout(function() {
        const parentDiv = newButton.closest("div[id^='b24-']");
        const order_id = parentDiv ? parentDiv.id.replace('b24-', '').replace(/\D/g, '').slice(0, 10) : "default_b24_id";
        
        if (formPushTracker[order_id]) return;
        
        const formElement = newButton.closest("form");
        if (!formElement) return;
        
        const formId = formElement.id || "default_form_id";
        const formName = formElement.getAttribute("name") || "default_form_name";
        
        const storedValuesStr = localStorage.getItem('b24-form-field-stored-values');
        if (!storedValuesStr) return;
        
        try {
          const storedValues = JSON.parse(storedValuesStr);
          
          const formData = {
            'form_id': formId,
            'form_name': formName,
            'order_id': order_id,
            ...storedValues
          };
          
          localStorage.setItem('gtm_form_data', JSON.stringify(formData));
          
          window.gtag('event', 'form_submit', formData);
          window.gtag('event', 'gtm.click', formData);
          
          formPushTracker[order_id] = true;
        } catch (e) {
          console.error("Error parsing stored form values:", e);
        }
      }, 500);
    });
  });
}

// Form initialization handler
function handleFormInit(event) {
  const form = event.detail.object;
  if (!form) return;
  
  // Set form values
  const pageIdentifier = window.location.pathname.split('/').pop();
  const cookiesStatus = getCookie('cookiesStatus_' + pageIdentifier);
  const consentValue = cookiesStatus === 'Accepted' ? 'Granted' : cookiesStatus === 'Rejected' ? 'Denied' : '';
  
  const parentDiv = document.querySelector(".b24-form-btn")?.closest("div[id^='b24-']");
  const orderId = parentDiv ? parentDiv.id.replace('b24-', '').replace(/\D/g, '').slice(0, 10) : "default_b24_id";
  
  form.setProperty("order_id", orderId);
  form.setProperty("ad_user_data", consentValue);
  form.setProperty("ad_personalization", consentValue);
  form.setProperty("cookies_status", consentValue);
  
  // Find and attach to submit button
  const checkForButton = () => {
    const submitButton = document.querySelector('.b24-form-btn');
    if (submitButton) {
      // Remove existing listeners
      const newButton = submitButton.cloneNode(true);
      if (submitButton.parentNode) {
        submitButton.parentNode.replaceChild(newButton, submitButton);
      }
      
      newButton.addEventListener('click', () => {
        // Reconfirm values before submission
        form.setProperty("order_id", orderId);
        form.setProperty("ad_user_data", consentValue);
        form.setProperty("ad_personalization", consentValue);
        form.setProperty("cookies_status", consentValue);
      });
      
      clearInterval(buttonCheckInterval);
    }
  };
  
  buttonCheckInterval = setInterval(checkForButton, 2000);
}

// Live chat observation setup
function setupLiveChat() {
  // Observer callback
  const handleMutations = () => {
    const divElement = document.querySelector('.bx-livechat-title');
    if (!divElement || divElement.innerHTML.trim() !== 'Free Consultation - Digital Forensic | UK | OC | LP') return;
    
    const submitButton = divElement.parentNode?.parentNode?.parentNode?.querySelector('.b24-form-btn');
    if (submitButton) {
      submitButton.classList.add('b24-form-btn--blackmailusV4');
      
      const onClick = () => {
        submitButton.classList.remove('b24-form-btn--blackmailusV4');
        submitButton.removeEventListener('click', onClick);
      };
      
      submitButton.addEventListener('click', onClick);
    }
  };
  
  // Create observer once
  if (!observer) {
    observer = new MutationObserver(handleMutations);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Widget button click handler
  const widgetButton = document.querySelector('.b24-widget-button-inner-container');
  if (widgetButton) {
    widgetButton.addEventListener('click', () => setTimeout(handleMutations, 1000));
  }
}

// Phone flags setup
function setupPhoneFlags() {
  if (typeof intlTelInput === 'undefined') return;
  
  let country = 'us';
  
  // Only fetch country once
  fetch('https://reallyfreegeoip.org/json/')
    .then(res => res.json())
    .then(data => {
      country = data.country_code.toLowerCase();
      initializePhoneInputs();
    })
    .catch(() => {
      // Fall back to default country if fetch fails
      initializePhoneInputs();
    });
  
  // Setup phone inputs
  const initializePhoneInputs = () => {
    const inputs = document.querySelectorAll("input[type='tel']");
    if (inputs.length === 0) {
      // Check again if inputs appear later
      setTimeout(initializePhoneInputs, 1000);
      return;
    }
    
    inputs.forEach(elem => {
      if (elem.dataset.initialized) return;
      
      const iti = intlTelInput(elem, {
        initialCountry: country,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
      });
      
      const countryData = iti.getSelectedCountryData();
      elem.value = '+' + countryData.dialCode;
      elem.dataset.initialized = 'true';
    });
  };
}

// Cookie consent setup
function setupCookieConsent() {
  const pageIdentifier = window.location.pathname.split('/').pop();
  const cookiesStatus = getCookie('cookiesStatus_' + pageIdentifier);
  const cookiesPage = getCookie('cookiesPage_' + pageIdentifier);
  
  if (cookiesStatus === 'Rejected') {
    showCookieAlert();
  } else if ((cookiesPage !== 'Accepted' && cookiesPage !== 'Rejected') || 
            (cookiesStatus !== 'Accepted' && cookiesStatus !== 'Rejected')) {
    setTimeout(showCookieAlert, 500);
  }
  
  // Set up cookie button handlers
  const acceptButton = document.getElementById('btn-accept-all');
  const rejectButton = document.getElementById('btn-reject-all');
  
  if (acceptButton) {
    acceptButton.addEventListener('click', function() {
      const pageId = window.location.pathname.split('/').pop();
      setCookie('cookiesStatus_' + pageId, 'Accepted', 180, window.location.hostname);
      setCookie('cookiesPage_' + pageId, 'Accepted', 180, window.location.hostname);
      const cookieContainer = document.getElementById('cookiecontainer');
      if (cookieContainer) cookieContainer.style.display = 'none';
    });
  }
  
  if (rejectButton) {
    rejectButton.addEventListener('click', function() {
      const pageId = window.location.pathname.split('/').pop();
      setCookie('cookiesStatus_' + pageId, 'Rejected', 180, window.location.hostname);
      setCookie('cookiesPage_' + pageId, 'Rejected', 180, window.location.hostname);
      const cookieContainer = document.getElementById('cookiecontainer');
      if (cookieContainer) cookieContainer.style.display = 'none';
    });
  }
}

// Clear localStorage on page reload
if (performance.navigation && performance.navigation.type === 1) {
  if (localStorage.getItem('b24-form-field-stored-values')) {
    localStorage.removeItem('b24-form-field-stored-values');
    console.log("'b24-form-field-stored-values' cleared from local storage on page load.");
  }
}

// Initialize everything based on document readiness
function initialize() {
  // Set up form event listener
//   window.addEventListener('b24:form:init', handleFormInit);
  
  // Set up form listeners
  initializeFormListeners();
  formListenerInterval = setInterval(initializeFormListeners, 3000);
  
  // Set up live chat
  setupLiveChat();
  
//   // Set up phone flags
//   setupPhoneFlags();
  
  // Set up cookie consent
  setupCookieConsent();
}

// Initialize based on document readiness
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

// Clean up event listeners if needed
window.addEventListener('beforeunload', function() {
  window.removeEventListener('b24:form:init', handleFormInit);
  
  if (observer) {
    observer.disconnect();
  }
  
  if (formListenerInterval) {
    clearInterval(formListenerInterval);
  }
  
  if (buttonCheckInterval) {
    clearInterval(buttonCheckInterval);
  }
});