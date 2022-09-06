## API Servicios Psicológicos en México

Permite agregar, editar, eliminar y obtener la lista de servicios, u obtener un elemento de la lista.

A continuación se describirán los métodos para realizar las peticiones anteriores:

GET

* Se pueden obtener los datos de todos los servicios con la siguiente URL:
  [https://serviciospsicologicosapi.herokuapp.com/api/infoServices/allInstitutions](https://serviciospsicologicosapi.herokuapp.com/api/infoServices/allInstitutions)
* Para obtener los datos de un solo servicio agregaremos el id:
  **https://serviciospsicologicosapi.herokuapp.com/api/infoServices/****:idInstitucion**

POST

* Para agregar un servicio se deberá usar la siguiente URL:
  **https://serviciospsicologicosapi.herokuapp.com/api/infoServices/addInstitution**
* Además se deberán llenar cada uno de los siguientes datos:
  1. idInstitucion: Posición en la lista.
  2. name: Nombre de la institución o servicio.
  3. modalidad: Modalidad a distancia, presencial o en línea.
  4. estado: Estado en el que se ubica.
  5. direccion: En caso de ser un servicio presencial.
  6. telefono: Número al que puede llamar el usuario.
  7. horario: Días y hora de atención.
  8. webredesSociales: URL de página web o redes sociales.
  9. servicio: Descripción del servicio que se brinda.

PUT

* Para editar la información de un servicio existente en la base de datos, se deberá específicar el id del servicio o institución:
  **https://serviciospsicologicosapi.herokuapp.com/api/infoServices/****:idInstitucion**
* Además, se deberá nuevamente agregar todos los datos correspondientes al servicio (idInstuticion, name, modalidad, estado, direccion, telefono, horario, webredesSociales y servicio), editando aquel que se desea modificar.

DELETE

* Para eliminar un servicio se deberá agregar el id de éste:
  **https://serviciospsicologicosapi.herokuapp.com/api/infoServices/****:idInstitucion**
