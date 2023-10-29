/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  switch (day) {
    case "Monday": {
      return false;
    }
    case "Tuesday": {
      return false;
    }
    case "Wednesday": {
      return false;
    }
    case "Thursday": {
      return false;
    }
    case "Friday": {
      return false;
    }
    case "Saturday": {
      return true;
    }
    case "Sunday": {
      return true;
    }
    default:
      return false;
  }
};

console.log(isWeekend(Days[Days.Sunday]));
