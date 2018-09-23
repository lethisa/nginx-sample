# Tutorial For Weather.app - also known as *Weather.exe*
***So, where do we begin?***

**First Off** We need to work on getting the API key for the weather application, by clicking on [**this**](https://openweathermap.org/api), it will take us to the correct area to get our API key.

![weatherapp prev](https://i.gyazo.com/938c0a09ae84b0ead03421f5bcc57b9c.png)

## How do we get the API key?
1. Click on the free plan in order to generate an api key

![weatherapp prev](https://i.gyazo.com/2d6337135184c27b8e1c6593e9629c0d.png)

2. It will give us an option to create the account

<p align="center"> <img src="https://i.gyazo.com/3c0c467acff2050e8fc709ab9ef20639.gif"></p>

3. Then we generate API key for the application

<p align="center"> <img src="https://i.gyazo.com/3ea8387fd2812ae2f401df4ae5fcf15d.gif"></p>

4. **Now the fun stuff begins** with our OpenWeatherMap api key from the steps above we will go through and modify the files as needed. 

## Download The Repository
**The trusty ready made package is located [here](https://github.com/0-1-0-1/weatherapp/releases/tag/Stable)!**

5. Now, with that package downloaded we will go through and locate the weatherapp-master/src folder; once that folder is located we will want to open the **index.html** and the **main.js** files in your favorite text editor. *In this case we will use atom*

6. We will then need to modify lines, 33 and 34 in **index.html** to reflect our new API key and a location that we want our weather application to query from. We will do the exact steps to **main.js** on lines 73 and 74.

<p align="center"> <img src="https://i.gyazo.com/5c6d33dd6f1406d4089bebcc611d4665.gif"></p>

7. Now, package **Weather** using Electron Packager

  # Then open a terminal or command prompt window inside of the main src directory then run this code below
   
```sh
npm install
electron-packager . --icon assets/icon.png
```
   
  # In the case that you don't have electron-packager installed, run 
  
```sh
# for use in npm scripts
npm install electron-packager --save-dev

# for use from cli
npm install electron-packager -g
```

<p align="center"> <img src="https://i.gyazo.com/e740cff94de926a20c11b96a3a09c21b.gif"></p>

8. Run the *Weather.exe* or, if You are on Mac, *Weather.app*

<p align="center"> <img src="https://i.gyazo.com/fa687ed21a15610676a81552eb510f89.gif"></p>


## Extras!

If you were ever wondering on how to change from Metric to Imperial just modify line 35 in **index.html** and line 75 in **main.js** from  

```
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
```
    
 to 
 
 ```
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
 ```
 
 To change 24 hour format to 12 hour format comment/delete lines 62 - 69 and uncomment lines 71 - 83 in **index.html**


#
*thanks for reading*

