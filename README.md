# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop View](./desktop.jpg)
![Mobile View](./mobile.jpg)

### Links

- Live Site URL: [Live demo site](https://dportillo23.github.io/ip-tracker/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Material UI](https://mui.com/) - For styles
- [IP Geolocation API](https://geo.ipify.org/) - API for IP Addresses
- [React LeafLetJs](https://react-leaflet.js.org/) - API for the map component

### What I learned

A learnt to work with simple LeafLet components, also using Material UI, custom hooks and axios calls.

```jsx
export default function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData(ip = null) {
            setLoading(true);
            setError();
            const data = ip ? await API.getIpLocation() : await API.getLocation();
            setData(data);
            setLoading(false);
            
        }

        try {
            fetchData()
        } catch (error) {
            setError(error);
        }

    }, [])
return [data, loading, error]
};
```

```jsx
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MyMapComponent = ({ position }) => {

  
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
    <ChangeView center={position} zoom={13} />
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={position} icon={new Icon({iconUrl: markerIcon, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>Text</Popup>
      </Marker>
    </MapContainer>
  );
};
```


### Continued development

React is my favorite framework/library to work with web apps, and I plan to continue working learning about hooks, states, context, redux and more.

### Useful resources

- [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/) - Great documentation, easy to follow, very organized and with good examples.

## Author

- Website - [Daniel Portillo](https://www.danielportillo.dev)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- Twitter - [@DaniDev23](https://twitter.com/DaniDev23)

