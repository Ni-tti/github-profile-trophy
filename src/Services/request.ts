import { soxa } from "../../deps.ts";
import {
  EServiceKindError,
  GithubErrorResponse,
  GithubExceedError,
  QueryDefaultResponse,
  ServiceError,
} from "../Types/index.ts";
import { Logger } from "../Helpers/Logger.ts";

export async function requestGithubData<T = unknown>(
  query: string,
  variables: { [key: string]: string },
  token = "",
) {
  try {
    const response = (await soxa.post(
      "",
      {},
      {
        data: { query, variables },
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )) as QueryDefaultResponse<{ user: T }>;

    const responseData = response.data;

    if (responseData?.data?.user) {
      return responseData.data.user;
    }

    throw handleError(
      responseData as unknown as GithubErrorResponse | GithubExceedError,
    );
  } catch (error) {
    if (error instanceof Error) {
      Logger.error(`Error en la solicitud de GitHub: ${error.message}`);
    } else {
      Logger.error(`Error en la solicitud de GitHub: ${String(error)}`);
    }
    throw error;
  }
}

function handleError(
  responseErrors: GithubErrorResponse | GithubExceedError,
): ServiceError {
  const arrayErrors = (responseErrors as GithubErrorResponse)?.errors || [];
  const objectError = (responseErrors as GithubExceedError) || {};

  let isRateLimitExceeded = false;

  if (Array.isArray(arrayErrors)) {
    isRateLimitExceeded = arrayErrors.some((error) =>
      error.type.includes(EServiceKindError.RATE_LIMIT)
    );
  }

  if (objectError?.message) {
    isRateLimitExceeded = objectError.message
      .toLowerCase()
      .includes("rate limit");
  }

  if (isRateLimitExceeded) {
    Logger.warn("Límite de velocidad de API de GitHub excedido");
    throw new ServiceError(
      "Se ha excedido el límite de solicitudes. Por favor, intenta de nuevo más tarde.",
      EServiceKindError.RATE_LIMIT,
    );
  }

  throw new ServiceError(
    "No se pudo procesar la solicitud",
    EServiceKindError.NOT_FOUND,
  );
}
