import { useSubmit } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLanguageContext } from "../../../providers/langContext";
import { sendMailSchema } from "../../../schemas/index.schema";
import { Input, TextArea } from "../input";
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

  const { t } = useLanguageContext();

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
            label={t("contact.labels.name")}
            id="name"
            type="text"
            placeholder={t("contact.placeholders.name")}
            {...register("name")}
            error={errors.name}
          />
          <Input
            label="Email:"
            id="email"
            type="email"
            placeholder={t("contact.placeholders.email")}
            {...register("email")}
            error={errors.email}
          />
        </div>
        <TextArea
          label={t("contact.labels.message")}
          id="message"
          placeholder={t("contact.placeholders.message")}
          error={errors.message}
          {...register("message")}
        />
        {isSubmitting ? (
          <p>{t("contact.status.sending")}</p>
        ) : isSubmitSuccessful ? (
          <p>{t("contact.status.success")}</p>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            type={"submit"}
            className="title4"
          >
            {t("buttons.send")}
          </motion.button>
        )}
      </form>
    </>
  );
};
