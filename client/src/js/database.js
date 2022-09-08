import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Update');
  const JATEdb = await openDB('jate', 1);
  const tx = JATEdb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // const request = store.put({ JATE: content });
  const request = store.put({ content });
  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const JATEdb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = JATEdb.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};
// similar to activity 23 const getOneDb
initdb();
