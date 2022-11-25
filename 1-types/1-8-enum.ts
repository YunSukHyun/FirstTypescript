{
  //Enum

  //JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  //TS
  enum DAYS {
    Monday=1, //default 0부터 시작
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(DAYS.Friday);
  //enum보단 union을 권장
}