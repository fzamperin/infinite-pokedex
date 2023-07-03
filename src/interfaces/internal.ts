/* Interfaces to use in the entire application
   This interfaces were created for the following two reasons:
   1 - In order to reduce the system memory, if the list grows large
   2 - If the api changes we only need to modify it in one place
*/

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
}
