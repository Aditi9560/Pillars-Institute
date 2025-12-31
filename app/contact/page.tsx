"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  school: z.string().optional(),
  standard: z.string().optional(),
  stream: z.string().optional(),
  course: z.string().optional(),
  contact: z.string().min(10, "Contact number must be at least 10 digits"),
  address: z.string().optional(),
});

type ContactInquiry = z.infer<typeof contactInquirySchema>;

interface EmailResponse {
  success: boolean;
  message: string;
}

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactInquiry>({
    resolver: zodResolver(contactInquirySchema),
    defaultValues: {
      name: "",
      school: "",
      standard: undefined,
      stream: undefined,
      course: "",
      contact: "",
      address: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactInquiry) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      return response.json() as Promise<EmailResponse>;
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactInquiry) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["The PILLARS , Sco 392 , 2nd floor, Above Cooperative Bank,", "Sector 37- D, Chandigarh- 160036 "],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["6280091236", "9053432725"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["thepillars126@gmail.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      content: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              📞 Contact Us
            </div>
            <h1
              className="text-responsive-xl font-bold mb-6 text-gray-900 dark:text-white"
              data-testid="text-contact-title"
            >
              Get In Touch
            </h1>
            <p
              className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              data-testid="text-contact-description"
            >
              Ready to start your educational journey? Contact us for more
              information or to schedule a visit. We're here to help you achieve
              your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card
              data-testid="card-contact-form"
              className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardContent className="card-responsive">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                    data-testid="text-form-title"
                  >
                    Inquiry Form
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="form-responsive"
                    data-testid="form-contact"
                  >
                    <div className="form-grid-responsive">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-school" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="form-grid-responsive">
                      <FormField
                        control={form.control}
                        name="standard"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Standard</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-standard">
                                  <SelectValue placeholder="Select Standard" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent
                                style={{
                                  backgroundColor: 'white',
                                  zIndex: 9999,
                                  border: '1px solid #e2e8f0',
                                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                  position: 'absolute'
                                }}>
                                <SelectItem value="8th">8th</SelectItem>
                                <SelectItem value="9th">9th</SelectItem>
                                <SelectItem value="10th">10th</SelectItem>
                                <SelectItem value="11th">11th</SelectItem>
                                <SelectItem value="12th">12th</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="stream"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stream</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-stream">
                                  <SelectValue placeholder="Select Stream" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent
                                style={{
                                  backgroundColor: 'white',
                                  zIndex: 9999,
                                  border: '1px solid #e2e8f0',
                                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                  position: 'absolute'
                                }}>
                                <SelectItem value="Science">Science</SelectItem>
                                <SelectItem value="Commerce">
                                  Commerce
                                </SelectItem>
                                <SelectItem value="Arts">Arts</SelectItem>
                                <SelectItem value="Foundation">
                                  Foundation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Interested</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-course">
                                <SelectValue placeholder="Select Course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent
                              style={{
                                backgroundColor: 'white',
                                zIndex: 9999,
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                position: 'absolute'
                              }}>
                              <SelectItem value="NEET-UG">NEET-UG</SelectItem>
                              <SelectItem value="JEE Main + Advanced">
                                JEE Main + Advanced
                              </SelectItem>
                              <SelectItem value="Foundation Course">
                                Foundation Course
                              </SelectItem>
                              <SelectItem value="Commerce">Commerce</SelectItem>
                              <SelectItem value="CUET">CUET</SelectItem>
                              <SelectItem value="PUCET">PUCET</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter 10-digit mobile number"
                              data-testid="input-contact"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              placeholder="Enter your address"
                              data-testid="textarea-address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full btn-responsive"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending
                        ? "Sending..."
                        : "Send Inquiry"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card
                data-testid="card-contact-info"
                className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="card-responsive">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <h2
                      className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                      data-testid="text-contact-info-title"
                    >
                      Contact Information
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Reach out to us through any of these channels
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={info.title}
                        className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all duration-300"
                        data-testid={`contact-info-${index}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3
                              className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-2"
                              data-testid={`contact-info-title-${index}`}
                            >
                              {info.title}
                            </h3>
                            {info.content.map((line, lineIndex) => (
                              <p
                                key={lineIndex}
                                className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1"
                                data-testid={`contact-info-content-${index}-${lineIndex}`}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card
                data-testid="card-map"
                className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="card-responsive">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🗺️</span>
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
                      data-testid="text-map-title"
                    >
                      Find Us
                    </h3>
                  </div>
                  <div
                    className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-xl h-48 sm:h-64 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500"
                    data-testid="map-placeholder"
                  >
                    <div className="text-center">
                      <span className="text-4xl mb-2 block">📍</span>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                        Google Maps Integration
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
