import { ref, unref, watch } from "vue";

const serialiazers = {
  boolean: {
    read: (value) => Boolean(value),
    write: (value) => String(value)
  },
  object: {
    read: (value) => JSON.parse(value),
    write: (value) => JSON.stringify(value)
  },
  array: {
    read: (value) => JSON.parse(value),
    write: (value) => JSON.stringify(value)
  },
  number: {
    read: (value) => Number(value),
    write: (value) => String(value)
  },
  string: {
    read: (value) => value,
    write: (value) => String(value)
  },
  any: {
    read: (value) => value,
    write: (value) => String(value)
  }
};

const useGetSerializerType = (value) => {
  if (value == null) {
    return 'any';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'object') {
    return 'object';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (!Number.isNaN(value)) {
    return 'number';
  } else {
    return 'any';
  }
};

const useGetSerializer = (type, options = {}) => {
  if (options.serialiazers) {
    return options.serialiazers[type];
  }

  return serialiazers[type];
};

const useStorage = (key, initialValueRef, options = {}) => {
  let storage = window.localStorage;
  if (options.useSessionStorage) {
    storage = window.sessionStorage;
  }

  const initialValue = unref(initialValueRef);
  const serialiazerType = useGetSerializerType(initialValue);
  const serialiazer = useGetSerializer(serialiazerType);

  const data = ref(initialValue);

  const rawValue = storage.getItem(key);
  if (rawValue == null) {
    data.value = initialValue;
    storage.setItem(key, serialiazer.write(initialValue));
  } else {
    data.value = serialiazer.read(rawValue);
  }

  watch(data, () => {
    if (data.value == null) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, serialiazer.write(data.value));
    }
  },
    {
      flush: 'pre',
      immediate: true,
      deep: true
    });

  return data;
};

export { useStorage };