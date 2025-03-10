class NavBar50  extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){

        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
                    <nav class= "p-3 navbar navbar-expand-lg navbar-light bg-light w-75 h-auto" >
                <div  id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link " href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/scratch.html">Scratch</a>
                      </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/c.html"> C </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/memory.html">Memory</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/data_structure.html">Data Structures</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/python.html">Python</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sql.html">SQL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/htmlcssjs.html">HTML-CSS-JS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/flask.html">Flask</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/theend.html">The End</a>
                    </li>
                  </ul>
                </div>
              </nav>

        `;
    }
}


customElements.define("nav-bar-50", NavBar50);
