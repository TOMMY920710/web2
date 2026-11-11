// Array de Propiedades Destacadas
const propiedades = [
    {
        id: 1,
        titulo: "Casa Moderna con Piscina",
        tipo: "Venta",
        precio: "USD 340.000",
        ubicacion: "Belgrano R, Buenos Aires",
        ambientes: 4,
        banos: 3,
        superficie: 250,
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
    },
    {
        id: 2,
        titulo: "Penthouse Vista al Parque",
        tipo: "Alquiler",
        precio: "USD 1.200 /mes",
        ubicacion: "Palermo Hollywood",
        ambientes: 2,
        banos: 2,
        superficie: 85,
        imagen: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
    },
    {
        id: 3,
        titulo: "Residencia Minimalista",
        tipo: "Venta",
        precio: "USD 520.000",
        ubicacion: "Vicente López",
        ambientes: 5,
        banos: 4,
        superficie: 380,
        imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
    }
];

// Cargar Propiedades Dinámicamente
const container = document.getElementById("properties-container");

function renderProperties() {
    container.innerHTML = "";
    propiedades.forEach(prop => {
        const badgeClass = prop.tipo.toLowerCase() === "venta" ? "badge-venta" : "badge-alquiler";
        
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${prop.imagen}" alt="${prop.titulo}">
                <span class="badge ${badgeClass}">${prop.tipo}</span>
            </div>
            <div class="card-body">
                <h3>${prop.titulo}</h3>
                <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${prop.ubicacion}</p>
                <div class="card-features">
                    <span><i class="fa-solid fa-bed"></i> ${prop.ambientes} Amb.</span>
                    <span><i class="fa-solid fa-bath"></i> ${prop.banos} Baños</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${prop.superficie} m²</span>
                </div>
                <div class="card-footer">
                    <span class="card-price">${prop.precio}</span>
                    <button class="btn-consult" onclick="consultarPropiedad('${prop.titulo}')">Consultar</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Acción de Consultar
function consultarPropiedad(titulo) {
    alert(`¡Gracias por tu interés en: ${titulo}! En breve un asesor se pondrá en contacto.`);
}

// Formulario de Búsqueda
document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const ubica = document.getElementById("ubicacion").value || "la zona seleccionada";
    alert(`Buscando propiedades en ${ubica}...`);
});

// Formulario de Contacto
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.");
    e.target.reset();
});

// Inicializar
renderProperties();
