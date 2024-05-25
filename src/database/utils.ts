const BASE_KEY = "NEXT_PUBLIC_FIREBASE_";
export function getFirebasePrivateKey<K extends string[]>(...keys: K): string {

    const key = process.env[[BASE_KEY, keys.join("_")].join("_")] as string

    if (!key) {
        throw new TypeError("<getFirebasePrivateKey> cannot have empty string as its value.");
    }

    return key;
}