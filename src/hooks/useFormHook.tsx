import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import ContactsRepository from "../repositories/ContactsRepository.tsx";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  country: z.string().min(1),
});

type IFormFields = z.infer<typeof schema>;

const useFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<IFormFields>({
    resolver: zodResolver(schema),
  });

  const { save: saveContact } = ContactsRepository();

  const handleWithSubmit: SubmitHandler<IFormFields> = async (data) => {
    saveContact(data);
    reset();
  };

  return {
    register,
    handleSubmit,
    handleWithSubmit,
    errors,
    control,
    isSubmitting,
  };
};

export default useFormHook;
