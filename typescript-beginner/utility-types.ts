interface ToDo {
    title: string;
    description: string;
}

type PartialToDo = Partial<ToDo>; // Optional properties
type ReadOnlyToDo = Readonly<ToDo>; // Read only properties
type T = NonNullable<string | number | null | undefined>; // Can't be null
type RequiredToDo = Required<ToDo>; // Required properties

export default {}