import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const features = [
    "Advanced analytics",
    "24/7 customer support",
    "Custom integrations",
    "Automated workflows"
  ];

  const plans = [
    { name: "Basic", price: { monthly: 29, annual: 290 }, features: features.slice(0, 2) },
    { name: "Pro", price: { monthly: 79, annual: 790 }, features: features.slice(0, 3) },
    { name: "Enterprise", price: { monthly: 199, annual: 1990 }, features: features }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Streamline your business processes with our cutting-edge SaaS solution. Boost productivity and drive growth.</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing</h2>
        <div className="flex justify-center mb-8">
          <Button
            variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
            onClick={() => setSelectedPlan('monthly')}
            className="mr-2"
          >
            Monthly
          </Button>
          <Button
            variant={selectedPlan === 'annual' ? 'default' : 'outline'}
            onClick={() => setSelectedPlan('annual')}
          >
            Annual (Save 20%)
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">${plan.price[selectedPlan]}{selectedPlan === 'monthly' ? '/mo' : '/yr'}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button className="mt-auto mx-4 mb-4">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and take your productivity to the next level.</p>
        <Button size="lg" variant="secondary">Start Your Free Trial</Button>
      </section>
    </div>
  );
};

export default Index;
