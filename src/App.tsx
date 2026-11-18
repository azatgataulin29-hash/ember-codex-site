import { Nav, Hero, Marquee, Story, Beans, Menu, RoastCurve, Visit, Footer } from "./sections";

export default function App() {
  return (
    <div className="relative z-10">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Beans />
        <Menu />
        <RoastCurve />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
