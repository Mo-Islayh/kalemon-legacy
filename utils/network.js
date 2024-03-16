import { api } from "./axios";

export const GET = async (endpoint, params, header) => {
  const data = await api.get(endpoint, {
    params: { ...params },
    headers: { ...header },
  });
  try {
    return data;
  } catch {
    throw Error;
  }
};

export const POST = async (endpoint, body, header) => {
  const data = await api.post(endpoint, body, {
    headers: { ...header },
  });
  try {
    return data;
  } catch {
    throw Error;
  }
};

export const PUT = async (endpoint, body, header) => {
  const data = await api.put(endpoint, body, {
    headers: { ...header },
  });
  try {
    return data;
  } catch {
    throw Error;
  }
};

export const PATCH = async (endpoint, body, header) => {
  const data = await api.patch(endpoint, body, {
    headers: { ...header },
  });
  try {
    return data;
  } catch {
    throw Error;
  }
};

export const DELETE = async (endpoint, body, header) => {
  const data = await api.delete(endpoint, body, {
    headers: { ...header },
  });
  try {
    return data;
  } catch {
    throw Error;
  }
};
