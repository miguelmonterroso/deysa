"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com"; // Importa EmailJS
import { Checkbox } from "@/components/ui/checkbox";
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
  name: z.string().min(2, { message: "Ingresa un nombre valido" }).max(50),
  mail: z.string().min(2, { message: "Ingresa un correo valido" }).max(50),
  tel: z.string().min(2, { message: "Ingresa un teléfono valido" }).max(50),
  message: z.string().min(2, { message: "Ingresa un mensaje valido" }).max(100),
  option: z
    .string({
      required_error: "Por favor selecciona una opción.",
    })
    .optional(),
  human: z.boolean().default(false).optional(),
});

export default function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      tel: "",
      message: "",
      human: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
          <FormField
            control={form.control}
            name="human"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="bg-deysaDark"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-deysaDark font-black italic">
                    I AM NOT A ROBOT
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-[52px] bg-deysaYellow text-deysaDark font-black italic text-lg hover:bg-amber-300"
          >
            ENVIAR MENSAJE
          </Button>
        </form>
      </Form>
    </div>
  );
}
