import { useForm } from "react-hook-form";
import { Input, TextArea } from "../input";
import { motion } from "framer-motion";
import { sendMailSchema } from "../../../schemas/index.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmit } from "@formspree/react";
import s from "./indes.module.scss";

export const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: zodResolver(sendMailSchema),
  });

  const submit = useSubmit("xdoqwnzy", {
    onSuccess: () => {
      reset();
    },
  });

  return (
    <>
      <form className={s.form_container} onSubmit={handleSubmit(submit)}>
        <div>
          <Input
            label="Nome:"
            id="name"
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
            error={errors.name}
          />
          <Input
            label="Email:"
            id="email"
            type="email"
            placeholder="Digite seu email..."
            {...register("email")}
            error={errors.email}
          />
        </div>
        <TextArea
          label="Mensagem"
          id="message"
          placeholder="Digite sua mensagem..."
          error={errors.message}
          {...register("message")}
        />
        {isSubmitting ? (
          <p>Enviando...</p>
        ) : isSubmitSuccessful ? (
          <p>Email enviado com sucesso ✔</p>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            type={"submit"}
            className="title4"
          >
            Enviar
          </motion.button>
        )}
      </form>
    </>
  );
};
