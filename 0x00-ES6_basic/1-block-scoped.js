export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // disable prev change
      const task = true;
      // disable prev change
      const task2 = false;
    }
  
    return [task, task2];
  }
