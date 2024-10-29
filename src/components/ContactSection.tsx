import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full lg:block hidden">
            <div className="bg-white p-4 sm:p-8 rounded-xl">
              <img
                src="/images/grin-app-cycle.png"
                alt="Ciclo de uso de la app Grin"
                className="w-full h-auto max-h-[500px] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
