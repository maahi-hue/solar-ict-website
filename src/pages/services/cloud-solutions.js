import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold">Cloud Solutions</h1>
        <p className="mt-4 text-gray-600">
          This is the services page of our website.
        </p>
      </main>
      <Footer />
    </div>
  );
}
