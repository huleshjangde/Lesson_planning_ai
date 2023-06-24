import Footer from "../components/Footer";

// Layouts can be nested and composed
export default function DashboardLayout({ children }) {
    return (
      <section>
        <h1></h1>
        {children}
        <Footer/>
      </section>
    );
  }