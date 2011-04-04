##Muni14##
Generador de departamentos y municipios para El Salvador (JavaScript)

###Uso:###

Solamente agrega una o mas `select` boxes a tu pagina y asignales un atributo `id`.

    <select id="departamentos"></select>

Luego, agrega una referencia al script y utiliza la funcion addDepts pasando como argumento el id del elemento select para generar la lista de departamentos. Por ejemplo:

    <script src="muni14.min.js"></script>

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


## Build YAML ##

Abre build-yml.html para generar los archivos departamentos.yml y municipios.yml los cuales pueden ser usados para cargar la base de datos en frameworks como Ruby on Rails.

###Como usar los archivos yml en rails###

Primero genera los siguientes modelos

    rails generate model Departamento 
    rails generate model Municipio

Luego crea las asociaciones

    class Departamento < ActiveRecord::Base
        has_many :municipios
    end

    class Municipio < ActiveRecord::Base
        belongs_to :departamento
    end


Modifica las migraciones a manera que asemejen lo siguiente

    class CreateMunicipios < ActiveRecord::Migration
        def self.up
            create_table :municipios do |t|
                t.string :municipio
                t.references :departamento
                t.timestamps
            end
        end
    
        def self.down
            drop_table :municipios
        end
    end
    
    class CreateDepartamentos < ActiveRecord::Migration
        def self.up
          create_table :departamentos do |t|
              t.string :departamento
              t.timestamps
          end
         end
    
         def self.down
              drop_table :departamentos
         end
    end

Modifica las fixtures (tests/fixtures/*.yml) generadas copiando la información de esta pagina 

luego migra la base de datos y carga la informacion en la base de datos desde las fixtures

    rake db:migrate
    rake db:fixtures:load 


Puedes probar lo siguiente en tu base de datos (en este caso usamos sqlite)

    sqlite> select id,departamento from departamentos;
    1|Ahuachapán
    2|Santa Ana
    3|Sonsonate
    4|Chalatenango
    5|La Libertad
    6|San Salvador
    7|Cuscatlán
    8|La Paz
    9|Cabañas
    10|San Vicente
    11|Usulután
    12|San Miguel
    13|Morazán
    14|La Unión
    
    sqlite&gt; select id,municipio from municipios;
    101|Ahuachapán
    102|Jujutla
    103|Atiquizaya
    104|Concepción de Ataco
    105|El Refugio
    106|Guaymango
    107|Apaneca
    108|San Francisco Menéndez
    109|San Lorenzo
    110|San Pedro Puxtla
    111|Tacuba
    112|Turín
    201|Candelaria de la Frontera
    202|Chalchuapa
    203|Coatepeque
    204|El Congo
    205|El Porvenir
    ....

Tambien desde la consola de rails

    rails console

    > Departamento.find(6)
    => #<Departamento id: 6, departamento: "San Salvador"...> 
    > Departamento.find(6).municipios
    => [#<Municipio id: 601, municipio: "Aguilares", departamento_id: 6,..>, 
        #<Municipio id: 602, municipio: "Apopa", departamento_id: 6,....>, 
        #<Municipio id: 603, municipio: "Ayutuxtepeque", departamento_id: 6...>...]


    > Municipio.find(618)
    => #<Municipio id: 618, municipio: "Soyapango", departamento_id: 6,..> 
    > Municipio.find(618).departamento
    => #<Departamento id: 6, departamento: "San Salvador",...> 

~jaime.