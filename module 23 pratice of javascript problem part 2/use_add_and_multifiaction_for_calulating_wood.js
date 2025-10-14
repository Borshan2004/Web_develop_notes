function wood_need(chair_quainatiy,table_quainatiy,bed_quainatiy){
  
    const per_chair_wood = 3; 
    const per_table_wood = 10; 
    const per_bed_wood = 50;
    
    const total_chair_wood = chair_quainatiy* per_chair_wood;
    const total_table_wood = table_quainatiy* per_table_wood;
    const total_bed_wood = bed_quainatiy* per_bed_wood;

    total_wood = total_chair_wood+total_table_wood+total_bed_wood;

    return total_wood;


}

const total=wood_need(0,0,1);
console.log(total);