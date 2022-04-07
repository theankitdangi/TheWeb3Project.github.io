'use strict'

function displaySidebar() {
    let htmlStr = `
        <div id="sidebar" class="d-flex flex-column align-items-center pe-2 py-4">
          <a id="logo" href="https://www.theweb3project.com" class="text-decoration-none mb-5 w-100 d-flex align-items-center ps-3 pe-2">
            <img src="https://uploads-ssl.webflow.com/61f079fe9c0e84c389f618a4/61f51681bbd0e1be3f0538bd_cube.svg" alt="logo-icon" class="col-2">
            <img src="https://raw.githubusercontent.com/TheWeb3Project/TheWeb3ProjectAssets/main/imgs/logotext.png" alt="TheWeb3Project" class="col ms-4" style="width: 100%;">
          </a>

          <ul id="sidebar-nav" class="list-unstyled p-0 py-5">
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="index.html" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-collection"></i></span>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="account.html" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-person-circle"></i></span>
                <span class="ms-3">Account</span>
              </a>
            </li>
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="calculator.html" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-calculator-fill"></i></span>
                <span class="ms-3">Calculator</span>
              </a>
            </li>
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="swap.html" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-lightning-charge"></i></span>
                <span class="ms-3">Swap</span>
              </a>
            </li>
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="wrap.html" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-lightning-charge"></i></span>
                <span class="ms-3">Wrap</span>
              </a>
            </li>
            <li class="mb-4 py-2 px-5 rounded-pill">
              <a href="https://docs.theweb3project.com" class="text-decoration-none text-reset d-flex align-items-center">
                <span class="fs-5"><i class="bi bi-journal-text"></i></span>
                <span class="ms-3">Docs</span>
              </a>
            </li>
          </ul>

          <div class="d-flex justify-content-around w-100 px-4">
            <a href="https://t.me/TheWeb3Project" class="text-decoration-none text-reset fs-5 social-icon-hover">
              <i class="bi bi-send-fill"></i>
            </a>
            <a href="https://twitter.com/TheWeb3Project" class="text-decoration-none text-reset fs-5 social-icon-hover">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://discord.gg/crQkCE7Mn6" class="text-decoration-none text-reset fs-5 social-icon-hover">
              <i class="bi bi-discord"></i>
            </a>
            <a href="https://www.youtube.com/c/TheWeb3Project" class="text-decoration-none text-reset fs-5 social-icon-hover">
              <i class="bi bi-youtube"></i>
            </a>

          </div>
        </div>
        `;
    select('#sidebarContainer').innerHTML = htmlStr;
}
displaySidebar();

function displayWeb3Header() {
    let htmlStr = `
    <div class="d-flex pt-3 px-sm-3">
            <button type="button" id="showSidebar" class="d-lg-none btn fs-5"><i class="bi bi-list"></i></button>

            <div class="dropdown ms-auto">
              <button class="btn rounded-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,14">
                <span class="fw-medium ms-1">WEB3</span> <span id="price" class="ms-1 small text-secondary">$0</span>
              </button>

              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="https://pancakeswap.finance/swap?outputCurrency=0x333FD139cAeF6Aa31056cC905987b77B1044d259">Buy on Pancakeswap</a></li>
                <li><a class="dropdown-item" href="https://poocoin.app/tokens/0x333fd139caef6aa31056cc905987b77b1044d259">Chart</a></li>
              </ul>
            </div>

            <button id="connect" type="button" class="btn rounded-1 ms-3">
              Connect Wallet
            </button>
          </div>
          `;
    select('#web3-header').innerHTML = htmlStr;
}
displayWeb3Header();