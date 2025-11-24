import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(console.log)} className="w-full max-w-md p-6 space-y-4">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Ingresa tu email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Tu contraseña" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button type="submit" className="w-full">Ingresar</Button>
        </form>
        </Form>
    </div>
  );
};

export default LoginForm;
