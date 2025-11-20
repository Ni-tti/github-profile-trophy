import { EServiceKindError, ServiceError } from "../Types/index.ts";
import { Error400, Error404, Error419 } from "../error_page.ts";

interface ErrorPageProps {
  error: ServiceError;
}

const ERROR_MESSAGES = {
  RATE_LIMIT:
    "Has excedido el límite de solicitudes. Por favor, intenta de nuevo más tarde.",
  NOT_FOUND: "Lo sentimos, el usuario que buscas no fue encontrado.",
  DEFAULT: "Ha ocurrido un error inesperado.",
};

export function ErrorPage({ error }: ErrorPageProps) {
  let cause: Error400 | Error404 | Error419 = new Error400();

  if (error.cause === EServiceKindError.RATE_LIMIT) {
    cause = new Error419(ERROR_MESSAGES.RATE_LIMIT);
  } else if (error.cause === EServiceKindError.NOT_FOUND) {
    cause = new Error404(ERROR_MESSAGES.NOT_FOUND);
  }

  return cause;
}
