import {useState, useEffect} from 'react'

const LocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      console.log(e);
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default LocalStorageState