import { useState, useEffect } from "react";
import axios from "axios";

export function GetDataHooks() {
  const [character, setCharacter] = useState([]);
  const [elements, setElements] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getCharacter = async () => {
    try {
      const [result, result2] = await Promise.all([
        axios.get("https://genshin.jmp.blue/characters/all?lang=en"),
        axios.get("https://genshin.jmp.blue/elements"),
      ]);

      setCharacter(result.data);
      setElements(result2.data);
    } catch (error) {
      console.error("Cannot fetch Data...");
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return { character, elements, searchText, setSearchText, setCharacter };
}
