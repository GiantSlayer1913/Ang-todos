export class Todo {
  // unique ID of the todo item
  id: number;
  // title of the todo item
  title: string = '';
  //  boolean, whether or not the todo item is complete
  complete: boolean = false;

// constructor logic that lets us specify property values during instantiation
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
