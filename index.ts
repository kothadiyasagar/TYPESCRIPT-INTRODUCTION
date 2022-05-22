type users = {
    id: number;
    name: string;
    age?: number;
    salary?: number;
    subjet?: subjects;
    number_of_student?: number;
  };
  
  const arr: users[] = [
    { id: 1, name: 'sagar', age: 23, salary: 460000 },
    { id: 2, name: 'meetesh', age: 25, salary: 600000 },
    { id: 3, name: 'rahul', age: 21, salary: 80000 },
    { id: 4, name: 'pankaj', age: 30, salary: 75000 },
    { id: 5, name: 'jamaka', age: 22, salary: 10000 }
   
  ];
  // console.log(arr);
  
  enum subjects {
    chemistry = 'chemistry',
    physics = 'physics',
    maths = 'maths',
  }
  const Teacher: users[] = [
   
    { id: 6, name: 'Prabhanjan', subjet: subjects.physics, number_of_student: 12 },
    { id: 7, name: 'Arjun', subjet: subjects.chemistry, number_of_student: 15 },
    { id: 8, name: 'Albert', subjet: subjects.maths, number_of_student: 33 }
  ];
  // console.log(Teacher);
  
  const sorts = (arr: users[], a : string): users[] => {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let sort1 = arr[i];
      while (j >= 0 && arr[j].id > sort1.id) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = sort1;
    }
    return arr;
  };
  
  sorts(arr, 'id');
  sorts(Teacher, 'id');
  console.log(arr);
  console.log(Teacher);