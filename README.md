# ionic-react-capacitor-camera

## [Video](https://youtu.be/DycPJmf4pxY)

Se muestra el funcionamiento de una aplicación para tomar fotos usando la documentación oficial y los plugins de capacitor

A continuación se detallan los pasos a seguir para  implementar una aplicación que permita tomar fotos y almacenarlas en el dispositivo móvil

https://ionicframework.com/docs/react/your-first-app

https://capacitorjs.com/docs/apis/camera


## Integración de los complementos
### Complementos de condensadores para que la funcionalidad nativa de la aplicación funcione
- npm install @capacitor/camera @capacitor/storage @capacitor/filesystem

### PWA 
- npm install @ionic/pwa-elements

.......
##Diseño y funcionalidad de la tab2
#### Creamos dentro del directorio "src/components/" un archivo llamado [EmployeelItem.tsx](https://github.com/JeffersonOmarDiaz/ionic-react-capacitor-camera/blob/main/src/components/EmployeeItem.tsx)

Este archivo contiene lo escencial para la visualización de la tab 2 


####Creacmos el [person.model.ts](https://github.com/JeffersonOmarDiaz/ionic-react-capacitor-camera/blob/main/src/models/person.model.ts) que es para mostrar la inormación del API

####[Tab 2](https://github.com/JeffersonOmarDiaz/ionic-react-capacitor-camera/blob/main/src/pages/Tab2.tsx)
Esta tab servirá para mostrar el consumo del api y diseño de la misma 

####[Tab 3](https://github.com/JeffersonOmarDiaz/ionic-react-capacitor-camera/blob/main/src/pages/Tab3.tsx)
En esta tab se creará la funcionalidad de cámara, en la documentación oficial de capacito indica los plugins necesario para el funcionamiento


##Movil
###Para que la aplicación sea creada en el dispositivo móvil se ejecutan los comandos:
- ionic build
- ionic cap add android
- 
#### Configuración del archivo Android.manifest

```<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>```


```<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />```

###Adicionalmente ejecutamos 
- ionic build
- ionic cap add android
- npx cap copy android
- npx cap sync
- ionic cap open android

![image](https://user-images.githubusercontent.com/32933851/128614867-daa73365-4e59-4917-a998-8bcc2a8bc679.png)


![image](https://user-images.githubusercontent.com/32933851/128614874-5947fe62-5170-454d-a37e-120d6921bb0f.png)















