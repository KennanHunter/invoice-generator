import { create } from "zustand";
import { persist } from "zustand/middleware";
import styles from "./App.module.css";

interface FormState {
  title: string;

  set: (
    partial:
      | FormState
      | Partial<FormState>
      | ((state: FormState) => FormState | Partial<FormState>),
    replace?: boolean | undefined
  ) => void;
}

const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      title: "",
      set,
    }),
    {
      name: "form-storage",
    }
  )
);

function App() {
  const { title } = useFormStore();

  return (
    <div className={styles.container}>
      <div className={styles.fill} style={{}}>
        <h1>INVOICE</h1>
        <input type="text" className={styles.title} />
      </div>
      <h1>hi</h1>
    </div>
  );
}

export default App;
