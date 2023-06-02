import { openDB } from 'idb';

const DATABASE_NAME = 'jate';
const DATABASE_VERSION = 1;
const STORE_NAME = 'jate-store';

const initDB = async () => {
  const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('contentIndex', 'content');
        console.log('jate database created');
      }
    },
  });
  return db;
};

export const putDb = async (content) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.clear();
  await store.add({ content });
  await tx.done;
};

export const getDb = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const data = await store.get(1);
  await tx.done;
  return data ? data.content : null;
};

initDB();