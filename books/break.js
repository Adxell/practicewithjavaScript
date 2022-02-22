let matrix = getData();

let sum = 0, success = false; 


computeSum: if(matrix){
    for(let x = 0; x<matrix.length; x++){
        let row = matrix[x];
        if(!row) break computeSum;
        for(let y = 0; y < row.length; y++){
            let cell = row[y];
            if(isNaN(cell)) break computeSum; 
            sum+= cell;
        }
    }
    success = true; 
}