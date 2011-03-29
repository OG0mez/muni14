##Muni14##
Generador de departamentos y municipios para El Salvador (JavaScript)

###Uso:###

Solamente agrega una o mas `select` boxes a tu pagina y asignales un atributo `id`.

    <select id="departamentos"></select>

Luego, agrega una referencia al script y utiliza la funcion addDepts pasando como argumento el id del elemento select para generar la lista de departamentos. Por ejemplo:

    <script src="muni14.js"></script>

    <script>
        window.onload =function(){
                muni14.addDepts('departamentos');
        };		
    </script>

El script creara un elemento `select` adicional que se actualizara dinamicamente con la lista de municipios dependiendo del departamento selecionado. Si el `id` del select box con los departamentos es `departamentos` el `id` del select box con los municipios sera `departamentos-munis`.

###Leer codigos###

Los departamentos y municipios siguen el sistema de codificacion oficial, por ejemplo San Salvador, Soyapango es *"0618"*

Para leer codigos solo usa la funcion `getDeptMuni` con el codigo en una cadena de texto

    muni14.getDeptMuni("0618");	// San Salvador, Soyapango


###Otras Funciones###

Para obtener el departamento solo usa la funcion `getDept` y pasa como argumento el codigo del departamento como cadena de texto o como numero.

    muni14.getDept('03');	// Sonsonate
    muni14.getDept(3);	// Sonsonate



~jaime.