import { useState, useEffect, useCallback } from "react";
import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const EMPTY = {
  entries: [],
  goals: [],
  recurring: [],
  tasks: [],
};

export function useFirestore(userId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    const load = async () => {
      try {
        const snap = await getDoc(doc(db, "users", userId));
        if (snap.exists()) {
          setData(snap.data());
        } else {
          setData(EMPTY);
          await setDoc(doc(db, "users", userId), EMPTY);
        }
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        setData(EMPTY);
      }
      setLoading(false);
    };
    load();
  }, [userId]);

  // Save data to Firestore
  const save = useCallback(
    async (newData) => {
      if (!userId) return;
      setData(newData);
      try {
        await setDoc(doc(db, "users", userId), newData);
      } catch (err) {
        console.error("Erro ao salvar:", err);
      }
    },
    [userId]
  );

  return { data, loading, save };
}
