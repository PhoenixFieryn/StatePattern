// Not using class...
const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
}

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="card">
            <div class="card-header">
            Featured
            </div>
            <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
}

// About state
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `
}

// Contact state
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control">
            </div>
            <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
}

// Instantiate pageStage
const page = new PageState();

// Init the first statate
page.init();

// UI vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);
})

// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);
})

// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);
})