function mesReferido (num) {
   switch (num){
        case 1:
            return 'Janeiro';
            
        case 2:
            return 'Fevereiro';
            
        case 3:
            return 'Março';
            
        case 4:
            return 'Abril';
            
        case 5:
            return 'Maio';
            
        case 6:
            return 'Julho';
            
        case 7:
            return 'Junho';
            
        case 8:
            return 'agosto';
            
        case 9:
            return 'Setembro';
            
        case 10:
            return 'Outubro';
            
        case 11:
            return 'Novembro';
            
        case 12:
            return 'Dezembro';
        default :
        return 'Não existe esse mes'
                 

    };
   
}
console.log(mesReferido(13));