
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(url).then(res => {
            res.json().then(result => {
                setData(result)

            })
        })
    }, [])
    return data;
}
export default useFetch;











{/*data store cheyyan vendi oru state create cheyyuka....api call cheythitt olla data namuk store cheyyan vendit */ }

{/*useEffect hook:page load aakumbo mathram api call cheyth data display cheyyan */ }

{/*empty dependency pass cheyth kodukkuka[]----->page load cheyyumbo mathram run cheytha mathy */ }

{/*hook folder create inside src folder--->create custom hook to get api *--->useFetch.js--->use appozhum kodukkan  sredhikkuka 
    ---->reactinu hook aanu create cheyyuanath annu manasilakan
   inbuild method -->applicationil avide venamegilum reuse cheyyam-----> */}

   {/*home page load aakumbo useFetch function load aakanam athinu  */}