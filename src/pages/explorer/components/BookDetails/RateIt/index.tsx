import { Avatar } from "@/components/Avatar";
import { StarRate } from "@/components/StarRate";
import { Container, FormError } from "./styles";
import { TextArea } from "@/components/TextArea";
import { Check, X } from "phosphor-react";
import { useSession } from "next-auth/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { useExplorer } from "@/hooks/Explorer";
import { toast } from "react-toastify";

interface RateItProps {
  onClose: () => void;
  refreshRates: () => void;
}

const registerFormSchema = z.object({
  rate: z.number().min(0, { message: "informe uma nota" }),
  description: z.string().min(1, { message: "Informe uma descrição" }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function RateIt({ onClose, refreshRates }: RateItProps) {
  const { selectedBook } = useExplorer();

  const { data: session } = useSession();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      description: "",
      rate: -1,
    },
  });

  async function handleRateIt(data: RegisterFormData) {
    if (selectedBook?.id && session?.user.id) {
      const { rate, description } = data;

      await api
        .post("/ratings/register", {
          rate,
          description,
          book_id: selectedBook?.id,
          user_id: session?.user.id,
        })
        .then(() => {
          toast.success("Livro avaliado com sucesso!", {
            position: "bottom-right",
          });

          refreshRates();
          onClose();
        })
        .catch((error) => {
          toast.error("Erro ao avaliar livro!", {
            position: "bottom-right",
          });
        });
    }
  }

  return session ? (
    <Container onSubmit={handleSubmit(handleRateIt)}>
      <header>
        <Avatar url={session.user.avatar_url} />

        <div>
          <h3>{session.user.name}</h3>
        </div>

        <span className="starRate">
          <Controller
            name="rate"
            control={control}
            render={({ field }) => {
              return (
                <StarRate
                  editable
                  starRate={field.value || 0}
                  selectRate={(value) => field.onChange(value)}
                  size={28}
                />
              );
            }}
          />
          {errors.rate && <FormError>{errors.rate.message}</FormError>}
        </span>
      </header>

      <Controller
        name="description"
        control={control}
        render={({ field }) => {
          return (
            <TextArea
              textAreaValue={field.value}
              onTextAreaChange={(value) => field.onChange(value)}
            />
          );
        }}
      />
      {errors.description && (
        <FormError>{errors.description.message}</FormError>
      )}

      <footer>
        <button onClick={onClose}>
          <X />
        </button>
        <button type="submit" disabled={isSubmitting}>
          <Check />
        </button>
      </footer>
    </Container>
  ) : (
    <>Erro</>
  );
}
