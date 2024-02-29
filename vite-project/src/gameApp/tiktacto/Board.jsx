const initValue = '.';


function CreateBoard( {rows, cols} ) {
    // 빈 2차원 배열 생성
    const dynamicArray = [];
  
    // 행만큼 반복
    for (let i = 0; i < rows; i++) {
      // 빈 행 배열 생성
      const row = [];
  
      // 열만큼 반복
      for (let j = 0; j < cols; j++) {
        const value = initValue;
  
        // 행 배열에 값 추가
        row.push(value);
      }
  
      // 완성된 행을 2차원 배열에 추가
      dynamicArray.push(row);
    }
  
    console.log(dynamicArray);

    // return dynamicArray;
  }

  export default CreateBoard