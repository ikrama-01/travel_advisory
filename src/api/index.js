import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw,ne) => {
    try{
        const { data: { data } }= await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '26c2f39981msh75739c206114594p14e625jsndcb6fa12d224',
            // 'X-RapidAPI-Key': '790445db9emsh93afe8355eabaa6p12b856jsnd386249e54df',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch(error){
        console.log(error);
    }
} 