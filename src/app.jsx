import React from 'react';
import axios from "axios";

class app extends Component{

componentWillMount(){
  axios

  const options = {
    method: 'GET',
    url: 'https://stock-market-data.p.rapidapi.com/market/index/s-and-p-five-hundred',
    headers: {
      'x-rapidapi-host': 'stock-market-data.p.rapidapi.com',
      'x-rapidapi-key': 'e16e985be9msh6320fe22822ba8bp1fcf79jsn04ae76833f7e'
    }
  };


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
    render(){
        return (
            <div>

            </div>

        )
    }

}

export default app;