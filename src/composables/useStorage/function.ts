import { ref, unref, watch } from "vue";
import type { Ref } from "vue";

export interface Serializer<T> {
  read(raw: string): T
  write(value: T): string
}

export type SerializerType = 'string' | 'number' | 'boolean' | 'array' | 'object'  | 'any';
export const Serialiazers: Record<SerializerType, Serializer<any>> = {
  boolean: {
    read: (value: string) => Boolean(value),
    write: (value: boolean) => String(value)
  },
  object: {
    read: (value: string) => JSON.parse(value),
    write: (value: object) => JSON.stringify(value)
  },
  array: {
    read: (value: string) => JSON.parse(value),
    write: (value: Array<any>) => JSON.stringify(value)
  },
  number: {
    read: (value: string) => Number(value),
    write: (value: number) => String(value)
  },
  string: {
    read: (value: string) => value,
    write: (value: string) => String(value)
  },
  any: {
    read: (value: string) => value,
    write: (value: any) => String(value)
  }
};

export function useGetSerializerType<T extends string | number | boolean | object  | any | any[]>(value: T) {
  const valueType = typeof value;
  if (value == null) {
    return 'any';
  } else if (valueType === 'boolean') {
    return 'boolean';
  } else if (valueType === 'string') {
    return 'string';
  } else if (valueType === 'object') {
    return 'object';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (!Number.isNaN(value)) {
    return 'number';
  } else {
    return 'any';
  }
}

export interface UseGetSerializerOptions<T extends SerializerType> {
  serialiazers: Record<T, Serializer<T>>;
}

export function useGetSerializer<T extends SerializerType>(type: T, options?: UseGetSerializerOptions<T>) {
  if (options?.serialiazers) {
    return options.serialiazers[type];
  }

  return Serialiazers[type];
}

export interface UseStorageOptions<T> {
  /**
   * Storage to use
   *
   * @default window.localStorage
   */
   storage?: Storage

  /**
   * @default undefined
   */
  serializer?: Serializer<T>
}

export function useStorage(key: string, initialValue: Ref<string>, options?: UseStorageOptions<string>): Ref<string>
export function useStorage(key: string, initialValue: Ref<boolean>, options?: UseStorageOptions<boolean>): Ref<boolean>
export function useStorage(key: string, initialValue: Ref<number>, options?: UseStorageOptions<number>): Ref<number>
export function useStorage<T> (key: string, initialValue: Ref<T>, options?: UseStorageOptions<T>): Ref<T>
export function useStorage<T = unknown> (key: string, initialValue: Ref<null>, options?: UseStorageOptions<T>): Ref<T>

/**
 * Reactive local storage.
 */
export function useStorage<T extends(string|number|boolean|object|null)>(key: string, initialValueRef: Ref<T>, options: UseStorageOptions<T> = {}) {
  let storage = window.localStorage;
  if (options.storage) {
    storage = options.storage;
  }

  const initialValue: T = unref(initialValueRef);
  const serialiazer = options.serializer || useGetSerializer(useGetSerializerType(initialValue));

  const data = ref(initialValue) as Ref<T>;

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
}
