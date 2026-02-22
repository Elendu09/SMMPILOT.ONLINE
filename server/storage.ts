export interface IStorage {
  // Empty for this static landing page app
}

export class DatabaseStorage implements IStorage {
}

export const storage = new DatabaseStorage();
