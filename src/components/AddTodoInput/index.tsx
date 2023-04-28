import styles from './styles.module.scss';

type AddTodoInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function AddTodoInput({ value, onChange, handleSubmit }: AddTodoInputProps) {
  return (
    <form onSubmit={handleSubmit} className={styles.todoInputWrapper}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
}
