import styles from './Input.module.css';

const Input = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      type="text"
      value={value}
    />
  );
};

export default Input;
