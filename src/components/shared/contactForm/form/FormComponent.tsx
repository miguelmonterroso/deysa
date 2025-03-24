"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com"; // Importa EmailJS
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel, 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ingresa un nombre válido" }).max(50),
  mail: z.string().min(2, { message: "Ingresa un correo válido" }).max(50),
  tel: z.string().min(2, { message: "Ingresa un teléfono válido" }).max(50),
  message: z.string().min(2, { message: "Ingresa un mensaje válido" }).max(100),
  option: z
    .string({
      required_error: "Por favor selecciona una opción.",
    })
    .optional(),
  captchaInput: z.string().min(1, { message: "Debes ingresar el captcha" }),
});

export default function FormComponent() {
  // Genera el captcha aleatorio una sola vez al montar el componente
  const [captchaString, setCaptchaString] = useState("");
  useEffect(() => {
    const randomCaptcha = Math.random().toString(36).substring(2,8).toUpperCase();
    setCaptchaString(randomCaptcha);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      tel: "",
      message: "",
      option: "",
      captchaInput: "",
    },
  });

  // Observar el valor actual del campo captcha
  const captchaValue = form.watch("captchaInput");
  const isCaptchaValid = captchaValue === captchaString;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Validación extra en caso de que se intente enviar sin el captcha correcto
    if (values.captchaInput !== captchaString) {
      form.setError("captchaInput", { message: "Captcha incorrecto" });
      return;
    }
    const SERVICE_ID = "service_9pq9usb";
    const TEMPLATE_ID = "template_t1nvcrl";
    const USER_ID = "oXBOujdOngTecTdiR";
    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
      console.log("Email enviado correctamente:", response.status, response.text);
    } catch (error) {
      console.error("Error al enviar el email:", error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 lg:space-y-8 flex flex-col justify-around gap-5 text-deysaDark">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nombre completo" {...field} className="italic" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Correo electrónico" {...field} className="italic" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Teléfono" {...field} className="italic" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m1@example.com">Comercialización de Equipos</SelectItem>
                    <SelectItem value="m2@google.com">Sistemas Térmicos y Enfriamiento</SelectItem>
                    <SelectItem value="m3@support.com">Generación y Tratamiento de Aire Comprimido</SelectItem>
                    <SelectItem value="m4@support.com">Transportación de Multifluídos</SelectItem>
                    <SelectItem value="m5@support.com">Filtración e Instrumentación</SelectItem>
                    <SelectItem value="m6@support.com">Generación de Nitrógeno</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Mensaje" {...field} className="italic" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Captcha: muestra la cadena aleatoria y un input para validarla */}
          <FormField
            control={form.control}
            name="captchaInput"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-y-2 p-4 border rounded-md">
                <FormLabel> Escribe los siguientes caracteres: </FormLabel>
                {/* <span className="text-deysaDark font-black ">
                </span> */}
                <div className="flex gap-2">
                  <Button className="bg-deysaDark" disabled>
                    {captchaString}
                  </Button>
                  <FormControl>
                    <Input placeholder="Ingresa los caracteres" {...field} className="italic" />
                  </FormControl>
                </div>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!isCaptchaValid}
            className="w-full h-[52px] bg-deysaYellow text-deysaDark font-black italic text-lg hover:bg-amber-300"
          >
            ENVIAR MENSAJE
          </Button>
        </form>
      </Form>
    </div>
  );
}
