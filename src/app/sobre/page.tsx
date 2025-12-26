import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CheckCircle2, Shield, Users } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Sobre a Surmani Motors</h1>
                    <div className="max-w-3xl mx-auto text-lg text-muted-foreground text-center mb-16 space-y-6">
                        <p>
                            A Surmani Motors é referência no mercado de veículos de luxo e esportivos.
                            Nossa missão é proporcionar uma experiência única na aquisição do seu sonho sobre rodas.
                        </p>
                        <p>
                            Com anos de excelência e tradição, selecionamos rigorosamente cada veículo de nosso estoque
                            para garantir a máxima qualidade, procedência e satisfação de nossos clientes mais exigentes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="p-6 bg-card rounded-xl border border-border/50 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Procedência Garantida</h3>
                            <p className="text-muted-foreground">Todos os veículos passam por rigorosa inspeção e perícia.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Atendimento Premium</h3>
                            <p className="text-muted-foreground">Consultoria especializada para encontrar o carro perfeito para você.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pós-venda Exclusivo</h3>
                            <p className="text-muted-foreground">Suporte completo e garantia para sua total tranquilidade.</p>
                        </div>
                    </div>
                </div>
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}
