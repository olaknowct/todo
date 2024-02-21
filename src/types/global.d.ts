type User = {
  username: string;
  name: string;
  password: string;
  todos: string[];
};

type LoginFormData = {
  username: string;
  password: string;
};

type EditFormData = AddTodoFormData;

type AddTodoFormData = {
  name: string;
};
