import { useForm } from "react-hook-form";
import { Input, TextArea } from "../input";
import s from "./indes.module.scss";

export const ContactForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        className={s.form_container}
        action=""
        onSubmit={() => handleSubmit}
      >
        <div>
          <Input
            label="Nome:"
            id="name"
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
          <Input
            label="Email:"
            id="email"
            type="email"
            placeholder="Digite seu email..."
            {...register("email")}
          />
        </div>
        <TextArea
          label="Mensagem"
          id="message"
          placeholder="Digite sua mensagem..."
          {...register("message")}
        />
        <button className="title4">Enviar</button>
      </form>
    </>
  );
};
