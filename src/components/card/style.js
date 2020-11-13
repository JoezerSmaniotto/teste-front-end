
import styled from 'styled-components';

export const Component = styled.div`
  
    width: 300px;
    padding: 10px;
    font-size: 62,5%;
    box-shadow:  3px  #00000012;
    
    .card {
        background: #FFF;
        border-radius: 20px;
        box-shadow: 0px 2px 23px #26395338;
        
        width: 100%;
      

        .mediaCard{
        height: 200px;
        width: 100%;
        border-radius: 20px;
        
        }

        .mediaCard img {
            height:100%;
            width:100%;
        }

        .bottomCard {
            /* padding: 20px; */
            width: 100%;
            padding: 10px;
            font-weight: bold;
            font-size: 1.2rem;
            
        }

        .bottomText{
            display: inline-block;
        }

        .infoCard{
            display: flex;
            justify-content: space-between;
        }

       

        
        .description{
            display:flex;
            justify-content: space-between;

        }

        .infoDescription{
            width: 100%;
            height: 200px;
            font-size: 0.8em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }

        .infoDescription h2{
            padding-bottom: 15px
        }
        .infoDescription p{
            font-weight: normal;
            font-size: 1em;

        }
     
    }



`;
