import { productsArray } from "./products.js";

const layout = document.querySelector('.layout');

const renderWebElements = () =>{
    layout.innerHTML += 
    `
    <header class="header-container">
            <div class="header-wrap">
                <div class="header-logo">
                    <a href="#">
                        <img class="header-logo-mobile"
                            src="https://es.wallapop.com/images/logos/mini-logo-wallapop-home-v2.svg"
                            alt="Wallapop logo Mobile">
                        <img class="header-logo-web"
                            src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg"
                            alt="Wallapop logo Web">
                    </a>
                </div>
                <div class="header-optionWrapper">
                    <div class="header-optionButtons">
                        <button class="optionButton1">
                            <span>
                                <a class="optionButton1-text" href="#">Regístrate o inicia sesión</a>
                            </span>
                        </button>

                        <button class="optionButton2">
                            <div class="subir-producto-container">
                                <svg width="30px" height="30px" viewBox="-28.13 -28.13 337.51 337.51" id="svg2"
                                    version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:cc="http://creativecommons.org/ns#"
                                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                    xmlns:svg="http://www.w3.org/2000/svg" fill="#ffffff" data-darkreader-inline-fill=""
                                    style="--darkreader-inline-fill:#191a1b; --darkreader-inline-stroke:#b7b5b3;"
                                    stroke="#ffffff" data-darkreader-inline-stroke="" stroke-width="13.21875">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                        stroke="#CCCCCC" stroke-width="15.750000000000004"
                                        data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:#9e9b95;">
                                        <defs id="defs4" />
                                        <g id="layer1" transform="translate(7276.1064,-4597.9898)">
                                            <path
                                                d="m -7135.4814,4636.829 c -56.159,0 -101.7865,45.6275 -101.7865,101.7865 0,56.1591 45.6274,101.7847 101.7865,101.7847 56.1591,0 101.7865,-45.6256 101.7865,-101.7847 0,-56.159 -45.6275,-101.7865 -101.7865,-101.7865 z m 0,9.375 c 51.0924,0 92.4115,41.319 92.4115,92.4115 0,51.0925 -41.319,92.4097 -92.4115,92.4097 -51.0924,0 -92.4115,-41.3172 -92.4115,-92.4097 0,-51.0925 41.3191,-92.4115 92.4115,-92.4115 z m 0,38.313 a 4.6875,4.6875 0 0 0 -4.6875,4.6875 v 44.7235 h -44.7217 a 4.6875,4.6875 0 0 0 -4.6875,4.6875 4.6875,4.6875 0 0 0 4.6875,4.6875 h 44.7217 v 44.7217 a 4.6875,4.6875 0 0 0 4.6875,4.6875 4.6875,4.6875 0 0 0 4.6875,-4.6875 v -44.7217 h 44.7217 a 4.6875,4.6875 0 0 0 4.6875,-4.6875 4.6875,4.6875 0 0 0 -4.6875,-4.6875 h -44.7217 v -44.7235 a 4.6875,4.6875 0 0 0 -4.6875,-4.6875 z"
                                                id="circle1167"
                                                style="color: rgb(0, 0, 0); fill: rgb(61, 61, 61); fill-opacity: 1; fill-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; --darkreader-inline-color:#b7b5b3; --darkreader-inline-fill:#99958f;"
                                                data-darkreader-inline-color="" data-darkreader-inline-fill="" />
                                        </g>
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <defs id="defs4" />
                                        <g id="layer1" transform="translate(7276.1064,-4597.9898)">
                                            <path
                                                d="m -7135.4814,4636.829 c -56.159,0 -101.7865,45.6275 -101.7865,101.7865 0,56.1591 45.6274,101.7847 101.7865,101.7847 56.1591,0 101.7865,-45.6256 101.7865,-101.7847 0,-56.159 -45.6275,-101.7865 -101.7865,-101.7865 z m 0,9.375 c 51.0924,0 92.4115,41.319 92.4115,92.4115 0,51.0925 -41.319,92.4097 -92.4115,92.4097 -51.0924,0 -92.4115,-41.3172 -92.4115,-92.4097 0,-51.0925 41.3191,-92.4115 92.4115,-92.4115 z m 0,38.313 a 4.6875,4.6875 0 0 0 -4.6875,4.6875 v 44.7235 h -44.7217 a 4.6875,4.6875 0 0 0 -4.6875,4.6875 4.6875,4.6875 0 0 0 4.6875,4.6875 h 44.7217 v 44.7217 a 4.6875,4.6875 0 0 0 4.6875,4.6875 4.6875,4.6875 0 0 0 4.6875,-4.6875 v -44.7217 h 44.7217 a 4.6875,4.6875 0 0 0 4.6875,-4.6875 4.6875,4.6875 0 0 0 -4.6875,-4.6875 h -44.7217 v -44.7235 a 4.6875,4.6875 0 0 0 -4.6875,-4.6875 z"
                                                id="circle1167"
                                                style="color: rgb(0, 0, 0); fill: rgb(61, 61, 61); fill-opacity: 1; fill-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; --darkreader-inline-color:#b7b5b3; --darkreader-inline-fill:#99958f;"
                                                data-darkreader-inline-color="" data-darkreader-inline-fill="" />
                                        </g>
                                    </g>
                                </svg>
                                <span>
                                    <a href="#">Subir producto</a>
                                </span>
                            </div>
                        </button>

                        <button class="optionButton3">
                            <div class="header-input-container">
                                <input type="text" name="Text" id="header-searching-text-box"
                                    placeholder="Buscar en Todas las categorías">
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </header>
        <main>
            <section class="main-search">
                <h1 class="search-title">
                    <strong class="search-title-first">
                        Compra y vende cosas de segunda mano
                    </strong>
                    <span class="search-title-second">
                        casi, casi, sin moverte del sofá
                    </span>
                </h1>
                <article id="main-search-box">
                    <!-- This form will need more attributes to JS in second project -->
                    <form class="search-form-container" id="searchBoxForm">
                        <div class="search-form-wrapper">
                            <div class="search-input-wrapper">
                                <svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" fill="#6b6b6b" data-darkreader-inline-fill=""
                                    style="--darkreader-inline-fill:#4c5255; --darkreader-inline-stroke:#7c756b;"
                                    stroke="#6b6b6b" data-darkreader-inline-stroke="" stroke-width="82.944">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                        stroke="#CCCCCC" stroke-width="49.152" data-darkreader-inline-stroke=""
                                        style="--darkreader-inline-stroke:#9e9b95;">
                                        <path
                                            d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
                                            fill="#000000" data-darkreader-inline-fill=""
                                            style="--darkreader-inline-fill:#060606;"></path>
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
                                            fill="#000000" data-darkreader-inline-fill=""
                                            style="--darkreader-inline-fill:#060606;"></path>
                                    </g>
                                </svg>
                                <input class="search-input-text" name="keywords" type="text" value=""
                                    placeholder="Buscar en Todas las categorías" autocomplete="off">
                            </div>
                            <div class="recent-searches-list">
                                <div class="recent-searches-header-container">
                                    <span class="recent-searches-header-text">Búsquedas recientes</span>
                                    <button class="recent-searches-header-button" type="button">Eliminar
                                    </button>
                                </div>
                            </div>
                            <button class="search-submit-button-container">
                                <a link="#" role="button" rel="noindex nofollow" class="search-submit-button">Buscar</a>
                            </button>
                        </div>
                    </form>
                </article>
            </section>
            <section class="categories-wrap">
                <h2 class="categories-title">Descubre nuestras categorías</h2>
                <article class="categories-element-wrapper">
                    <div class="arrow-left-wrapper">
                        <img src="https://es.wallapop.com/images/home/arrow-left.svg" alt="Arrow left for web"
                            class="arrow-left">
                    </div>
                    <div class="categories-element-container">
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/all-categories.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/all-categories_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Todas las categorías</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_cars.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_cars_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Coches</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_motorbike.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_motorbike_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Motos</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_motoraccessories.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_motoraccessories_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Motor y Accesorios</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_fashionaccessories.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_fashionaccessories_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Moda y Accesorios</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_realestate.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_realestate_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Inmobiliaria</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_tvaudiocameras.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_tvaudiocameras_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> TV, Audio y Foto</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_cellphonesaccessories.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_cellphonesaccessories_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Móviles y Teléfonía</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_computerselectronic.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_computerselectronic_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Electrónica</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_sportsleisure.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_sportsleisure_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Deportes y Ocio</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_bikes.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_bikes_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Bicicletas</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_gamesconsoles.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_gamesconsoles_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Consolas y videojuegos</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_homegarden.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_homegarden_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Hogar y Jardín</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_appliances.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_appliances_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Electrodomésticos</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_gamesbooks.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_gamesbooks_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Cine, Libros y Música</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_babieschild.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_babieschild_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Niños y Bebés</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_collectiblesart.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_collectiblesart_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Coleccionismo</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_construction.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src=https://es.wallapop.com/images/icons/categories-slider/category_construction_hover.svg
                                alt="category-icon-hovered">
                            <p class="category-title"> Construcción y Reformas</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_agricultureindustrial.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_agricultureindustrial_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Industria y Agricultura</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_jobs.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_jobs_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Empleo</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_services.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_services_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Servicios</p>
                        </a>
                        <a href="#" class="categories-element">
                            <img class="category-unhovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_others.svg"
                                alt="category-icon-unhovered">
                            <img class="category-hovered-icon"
                                src="https://es.wallapop.com/images/icons/categories-slider/category_others_hover.svg"
                                alt="category-icon-hovered">
                            <p class="category-title"> Otros</p>
                        </a>

                    </div>
                    <div class="arrow-wrapper">
                        <img src="https://es.wallapop.com/images/home/arrow-right.svg" alt="Arrow Right"
                            class="arrow-right">
                    </div>
                </article>
            </section>
            <section class="home-collections">
                <article class="collection-wrapper">
                    <h2 class="collection-title">Usa el filtro y encuentra tu producto ideal🚀</h2>
                    <section class="filter">
                        <select class="filter-select" name="sellers" id="filter-sellers">
                        <option value="default">--Elige un vendedor--</option>
                        <option value="Seller-1">Seller-1</option>
                        <option value="Seller-2">Seller-2</option>
                        <option value="Seller-3">Seller-3</option>
                        <option value="Seller-4">Seller-4</option>
                    </select>
                    <div class="filter-input-container">
                        <input class="filter-input" type="number" id="precio" name="precio" placeholder="Precio máximo">
                        <button id="filter-submit-button" type="submit">Buscar</button>
                        <button id="filter-clear-button" type="submit">Limpiar Filtros</button>

                    </div>
                    </section>
                    <section class="collection-subsections products">
                
                    </section>
                </article>
                <article class="collection-wrapper">
                    <h2 class="collection-title">o échale un ojo al deporte...</h2>
                    <section class="collection-subsections">
                        <a href="#" class="collection-subsection">
                            <img src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_448_section_483_44fd13fa-5852-4934-9956-0339a500e7ac.png?cacheBuster=i+JSems/OO8nJ8hVY3Ka0A=="
                                class="subsection-image" alt="Bicicleta estática">
                            <h3 class="subsection-title"> Bicicleta estática </h3>
                            <small class="subsection-subtitle">17.751 anuncios</small>
                        </a>
                        <a href="#" class="collection-subsection">
                            <img src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_445_section_481_e295571d-b5a6-4efb-bceb-8a22f32b9766.png?cacheBuster=EHFf7D+WtiOL+hm9cCXBYw=="
                                class="subsection-image" alt="Bicicleta de carretera">
                            <h3 class="subsection-title"> Bicicleta de carretera </h3>
                            <small class="subsection-subtitle">36.309 anuncios</small>
                        </a>
                        <a href="#" class="collection-subsection">
                            <img src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_446_section_479_60433571-aa14-498c-83da-6095b14c44f5.png?cacheBuster=WmOiPEF2RNXuy26rPeTdIg=="
                                class="subsection-image" alt="Bicicleta de montaña">
                            <h3 class="subsection-title"> Bicicleta de montaña </h3>
                            <small class="subsection-subtitle">24.136 anuncios</small>
                        </a>
                        <a href="#" class="collection-subsection">
                            <img src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_448_section_483_44fd13fa-5852-4934-9956-0339a500e7ac.png?cacheBuster=i+JSems/OO8nJ8hVY3Ka0A=="
                                class="subsection-image" alt="Cinta de correr">
                            <h3 class="subsection-title"> Cinta de correr </h3>
                            <small class="subsection-subtitle">7.954 anuncios</small>
                        </a>
                        <a href="#" class="collection-subsection">
                            <img src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_447_section_480_43828957-5bc2-4948-869f-3f62703f354f.png?cacheBuster=J+1NI9EVC48TFmhor7EUeQ=="
                                class="subsection-image" alt="Mancuernas">
                            <h3 class="subsection-title"> Mancuernas </h3>
                            <small class="subsection-subtitle">7.292 anuncios</small>
                        </a>
                    </section>
                </article>
            </section>
            <section class="banners">
                <div class="pro-banner">
                    <div class="pro-banner-wrapper">
                        <div class="pro-banner-info-top">
                            <img src="https://es.wallapop.com/images/home/walla_toy.svg">
                            <img src="https://es.wallapop.com/images/home/walla_chair.svg">
                            <img src="https://es.wallapop.com/images/home/walla_drill.svg">
                        </div>
                        <div class="pro-banner-info-bottom">
                            <div class="pro-banner-info-bottom-section">
                                <span class="pro-banner-title">Wallapop PRO</span>
                                <span class="pro-banner-subtitle">¿Tienes un negocio y quieres empezar a vender
                                    online?</span>
                                <a href="#" class="pro-banner-button">Más info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <article class="banners-download">
                    <section class="download-column-1">
                        <article class="column-row-1">
                            <img src="https://es.wallapop.com/images/home/download/es/phones.png"
                                alt="Descargar Wallapop">
                        </article>
                        <article class="column-row-2">
                            <section class="download-scores">
                                <articles class="download-scores-element">
                                    <div class="score">
                                        <div class="score-wrapper">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                        </div>
                                    </div>
                                    <p class="download-scores-text">
                                        <span">4.8</span>
                                            <img src="https://es.wallapop.com/images/home/new-apple-icon.svg"
                                                alt="apple">
                                    </p>
                                    <span>AppStore</span>
                                </articles>
                                <articles class="download-scores-element">
                                    <div class="score">
                                        <div class="score-wrapper">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                        </div>
                                    </div>
                                    <p class="download-scores-text">
                                        <span">4.7</span>
                                            <img src="https://es.wallapop.com/images/home/new-play-store-icon.svg"
                                                alt="android">
                                    </p>
                                    <span>PlayStore</span>
                                </articles>
                            </section>
                        </article>
                    </section>
                    <section class="download-column-2">
                        <article class="column-row-1">
                            <p class="download-title">
                                <strong>¿Quieres la app? Descárgala ahora</strong>
                            </p>
                            <img class="download-qr-code" src="https://es.wallapop.com/images/home/qr-download-app.svg"
                                alt="App store">
                            <section class="download-buttons">
                                <a href="" class="download-button-apple">
                                    <img src="https://es.wallapop.com/images/home/download/es/appstore.svg"
                                        alt="App store">
                                </a>
                                <a href="" class="download-button-android">
                                    <img src="https://es.wallapop.com/images/home/download/es/googleplay.svg"
                                        alt="Google play">
                                </a>
                            </section>
                        </article>
                        <article class="column-row-2">
                            <section class="download-scores">
                                <articles class="download-scores-element">
                                    <div class="score">
                                        <div class="score-wrapper">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                        </div>
                                    </div>
                                    <p class="download-scores-text">
                                        <span>4.8</span>
                                        <img src="https://es.wallapop.com/images/home/new-apple-icon.svg" alt="apple">
                                        <span>AppStore</span>
                                    </p>
                                </articles>
                                <articles class="download-scores-element">
                                    <div class="score">
                                        <div class="score-wrapper">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                            <img src="https://es.wallapop.com/images/home/score-star.svg"
                                                alt="score star">
                                        </div>
                                    </div>
                                    <p class="download-scores-text">
                                        <span>4.7</span>
                                        <img src="https://es.wallapop.com/images/home/new-play-store-icon.svg"
                                            alt="android">
                                        <span>PlayStore</span>
                                    </p>
                                </articles>
                            </section>
                        </article>
                    </section>
                </article>
            </section>
            <div class="list-keywords-container">
                <div class="row">
                    <div class="col">
                        <div class="first-links-container">
                            <div class="category">
                                <p>Coches</p>
                                <span>
                                    <a href="#">Furgonetas</a>,
                                </span>
                                <span>
                                    <a href="#">Diesel</a>,
                                </span>
                                <span>
                                    <a href="#">Eléctricos</a>,
                                </span>
                                <span>
                                    <a href="#">Audi A5</a>,
                                </span>
                                <span>
                                    <a href="#">BMW X5</a>,
                                </span>
                                <span>
                                    <a href="#">Chevrolet</a>,
                                </span>
                                <span>
                                    <a href="#">Citroen Xsara</a>,
                                </span>
                                <span>
                                    <a href="#">Fiat Coupe</a>,
                                </span>
                                <span>
                                    <a href="#">Ford</a>,
                                </span>
                                <span>
                                    <a href="#">Ford Fiesta</a>,
                                </span>
                                <span>
                                    <a href="#">Hyundai Getz</a>,
                                </span>
                                <span>
                                    <a href="#">Jeep</a>,
                                </span>
                                <span>
                                    <a href="#">Lada Niva</a>,
                                </span>
                                <span>
                                    <a href="#">Mazda</a>,
                                </span>
                                <span>
                                    <a href="#">Mercedes Vito</a>,
                                </span>
                                <span>
                                    <a href="#">Mitsubishi Montero</a>,
                                </span>
                                <span>
                                    <a href="#">Nissan</a>,
                                </span>
                                <span>
                                    <a href="#">Nissan Qashqai</a>,
                                </span>
                                <span>
                                    <a href="#">Opel Corsa</a>,
                                </span>
                                <span>
                                    <a href="#">Peugeot 3008</a>,
                                </span>
                                <span>
                                    <a href="#">Porsche</a>,
                                </span>
                                <span>
                                    <a href="#">Renault Clio</a>,
                                </span>
                                <span>
                                    <a href="#">Renault Scenic</a>,
                                </span>
                                <span>
                                    <a href="#">Renault Trafic</a>,
                                </span>
                                <span>
                                    <a href="#">SEAT</a>,
                                </span>
                                <span>
                                    <a href="#">SEAT Cordoba</a>,
                                </span>
                                <span>
                                    <a href="#">Smart</a>,
                                </span>
                                <span>
                                    <a href="#">Suzuki Samurai</a>,
                                </span>
                                <span>
                                    <a href="#">Suzuki Vitara</a>,
                                </span>
                                <span>
                                    <a href="#">Toyota</a>,
                                </span>
                                <span>
                                    <a href="#">Volkswagen</a>,
                                </span>
                                <span>
                                    <a href="#">Volkswagen Passat</a>,
                                </span>
                                <span>
                                    <a href="#">Volvo</a>,
                                </span>
                                <span>
                                    <a href="#">Camión</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Motos</p>
                                <span>
                                    <a href="#">Derbi Senda</a>,
                                </span>
                                <span>
                                    <a href="#">Ducati Monster</a>,
                                </span>
                                <span>
                                    <a href="#">Gas Gas</a>,
                                </span>
                                <span>
                                    <a href="#">Harley Davidson</a>,
                                </span>
                                <span>
                                    <a href="#">Moto Honda</a>,
                                </span>
                                <span>
                                    <a href="#">Moto Honda CBR</a>,
                                </span>
                                <span>
                                    <a href="#">Kawasaki</a>,
                                </span>
                                <span>
                                    <a href="#">Kymco</a>,
                                </span>
                                <span>
                                    <a href="#">Montesa Cota</a>,
                                </span>
                                <span>
                                    <a href="#">Ossa</a>,
                                </span>
                                <span>
                                    <a href="#">Piaggio Zip</a>,
                                </span>
                                <span>
                                    <a href="#">Rieju</a>,
                                </span>
                                <span>
                                    <a href="#">Suzuki</a>,
                                </span>
                                <span>
                                    <a href="#">Vespa</a>,
                                </span>
                                <span>
                                    <a href="#">Yamaha T-MAX</a>,
                                </span>
                                <span>
                                    <a href="#">Yamaha Jog</a>,
                                </span>
                                <span>
                                    <a href="#">Yamaha Aerox</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Motor y Accesorios</p>
                                <span>
                                    <a href="#">Moto de agua</a>,
                                </span>
                                <span>
                                    <a href="#">Baúl moto</a>,
                                </span>
                                <span>
                                    <a href="#">Supermotard</a>,
                                </span>
                                <span>
                                    <a href="#">Pit bike</a>,
                                </span>
                                <span>
                                    <a href="#">Llantas</a>,
                                </span>
                                <span>
                                    <a href="#">Llantas Audi</a>,
                                </span>
                                <span>
                                    <a href="#">Buggies</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Moda y Accesorios</p>
                                <span>
                                    <a href="#">Zapatillas</a>,
                                </span>
                                <span>
                                    <a href="#">Anillo</a>,
                                </span>
                                <span>
                                    <a href="#">Camisetas</a>,
                                </span>
                                <span>
                                    <a href="#">Vestido</a>,
                                </span>
                                <span>
                                    <a href="#">Vestido de fiesta</a>,
                                </span>
                                <span>
                                    <a href="#">Vestido de novia</a>,
                                </span>
                                <span>
                                    <a href="#">Mochila</a>,
                                </span>
                                <span>
                                    <a href="#">Ropa</a>,
                                </span>
                                <span>
                                    <a href="#">Pantalones</a>,
                                </span>
                                <span>
                                    <a href="#">Zapatos</a>,
                                </span>
                                <span>
                                    <a href="#">Sandalias</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Inmobiliaria</p>
                                <span>
                                    <a href="#">Piso</a>,
                                </span>
                                <span>
                                    <a href="#">Oficinas</a>,
                                </span>
                                <span>
                                    <a href="#">Casas</a>,
                                </span>
                                <span>
                                    <a href="#">Traspaso</a>,
                                </span>
                                <span>
                                    <a href="#">Traspaso Bar</a>,
                                </span>
                                <span>
                                    <a href="#">Compartir piso</a>,
                                </span>
                                <span>
                                    <a href="#">Parcela</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>TV, Audio y Foto</p>
                                <span>
                                    <a href="#">Samsung Gear</a>,
                                </span>
                                <span>
                                    <a href="#">Altavoces</a>,
                                </span>
                                <span>
                                    <a href="#">Cámara de fotos</a>,
                                </span>
                                <span>
                                    <a href="#">Cámara de fotos reflex</a>,
                                </span>
                                <span>
                                    <a href="#">Equipo de música</a>,
                                </span>
                                <span>
                                    <a href="#">Proyector</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Móviles y Telefonía</p>
                                <span>
                                    <a href="#">Galaxy</a>,
                                </span>
                                <span>
                                    <a href="#">Huawei</a>,
                                </span>
                                <span>
                                    <a href="#">Iphone</a>,
                                </span>
                                <span>
                                    <a href="#">Xiaomi</a>,
                                </span>
                                <span>
                                    <a href="#">Iphone 12</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Informática y Electrónica</p>
                                <span>
                                    <a href="#">Pantalla de ordenador</a>,
                                </span>
                                <span>
                                    <a href="#">Impresora</a>,
                                </span>
                                <span>
                                    <a href="#">Tarjeta gráfica</a>,
                                </span>
                                <span>
                                    <a href="#">MacBook</a>,
                                </span>
                                <span>
                                    <a href="#">MacBook Pro</a>,
                                </span>
                                <span>
                                    <a href="#">MacBook air</a>,
                                </span>
                                <span>
                                    <a href="#">Apple watch</a>,
                                </span>
                                <span>
                                    <a href="#">GoPro Hero</a>,
                                </span>
                                <span>
                                    <a href="#">Pulsómetro</a>,
                                </span>
                                <span>
                                    <a href="#">Garmin</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Deporte y Ocio</p>
                                <span>
                                    <a href="#">Caña de pescar</a>,
                                </span>
                                <span>
                                    <a href="#">Botas de fútbol</a>,
                                </span>
                                <span>
                                    <a href="#">Piragua</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Bicicletas</p>
                                <span>
                                    <a href="#">Bicicleta Scott</a>,
                                </span>
                                <span>
                                    <a href="#">Bicicleta Trek</a>,
                                </span>
                                <span>
                                    <a href="#">Bicicleta Bh</a>,
                                </span>
                                <span>
                                    <a href="#">Bicicleta Bmx</a>,
                                </span>
                                <span>
                                    <a href="#">Bicicleta de paseo</a>,
                                </span>
                                <span>
                                    <a href="#">Bicicleta Fixie</a>,
                                </span>
                                <span>
                                    <a href="#">Rodillo Bkool</a>,
                                </span>
                                <span>
                                    <a href="#">Ruedas de bicicleta</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Consolas y Videojuegos</p>
                                <span>
                                    <a href="#">Nintendo Switch</a>,
                                </span>
                                <span>
                                    <a href="#">Nintendo 3DS</a>,
                                </span>
                                <span>
                                    <a href="#">PlayStation Vita</a>,
                                </span>
                                <span>
                                    <a href="#">PlayStation 4</a>,
                                </span>
                                <span>
                                    <a href="#">PlayStation 4 pro</a>,
                                </span>
                                <span>
                                    <a href="#">PlayStation 3</a>,
                                </span>
                                <span>
                                    <a href="#">Xbox</a>,
                                </span>
                                <span>
                                    <a href="#">Xbox one</a>,
                                </span>
                                <span>
                                    <a href="#">Wii</a>,
                                </span>
                                <span>
                                    <a href="#">Mandos PlayStation 4</a>,
                                </span>
                                <span>
                                    <a href="#">Maquina recreativa</a>,
                                </span>
                                <span>
                                    <a href="#">Game boy</a>,
                                </span>
                                <span>
                                    <a href="#">PSP</a>,
                                </span>
                                <span>
                                    <a href="#">PlayStation 5</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Hogar y Jardín</p>
                                <span>
                                    <a href="#">Mueble Ikea</a>,
                                </span>
                                <span>
                                    <a href="#">Mueble de cocina</a>,
                                </span>
                                <span>
                                    <a href="#">Caseta prefabricada</a>,
                                </span>
                                <span>
                                    <a href="#">Acuario</a>,
                                </span>
                                <span>
                                    <a href="#">Cuadro</a>,
                                </span>
                                <span>
                                    <a href="#">Armario</a>,
                                </span>
                                <span>
                                    <a href="#">Cómoda</a>,
                                </span>
                                <span>
                                    <a href="#">Cama</a>,
                                </span>
                                <span>
                                    <a href="#">Cama nido</a>,
                                </span>
                                <span>
                                    <a href="#">Zapatero</a>,
                                </span>
                                <span>
                                    <a href="#">Jacuzzi exterior</a>,
                                </span>
                                <span>
                                    <a href="#">Espejo</a>,
                                </span>
                                <span>
                                    <a href="#">Canape</a>,
                                </span>
                                <span>
                                    <a href="#">Mesa</a>,
                                </span>
                                <span>
                                    <a href="#">Mesa comedor</a>,
                                </span>
                                <span>
                                    <a href="#">Mesa extensible</a>,
                                </span>
                                <span>
                                    <a href="#">Butaca</a>,
                                </span>
                                <span>
                                    <a href="#">Colchones</a>,
                                </span>
                                <span>
                                    <a href="#">Lámparas</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Electrodomésticos</p>
                                <span>
                                    <a href="#">Termo eléctrico</a>,
                                </span>
                                <span>
                                    <a href="#">Estufa de leña</a>,
                                </span>
                                <span>
                                    <a href="#">Estufa de pellets</a>,
                                </span>
                                <span>
                                    <a href="#">Campana extractora</a>,
                                </span>
                                <span>
                                    <a href="#">Lavavajillas</a>,
                                </span>
                                <span>
                                    <a href="#">Congelador</a>,
                                </span>
                                <span>
                                    <a href="#">Nevera</a>,
                                </span>
                                <span>
                                    <a href="#">Lavadora</a>,
                                </span>
                                <span>
                                    <a href="#">Secadora</a>,
                                </span>
                                <span>
                                    <a href="#">Thermomix</a>,
                                </span>
                                <span>
                                    <a href="#">Robot de cocina</a>,
                                </span>
                                <span>
                                    <a href="#">Horno</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Cine, Libros y Música</p>
                                <span>
                                    <a href="#">Libros</a>,
                                </span>
                                <span>
                                    <a href="#">Libros Uned</a>,
                                </span>
                                <span>
                                    <a href="#">Libros infantiles</a>,
                                </span>
                                <span>
                                    <a href="#">Libros inglés</a>,
                                </span>
                                <span>
                                    <a href="#">Vinilos</a>,
                                </span>
                                <span>
                                    <a href="#">Cómics</a>,
                                </span>
                                <span>
                                    <a href="#">Amplificador</a>,
                                </span>
                                <span>
                                    <a href="#">Clarinete</a>,
                                </span>
                                <span>
                                    <a href="#">Piano</a>,
                                </span>
                                <span>
                                    <a href="#">Batería electrónica</a>,
                                </span>
                                <span>
                                    <a href="#">Violín</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Niños y Bebés</p>
                                <span>
                                    <a href="#">Muñeca</a>,
                                </span>
                                <span>
                                    <a href="#">Funko Pop</a>,
                                </span>
                                <span>
                                    <a href="#">Columpio</a>,
                                </span>
                                <span>
                                    <a href="#">Casa de muñecas</a>,
                                </span>
                                <span>
                                    <a href="#">Carrito Bugaboo</a>,
                                </span>
                                <span>
                                    <a href="#">Bañera cambiador</a>,
                                </span>
                                <span>
                                    <a href="#">Capota Bugaboo</a>,
                                </span>
                                <span>
                                    <a href="#">MaxiCosi</a>,
                                </span>
                                <span>
                                    <a href="#">Juguetes</a>,
                                </span>
                                <span>
                                    <a href="#">Trona</a>,
                                </span>
                                <span>
                                    <a href="#">Cambiador bebé</a>,
                                </span>
                                <span>
                                    <a href="#">Cuna de viaje</a>,
                                </span>
                                <span>
                                    <a href="#">Minicuna</a>,
                                </span>
                                <span>
                                    <a href="#">Bebés Llorones</a>,
                                </span>
                                <span>
                                    <a href="#">Bebé Reborn</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Coleccionismo</p>
                                <span>
                                    <a href="#">Monedas</a>,
                                </span>
                                <span>
                                    <a href="#">Figuras de Lladró</a>,
                                </span>
                                <span>
                                    <a href="#">Monedas de plata</a>,
                                </span>
                                <span>
                                    <a href="#">Chapas</a>,
                                </span>
                                <span>
                                    <a href="#">Chapas para tejado</a>,
                                </span>
                                <span>
                                    <a href="#">Teléfono antiguo</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Construcción y Reformas</p>
                                <span>
                                    <a href="#">Hormigonera</a>,
                                </span>
                                <span>
                                    <a href="#">Hormigonera eléctrica</a>,
                                </span>
                                <span>
                                    <a href="#">Puertas de madera</a>,
                                </span>
                                <span>
                                    <a href="#">Herramientas</a>,
                                </span>
                                <span>
                                    <a href="#">Compresor</a>,
                                </span>
                                <span>
                                    <a href="#">Lijadora</a>,
                                </span>
                                <span>
                                    <a href="#">Puertas de madera exteriores</a>,
                                </span>
                                <span>
                                    <a href="#">Soplador</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Industria y Agricultura</p>
                                <span>
                                    <a href="#">Cámara Frigorífica</a>,
                                </span>
                                <span>
                                    <a href="#">Retroexcavadora</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Servicios</p>
                                <span>
                                    <a href="#">Masajista</a>,
                                </span>
                                <span>
                                    <a href="#">Limpieza</a>,
                                </span>
                                <span>
                                    <a href="#">Limpieza de hogar</a>,
                                </span>
                                <span>
                                    <a href="#">Transporte</a>,
                                </span>
                                <span>
                                    <a href="#">Mudanzas</a>,
                                </span>
                                <span>
                                    <a href="#">Niñera</a>,
                                </span>
                                <span>
                                    <a href="#">Clases particulares</a>,
                                </span>
                                <span>
                                    <a href="#">Montaje de muebles</a>,
                                </span>
                                <span>
                                    <a href="#">Masajes</a>.
                                </span>
                            </div>
                            <div class="category">
                                <p>Otros</p>
                                <span>
                                    <a href="#">Máquina de coser</a>,
                                </span>
                                <span>
                                    <a href="#">Playmobil</a>,
                                </span>
                                <span>
                                    <a href="#">Maleta</a>,
                                </span>
                                <span>
                                    <a href="#">Mesa de billar</a>.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-links-container">
                <div class="second-links-container-wrap">
                    <div class="row">
                        <section class="second-links-left-column">
                            <p class="title">Ciudades</p>
                            <h2>
                                <a title="Segunda mano en Madrid" href="#">Madrid,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Barcelona" href="#">Barcelona,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Valencia" href="#">Valencia,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Sevilla" href="#">Sevilla,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Zaragoza" href="#">Zaragoza,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Málaga" href="#">Málaga,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Alicante" href="#">Alicante,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Bilbao" href="#">Bilbao,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Valladolid" href="#">Valladolid,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Móstoles" href="#">Móstoles,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Vigo" href="#">Vigo,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Alcalá de Henares" href="#">Alcalá de Henares,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Granada" href="#">Granada,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Gijón" href="#">Gijón,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Murcia" href="#">Murcia,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Burgos" href="#">Burgos,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Getafe" href="#">Getafe,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Sabadell" href="#">Sabadell,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en A Coruña" href="#">A Coruña,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Leganés" href="#">Leganés,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Córdoba" href="#">Córdoba,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Badalona" href="#">Badalona,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Palma de Mallorca" href="#">Palma de Mallorca,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Oviedo" href="#">Oviedo,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Elche" href="#">Elche,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Santander" href="#">Santander,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Salamanca" href="#">Salamanca,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Pamplona" href="#">Pamplona,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Tarragona" href="#">Tarragona,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Girona" href="#">Girona,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Almería" href="#">Almería,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Donostia-San Sebastián" href="#">Donostia-San
                                    Sebastián,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en L'Hospitalet de Llobregat" href="#">L'Hospitalet
                                    de Llobregat,</a>
                            </h2>
                            <h2>
                                <a title="Segunda mano en Las Palmas de Gran Canaria" href="#">Las Palmas de
                                    Gran Canaria.</a>
                            </h2>
                            <a href="#">ver todas las ciudades</a>
                        </section>
                        <section class="second-links-right-column">
                            <h2 class="title">Wallapop y la segunda mano</h2>
                            <p>
                                “Si no lo usas, súbelo”. Bajo esta premisa, Wallapop se ha convertido en una
                                comunidad en la que cada día millones de personas compran y venden productos
                                de segunda mano. Y no hemos hecho más que empezar. Comprar segunda mano es
                                la mejor forma de conseguir lo que necesitas a un precio mejor. ¡Pero va
                                mucho más allá! Cada vez que compras algo en Wallapop, fomentas un consumo
                                más responsable, porque alargas la vida de los productos y evitas su
                                sobreproducción. Vender segunda mano es decirle al mundo que podemos vivir
                                más con menos. Más espacio en casa, más dinero extra, más nuevas
                                experiencias, más recuerdos inolvidables, más lo que quieras, y menos cosas
                                sin usar guardadas en el armario. Por fin, la sociedad ha comprendido que la
                                segunda mano es una nueva forma de consumir llena de beneficios. Esta es la
                                razón por la que cada vez más personas usan Wallapop, la plataforma líder de
                                las páginas de segunda mano y de anuncios clasificados.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <footer>
                <div class="footer-container">
                    <div class="footer-row-1">
                        <div class="footer-row-1-column-1">
                            <img src="https://es.wallapop.com/images/logos/img_logo_footer.png"
                                alt="Wallapop logo footer">
                            <span class="wallapop-logo-subtitle">
                                Copyright © 2023 Wallapop © de sus respectivos propietarios
                            </span>
                        </div>
                        <div class="footer-row-1-column-2">
                            <div class="row">
                                <div class="link-blocks">
                                    <div class="block-links-title">Wallapop</div>
                                    <ul>
                                        <li>
                                            <a href="#" title="Quienes somos">Quiénes somos</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Cómo funciona">Cómo funciona</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Brand Book">Brand Book</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Prensa">Prensa</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Empleo">Empleo</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="link-blocks">
                                    <div class="block-links-title">Soporte</div>
                                    <ul>
                                        <li>
                                            <a href="#" title="Centro de ayuda">Centro de ayuda</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Reglas de publicación">Reglas de publicación</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Consejos de seguridad">Consejos de seguridad</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="link-blocks">
                                    <div class="block-links-title">Legal</div>
                                    <ul>
                                        <li>
                                            <a href="#" title="Aviso legal">Aviso legal</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Condiciones de uso">Condiciones de uso</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Política de privacidad">Política de privacidad</a>
                                        </li>
                                        <li>
                                            <button class="cookies-button">Cookies</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="link-blocks">
                                    <div class="block-links-title">Motor</div>
                                    <ul>
                                        <li>
                                            <a href="#" title="Particulares">Particulares</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Profesionales">Profesionales</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="link-blocks">
                                    <div class="block-links-title">Wallapop PRO</div>
                                    <ul>
                                        <li>
                                            <a href="#" title="Impulsa tu negocio">Impulsa tu negocio</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-row-2">
                        <div class="download-links-row row">
                            <a href="#" class="download-link-box">
                                <img src="https://es.wallapop.com/images/icons/ic-ios.svg" alt="Apple Store logo">
                                <span>Apple store</span>
                            </a>
                            <a href="#" class="download-link-box">
                                <img src="https://es.wallapop.com/images/icons/ic-huawei.svg" alt="Huawei">
                                <span>AppGallery</span>
                            </a>
                            <a href="#" class="download-link-box">
                                <img src="https://es.wallapop.com/images/icons/ic-android.svg" alt="Android logo">
                                <span>Google Play</span>
                            </a>
                        </div>
                        <div class="social-media-links">
                            <a href="#" class="social-media-links-element">
                                <img class="social-media-unhovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_facebook_normal.svg"
                                    alt="Facebook logo">
                                <img class="social-media-hovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_facebook_normal_hover.svg"
                                    alt="Facebook logo hovered">
                            </a>
                            <a href="#" class="social-media-links-element">
                                <img class="social-media-unhovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_twitter_normal.svg" alt="Twitter logo">
                                <img class="social-media-hovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_twitter_normal_hover.svg"
                                    alt="Twitter logo hovered">
                            </a>
                            <a href="#" class="social-media-links-element">
                                <img class="social-media-unhovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_ig.svg" alt="Instagram logo">
                                <img class="social-media-hovered-logo"
                                    src="https://es.wallapop.com/images/icons/ic_ig_hover.svg"
                                    alt="Instagram logo hovered">
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
        <div class="mobile-bottom-nav-bar">
            <nav class="nav-bar-container">
                <a href="#" class="nav-bar-option">
                    <svg width="28" height="28" fill="none" class="Icon  Icon--white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23" name="tb-home-active">
                        <path fill="#fff" d="M0 0h23v23H0z"></path>
                        <path
                            d="M2.011 8.4l2.197-6.2c0-.1.2-.2.3-.2h14.08c.1 0 .2.1.3.2l2.097 6.2v.2c-.3.2-.5.5-.699.7-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.6-2.098 1.1-.299.4-.399.4-.599.4-.2 0-.3-.1-.599-.4-.4-.4-.998-1.1-2.097-1.1-1.098 0-1.797.7-2.197 1.1-.3.4-.4.4-.599.4-.2 0-.3-.1-.6-.4-.399-.4-.998-1.1-2.096-1.1-1.099 0-1.698.7-2.097 1.1-.3.4-.4.4-.6.4-.2 0-.3-.1-.599-.4-.2-.2-.5-.5-.799-.7v-.2zM9.6 20.9v-4.5c0-1 .8-1.7 1.798-1.7h.3c.998 0 1.698.8 1.698 1.7v4.5H9.6z"
                            fill="#00FFE0" fill-opacity="0.25"></path>
                        <path
                            d="M22.883 7.7l-2.197-6.2c-.3-.9-1.199-1.5-2.098-1.5H4.508C3.509 0 2.71.6 2.31 1.5L.114 7.7c-.3 1 0 2 .799 2.5l.4.4c.1.2.299.4.598.5v6.3c0 3 2.397 5.5 5.293 5.5h8.788c2.896 0 5.293-2.4 5.293-5.5v-6.3c.2-.2.4-.4.599-.5l.4-.4c.599-.5.898-1.5.599-2.5zM2.01 8.4l2.197-6.2c0-.1.2-.2.3-.2h14.08c.1 0 .2.1.3.2l2.097 6.2v.2c-.3.2-.5.5-.699.7-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.6-2.098 1.1-.3.4-.399.4-.599.4-.2 0-.3-.1-.599-.4-.4-.4-.998-1.1-2.097-1.1-1.098 0-1.797.7-2.197 1.1-.3.4-.4.4-.6.4-.199 0-.299-.1-.598-.4-.4-.4-.999-1.1-2.097-1.1-1.099 0-1.698.7-2.097 1.1-.3.4-.4.4-.6.4-.2 0-.3-.1-.599-.4-.2-.2-.5-.5-.799-.7v-.2zM9.6 20.9v-4.5c0-1 .799-1.7 1.797-1.7h.3c.999 0 1.698.8 1.698 1.7v4.5H9.6zm6.291 0h-.5v-4.5c0-2.1-1.697-3.7-3.694-3.7h-.3c-2.097 0-3.794 1.7-3.794 3.7v4.5h-.4c-1.797 0-3.295-1.6-3.295-3.5v-5.8c.799-.1 1.298-.7 1.598-1 .3-.4.399-.4.599-.4.2 0 .3.1.599.4.4.4.998 1.1 2.097 1.1 1.098 0 1.698-.6 2.097-1.1.3-.4.4-.4.6-.4.199 0 .299.1.598.4.4.4.999 1.1 2.098 1.1 1.098 0 1.697-.6 2.097-1.1.3-.4.399-.4.599-.4.2 0 .3.1.599.4.3.4.799.9 1.598 1v5.8c.1 2-1.398 3.5-3.196 3.5z"
                            fill="#13C1AC"></path>
                    </svg>
                    <span class="nav-bar-text">Inicio</span>
                </a>
                <a href="#" class="nav-bar-option">
                    <svg width="28" height="28" fill="none" class="Icon  Icon--white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23" name="tb-favorites">
                        <path fill="#fff" d="M0 0h23v23H0z"></path>
                        <path
                            d="M11.5 22.1c-.3 0-.5 0-.8-.1C8.2 20.8 0 16.6 0 9.2 0 5.2 3.2 2 7.2 2c1.5 0 2.9.5 4.1 1.3.1.1.2.1.3.1 1.2-.9 2.7-1.4 4.2-1.4 4 0 7.2 3.2 7.2 7.2 0 7.2-8 11.5-10.4 12.7l-.2.1c-.3.1-.6.1-.9.1zM7.2 4C4.3 4 2 6.3 2 9.2c0 6.4 7.9 10.2 9.5 10.9l.1-.1c2.2-1 9.4-4.8 9.3-10.9C21 6.3 18.7 4 15.8 4c-1.1 0-2.2.4-3.1 1l-.1.1c-.8.4-1.8.4-2.5-.2-.8-.6-1.9-.9-2.9-.9z"
                            fill="#607D8B"></path>
                    </svg>
                    <span class="nav-bar-text">Favoritos</span>
                </a>
                <a href="#" class="nav-bar-option">
                    <svg width="28" height="28" fill="none" class="Icon  Icon--white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23" name="tb-upload">
                        <path fill="#fff" d="M0 0h23v23H0z"></path>
                        <path
                            d="M11.5 0C5.2 0 0 5.2 0 11.5S5.2 23 11.5 23 23 17.8 23 11.5 17.9 0 11.5 0zm0 21.1c-5.3 0-9.5-4.3-9.5-9.5S6.3 2 11.5 2 21 6.3 21 11.5s-4.2 9.6-9.5 9.6z"
                            fill="#607D8B"></path>
                        <path
                            d="M16.2 10.6h-3.6V7.1c0-.6-.4-1-1-1s-1 .4-1 1v3.5H6.9c-.6 0-1 .4-1 1s.4 1 1 1h3.6v3.5c0 .6.4 1 1 1s1-.4 1-1v-3.5h3.6c.6 0 1-.4 1-1s-.4-1-.9-1z"
                            fill="#607D8B"></path>
                    </svg>
                    <span class="nav-bar-text">Súbelo</span>
                </a>
                <a href="#" class="nav-bar-option">
                    <svg width="28" height="28" fill="none" class="Icon  Icon--white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23" name="tb-inbox">
                        <path fill="#fff" d="M0 0h23v23H0z"></path>
                        <path
                            d="M15.4 1H7.6C3.2 1 0 4.1 0 8.3v6.3C0 18.9 3.2 22 7.6 22h7.8c4.4 0 7.6-3.1 7.6-7.4V8.3C23 4.1 19.8 1 15.4 1zM21 14.6c0 3.1-2.4 5.4-5.6 5.4H7.6C4.4 20 2 17.8 2 14.6V8.3C2 5.2 4.3 3 7.6 3h7.8C18.7 3 21 5.2 21 8.3v6.3z"
                            fill="#607D8B"></path>
                        <path
                            d="M17.4 7.4l-5.1 4.8c-.4.4-1.1.4-1.6 0l-5-4.8c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1 0 1.4l3.5 3.3-3 3.1c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L9 13.5l.2.2c.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9l.2-.2 2.9 3.1c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3-3.1 3.5-3.3c.4-.4.4-1 0-1.4-.2-.4-.8-.4-1.2 0z"
                            fill="#607D8B"></path>
                    </svg>
                    <span class="nav-bar-text">Buzón</span>
                </a>
                <a href="#" class="nav-bar-option">
                    <svg width="28" height="28" fill="none" class="Icon  Icon--white" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23" name="tb-you">
                        <path fill="#fff" d="M0 0h23v23H0z"></path>
                        <path
                            d="M11.5 0C5.2 0 0 5.2 0 11.5 0 17.9 5.2 23 11.5 23S23 17.9 23 11.5C23 5.2 17.9 0 11.5 0zm0 21C6.3 21 2 16.8 2 11.5S6.3 2 11.5 2 21 6.3 21 11.5 16.8 21 11.5 21z"
                            fill="#607D8B"></path>
                        <path
                            d="M7.7 10.6v-.1c0-.6-.4-1-1-1s-1 .4-1 1v.1c0 .6.4 1 1 1s1-.4 1-1zm8.6-1.1c-.6 0-1 .4-1 1v.1c0 .6.4 1 1 1s1-.4 1-1v-.1c0-.5-.5-1-1-1z"
                            fill="#607D8B"></path>
                        <path opacity="0.5"
                            d="M15.4 12.5H7.6c-.5 0-.9.4-.8.9.4 2.2 2.4 3.8 4.7 3.8 2.3 0 4.3-1.7 4.7-3.8.1-.5-.3-.9-.8-.9z"
                            fill="#607D8B"></path>
                    </svg>
                    <span class="nav-bar-text">Tú</span>
                </a>
            </nav>
        </div>
    `
} //Aquí renderizo toda la página web, dejando sin contenido la clase "products" para poder trabajar con ella dinámicamente en función del filtro con clase "filter";
renderWebElements();

const filterSelection = document.querySelector('#filter-sellers');
const filterInput = document.querySelector('.filter-input');
const submitButton = document.querySelector('#filter-submit-button');
const clearButton = document.querySelector('#filter-clear-button');
const products = document.querySelector('.products');


const renderAllProducts = () =>{
    products.innerHTML = ``;
    productsArray.forEach((product) =>{
        let img = product.image;
        let value = product.price;
        let name = product.name;
        let reviews = product.reviews;
        let seller = product.seller;

        products.innerHTML += 
        `
        <a href="#" class="collection-subsection">
            <img src="${img}"
                class="subsection-image" alt="Ordenador Sobremesa">
            <h3 class="subsection-title"> Precio:${value}€</h3>
            <h3 class="subsection-title"> ${name} </h3>
            <small class="subsection-subtitle">${reviews} reviews</small>
            <small class="subsection-subtitle">Seller: ${seller}</small>
        </a>
        `
    })
}//Inicialmente renderizo en la web todos los productos del array.
renderAllProducts();

const renderFilteredProducts = (filteredProductsArray) =>{
    products.innerHTML = ``;
    filteredProductsArray.forEach((product) =>{
        let img = product.image;
        let value = product.price;
        let name = product.name;
        let reviews = product.reviews;
        let seller = product.seller;

        products.innerHTML += 
        `
        <a href="#" class="collection-subsection">
            <img src="${img}"
                class="subsection-image" alt="Ordenador Sobremesa">
            <h3 class="subsection-title"> Precio:${value}€</h3>
            <h3 class="subsection-title"> ${name} </h3>
            <small class="subsection-subtitle">${reviews} reviews</small>
            <small class="subsection-subtitle">Seller: ${seller}</small>
        </a>
        `
    })
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let selectValue = document.getElementById("filter-sellers").value;
    let inputValue = document.getElementById("precio").value;
        let filteredProducts = productsArray.filter((product) =>{
            if (!(selectValue == 'default') & (inputValue == '')){
                return product.seller == selectValue;

            }else if ((selectValue == 'default') & !(inputValue == '')){
                return product.price <= inputValue;

            }else if (!(selectValue == 'default') & !(inputValue == '')) {
                return (product.seller == selectValue) & (product.price <= inputValue)
            }else{
                return true;
            }
    })
    renderFilteredProducts(filteredProducts);
  });

clearButton.addEventListener("click", (event) =>{
    event.preventDefault();
    filterSelection.value = 'default';
    filterInput.value = '';
    renderAllProducts();
});