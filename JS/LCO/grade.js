let getGrade = function(currentMarks,totalMarks){
    let percentage = (currentMarks/totalMarks)*100;
    console.log(percentage);
  if(percentage >= 90) console.log('A');
  else if(percentage >= 80 && percentage < 90) console.log('B');
  else if(percentage >= 70 && percentage < 80) console.log('C');
  else if(percentage >= 60 && percentage < 70) console.log('D');
  else if(percentage >= 50 && percentage < 60) console.log('E');
  else if(percentage >= 40 && percentage < 50) console.log('F');

}

getGrade(480,600);

