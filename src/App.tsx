/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Methodology from './components/Methodology';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-swell-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Pricing />
        <Methodology />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
