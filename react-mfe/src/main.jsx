import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About'
import Contact from './pages/Contact'

class AboutElement extends HTMLElement {
  connectedCallback() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(React.createElement(About))
  }
  disconnectedCallback() {
    this.root?.unmount()
  }
}

class ContactElement extends HTMLElement {
  connectedCallback() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(React.createElement(Contact))
  }
  disconnectedCallback() {
    this.root?.unmount()
  }
}

customElements.define('react-about', AboutElement)
customElements.define('react-contact', ContactElement)