
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Nome deve ter pelo menos 3 caracteres',
  }),
  email: z.string().email({
    message: 'Digite um e-mail válido',
  }),
  phone: z.string().min(8, {
    message: 'Digite um telefone válido',
  }),
});

const EgestorERP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', data);
      toast({
        title: "Cadastro recebido",
        description: "Entraremos em contato em breve para liberar seu acesso.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text and Video */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Sistema de gestão empresarial - ERP Online
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Dobre seus lucros otimizando sua gestão
            </p>
            
            <div className="rounded-xl overflow-hidden shadow-xl mb-6">
              <video 
                className="w-full aspect-video object-cover" 
                controls
                poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
              >
                <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h3 className="text-corporate-orange text-xl font-semibold mb-2">INSCREVA-SE</h3>
              <p className="text-2xl font-bold text-neutral-800">experimente grátis</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Insira seu nome e sobrenome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Insira seu melhor e-mail" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Insira seu Telefone ou Whatsapp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-sm text-neutral-600 mt-4">
                  Ao continuar o cadastro você está ciente que receberá comunicação conforme nossa <a href="#" className="text-corporate-blue hover:underline">política de privacidade</a>.
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-green-400 hover:bg-green-500 text-lg font-medium text-neutral-800 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {isSubmitting ? 'Enviando...' : 'Teste grátis'}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
