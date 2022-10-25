class PageTemplate{
    constructor(){
        this.websiteTitle = 'Server';
        this.pageTitle = '';
        this.defaultScripts = ['main'];
        this.scripts = [];
    }

    headHTML(){
        let title = this.websiteTitle;
        if(this.pageTitle) {
            title = this.pageTitle + ' | ' + title;
        }

        return `<head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                    <link rel='stylesheet' href='/style/style.css'>
                </head>`;
    }

    headerHTML(){
        const isLoggedIn = false;
        let accountHTML = '';

        if(isLoggedIn){
            accountHTML = `<a href='/account'>Account</a>
                           <a href='/logout'>Logout</a>`;
        }
        else {
            accountHTML = `<a href='/register'>Register</a>
                           <a href='/login'>Login</a>`;
        }

        return `<header>
                    <img src='#' alt='Logo'>
                    <nav>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/services'>Services</a>
                        ${accountHTML}
                    </nav>
                </header>`
    }

    contentHTML(){
        return `<main>CONTENT</main>`;
    }

    footerHTML() {
        return `<footer>Copyright &copy; 2022 - Anonymous</footer>`;
    }

    scriptHTML() {
        const list = [...this.defaultScripts, ...this.scripts];
        let HTML = '';
        for(const item of list) {
            HTML += `<script src="/js/${item}.js" type="module" defer></script>`;
        }
        return HTML;
    }

    render(){
        return `<!DOCTYPE html>
                <html lang="en">
                ${this.headHTML()}
                <body>
                    ${this.headerHTML()}
                    ${this.contentHTML()}
                    ${this.footerHTML()}
                    ${this.scriptHTML()}
                </body>
                </html>`
    }
}

export { PageTemplate }