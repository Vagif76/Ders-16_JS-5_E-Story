
const mehsullarinYeri = document.querySelector("#mehsullar")
window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"
    console.log(unvan)

    try {
        const cavab = await fetch(unvan)
        console.log(cavab)

        const gelenMehsullar = await cavab.json()
        console.table(gelenMehsullar)

        for(let i=0; i< gelenMehsullar.length; i++) {
            mehsullarinYeri.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                    <div class="card my-2 border-0">
                        <img src="${gelenMehsullar[i].image}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column justify-content-evenly">
                          <h5 class="card-title text-center">${gelenMehsullar[i].title.slice(0, 20)}...</h5>
                          <p class="card-text">${gelenMehsullar[i].description.slice(0, 40)}...</p>
                          <strong>Price: ${gelenMehsullar[i].price} USD</strong>
                          <br>
                          <br>
                          <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                      </div>
                </div>`
        }
    }

    catch(xeta) {
        console.log("Serverdə baş vermiş xəta: ", xeta.message)
    }

    finally {
        console.log("Serverdə xəta yarandı!")
    }
}

const overlayMenu = document.querySelector(".overlay-menu")

const navbarButton = document.querySelector(".navbar-toggler-icon")

const closeIcon = document.querySelector(".bi-x-circle")

navbarButton.addEventListener("click", navbarMenyunuAc)
closeIcon.addEventListener("click", menyunuBagla)

function navbarMenyunuAc() {
    overlayMenu.classList.add("aktiv")

    // CSS-lə açmaq istəyəriksə:
    // overlayMenu.style.width="100%"
}

function menyunuBagla() {
    overlayMenu.classList.remove("aktiv")

    // CSS-lə bağlamaq istəyəriksə:
    // overlayMenu.style.width="0"
}