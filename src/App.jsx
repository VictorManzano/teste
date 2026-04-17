import React, { useEffect } from "react";

const products = [
  {
    name: "ZenPhone Ultra",
    description: "Chip de ultima geracao e 512GB para tudo que voce precisa.",
    price: "R$ 4.499,00",
    style: {}
  },
  {
    name: "Wave 5G Plus",
    description: "Conectividade 5G estavel, tela 120Hz e recarga super rapida.",
    price: "R$ 3.199,00",
    style: {
      background:
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 35%), linear-gradient(145deg, #172554, #0369a1 55%, #22d3ee)"
    }
  },
  {
    name: "Pixel One Max",
    description: "Fotos noturnas impressionantes e design elegante em aluminio.",
    price: "R$ 3.699,00",
    style: {
      background:
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,.32), transparent 35%), linear-gradient(145deg, #3f1d2e, #9d174d 55%, #fb7185)"
    }
  }
];

const benefits = [
  {
    title: "Garantia oficial",
    text: "Todos os aparelhos com nota fiscal e assistencia autorizada."
  },
  {
    title: "Entrega expressa",
    text: "Receba em ate 24h nas principais capitais do Brasil."
  },
  {
    title: "Pagamento flexivel",
    text: "Pix com desconto ou parcelamento em ate 12x sem juros."
  }
];

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-up");

    // Fallback para navegadores/configuracoes sem IntersectionObserver.
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("visible"));
      return undefined;
    }

    let observer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      sections.forEach((section) => observer.observe(section));
    } catch {
      sections.forEach((section) => section.classList.add("visible"));
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <header>
        <div className="container nav">
          <div className="logo">
            Pulse<span>Mobile</span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#diferenciais">Diferenciais</a>
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>
            </li>
          </ul>

          <a href="#ofertas" className="btn btn-primary">
            Ver Promocoes
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <div>
              <h1>
                Seu proximo <span>smartphone premium</span> esta aqui.
              </h1>
              <p>
                Escolha entre os lancamentos mais desejados, com entrega rapida,
                garantia oficial e pagamento facilitado em ate 12x.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#produtos">
                  Explorar Modelos
                </a>
                <a className="btn btn-secondary" href="#diferenciais">
                  Por que comprar aqui
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <span className="pill">Oferta Relampago</span>

              <article className="hero-phone">
                <div className="phone-thumb" />
                <div className="phone-info">
                  <h3>Nova Serie X Pro</h3>
                  <p>256GB | Camera 108MP</p>
                  <div className="price">R$ 3.799,00</div>
                </div>
              </article>

              <article className="hero-phone">
                <div
                  className="phone-thumb"
                  style={{ background: "linear-gradient(170deg, #7c2d12, #ea580c)" }}
                />
                <div className="phone-info">
                  <h3>Air Lite 5G</h3>
                  <p>128GB | Tela AMOLED</p>
                  <div className="price">R$ 2.199,00</div>
                </div>
              </article>

              <a className="btn btn-primary full-width" href="#ofertas">
                Garantir Desconto
              </a>
            </aside>
          </div>
        </section>

        <section id="produtos" className="container fade-up">
          <h2 className="section-title">Modelos em destaque</h2>
          <p className="section-subtitle">
            Performance, bateria de longa duracao e cameras incriveis para qualquer
            estilo.
          </p>

          <div className="products">
            {products.map((product) => (
              <article key={product.name} className="product">
                <div className="product-figure" style={product.style} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong className="price">{product.price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="container fade-up">
          <h2 className="section-title">Por que escolher a PulseMobile?</h2>
          <p className="section-subtitle">
            Uma experiencia de compra segura, rapida e pensada para voce.
          </p>

          <div className="benefits">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="benefit">
                <strong>{benefit.title}</strong>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ofertas" className="container fade-up">
          <div className="cta">
            <div>
              <h3>Ganhe ate 20% de desconto no seu novo celular hoje.</h3>
              <p>Oferta valida por tempo limitado para compras no site.</p>
            </div>

            <a href="#ofertas" className="btn btn-secondary cta-btn">
              Quero Meu Desconto
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">© 2026 PulseMobile. Todos os direitos reservados.</div>
      </footer>
    </>
  );
}

export default App;

