import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <ServicesSection />
            </main>
            <Footer />
        </div>
    );
}
