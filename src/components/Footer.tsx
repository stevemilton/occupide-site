import logo from '../assets/occupide-logo.png'

export default function Footer() {
  return (
    <footer className="m-footer">
      <div className="m-footer-in">
        <div className="m-footer-brand">
          <img src={logo} alt="Occupide" />
          <p>
            Services-first workspace solutions for busy commercial occupiers — run on an
            AI-optimised operating system.
          </p>
        </div>
        <div className="m-footer-cols">
          <div>
            <h4>Company</h4>
            <a href="#situation">The situation</a>
            <a href="#os">The OS</a>
            <a href="#team">Team</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Operational</a>
            <a href="#solution">On Schedule</a>
            <a href="#solution">On Demand</a>
          </div>
          <div>
            <h4>Contact</h4>
            <span>1st Floor, Paxton House</span>
            <span>30 Artillery Lane, London E1 7LS</span>
            <a href="mailto:hello@occupide.co.uk">hello@occupide.co.uk</a>
            <span className="oc-mono">020 7776 5005</span>
          </div>
        </div>
      </div>
      <div className="m-footer-bar">
        <span>© 2026 Occupide Limited</span>
        <span className="m-footer-tag">
          Love where you work<span className="oc-dot">.</span>
        </span>
      </div>
    </footer>
  )
}
