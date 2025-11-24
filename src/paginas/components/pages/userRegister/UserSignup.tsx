import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserRegister = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      lastName:"",
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
        <Form {...form}>
        <form
            onSubmit={form.handleSubmit(data => console.log("REGISTER:", data))}
            className="w-full max-w-md p-6 space-y-4"
        >
            {/* NOMBRE */}
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                    <Input placeholder="Tus nombres" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* APELLIDOS */}
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                    <Input placeholder="Tus Apellidos" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* EMAIL */}
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="email@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* CONTRASEÑA */}
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* BOTÓN */}
            <Button type="submit" className="w-full">
            Registrarme
            </Button>
        </form>
        </Form>
    </div>
  );
};

export default UserRegister;
