import logoImage from '../Nouveau logo catering .jpeg';
import backgroundImage from '../logo.jpeg';

const services = [
  {
    title: 'Inflight Catering',
    description: 'Premium meal preparation and delivery for domestic and international flights, curated to match passenger preferences and dietary needs.'
  },
  {
    title: 'Menu Design',
    description: 'Seasonal menus, balanced nutrition, and culturally inspired dishes that reflect Air Algérie’s hospitality standards.'
  },
  {
    title: 'Airport Hospitality',
    description: 'Comfort-focused lounge support, airport meal handling, and logistics coordination for smooth boarding experiences.'
  },
  {
    title: 'Food Safety & Logistics',
    description: 'Strict quality control, certified food handling, and on-time delivery for every catering assignment.'
  }
];

function ServiceItem({ title, description }) {
  return (
    <li>
      <strong>{title}</strong>
      <span>{description}</span>
    </li>
  );
}

export default function App() {
  return (
    <main id="air-catering-app">
      <section className="hero">
        <div>
          <div className="hero__brand">
            <span className="logo__label">Air Algérie Catering</span>
          </div>
          <span className="badge">Trusted by Air Algérie</span>
          <h1 className="hero__title">Air Algérie Catering</h1>
          <p className="hero__subtitle">
            We deliver fresh, elegant inflight dining and airport hospitality that reflects the
            warmth of Algeria. Our catering experience keeps every flight on schedule while
            elevating the passenger journey.
          </p>
        </div>
        <div>
          <div className="hero-panel">
            <div className="hero__brand">
              <span className="logo">
                <img className="logo__mark" src={logoImage} alt="Company logo" />
              </span>
              <span className="logo__label">Studio</span>
            </div>
            <h3 className="section-heading">Our commitment</h3>
            <p className="section-copy">
              Reliability, quality and authentic service in every meal. From preparation to
              boarding, we make every moment feel seamless.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-block">
          <h2 className="section-heading">What We Do</h2>
          <p className="section-copy">
            Air Algérie Catering prepares and supplies inflight meals, snacks, and beverages
            for Air Algérie flights. Our team plans menus, kitchens meals safely, and
            coordinates delivery to aircraft with care and precision.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-block">
          <h2 className="section-heading">Core Services</h2>
          <ul className="service-list">
            {services.map((service) => (
              <ServiceItem key={service.title} title={service.title} description={service.description} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-block">
          <h2 className="section-heading">Why Air Algérie Catering?</h2>
          <p className="section-copy">
            We blend culinary craftsmanship with strict safety standards so passengers enjoy a
            memorable onboard experience. Our operations support Air Algérie’s commitment to
            quality service, consistency, and hospitality.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          <strong className="highlight">Air Algérie Catering</strong> is dedicated to serving
          fresh, safe, and culturally inspired meals on every flight.
        </p>
        <p>Built with React • Designed for modern aviation hospitality</p>
      </footer>
    </main>
  );
}
