

function hideMenuItem(path){
    const homeItems = document.querySelectorAll(".item-home");
    const portfolioItems = document.querySelectorAll(".item-portfolio");
    const servicesItems = document.querySelectorAll(".item-services");
    const contactItems = document.querySelectorAll(".item-contact");

    switch (path) {
        case path = "/index.html":
            for (i of homeItems){i.style.display = "none";}
            break;

        case path = "/portfolio.html":
            for (i of portfolioItems){i.style.display = "none";}
            break;

        case path = "/services.html":
            for (i of servicesItems){i.style.display = "none";}
            break;

        case path = "/contact.html":
            for (i of contactItems){i.style.display = "none";}
            break;
    }
}

function main() {
    hideMenuItem(document.location.pathname);
}

main();