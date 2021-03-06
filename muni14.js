var utils = {
	addSelectOption: function(selectbox, value, text){
	        var optn = document.createElement("OPTION");
	        optn.text = text;
	        optn.value = value;
	        selectbox.options.add(optn);
	},
	clearSelect: function(selectbox){	    
        selectbox.innerHTML = "";	
	},
	insertAfter: function(newNode, nodeRef){
		nodeRef.parentNode.insertBefore(newNode, nodeRef.nextSibling);
	}
};


var muni14 = {
	data :[
		{"dept":"Ahuachapán", "munis":["Ahuachapán","Jujutla","Atiquizaya","Concepción de Ataco","El Refugio","Guaymango","Apaneca","San Francisco Menéndez","San Lorenzo","San Pedro Puxtla","Tacuba","Turín"]},
		{"dept":"Santa Ana", "munis":["Candelaria de la Frontera","Chalchuapa","Coatepeque","El Congo","El Porvenir","Masahuat","Metapán","San Antonio Pajonal","San Sebastián Salitrillo","Santa Ana","Santa Rosa Guachipilín","Santiago de la Frontera","Texistepeque"]},
		{"dept":"Sonsonate", "munis":["Acajutla","Armenia","Caluco","Cuisnahuat","Izalco","Juayúa","Nahuizalco","Nahulingo","Salcoatitán","San Antonio del Monte","San Julián","Santa Catarina Masahuat","Santa Isabel Ishuatán","Santo Domingo","Sonsonate","Sonzacate"]},
		{"dept":"Chalatenango", "munis":["Agua Caliente","Arcatao","Azacualpa","Chalatenango","Citalá","Comalapa","Concepción Quezaltepeque","Dulce Nombre de María","El Carrizal","El Paraíso","La Laguna","La Palma","La Reina","Las Vueltas","Nombre de Jesús","Nueva Concepción","Nueva Trinidad","Ojos de Agua","Potonico","San Antonio de la Cruz","San Antonio Los Ranchos","San Fernando","San Francisco Lempa","San Francisco Morazán","San Ignacio","San Isidro Labrador","San José Cancasque","San José Las Flores","San Luis del Carmen","San Miguel de Mercedes","San Rafael","Santa Rita","Tejutla"]},
		{"dept":"La Libertad", "munis":["Antiguo Cuscatlán","Chiltiupán","Ciudad Arce","Colón","Comasagua","Huizúcar","Jayaque","Jicalapa","La Libertad","Nueva San Salvador","Nuevo Cuscatlán","Opico","Quezaltepeque","Sacacoyo","San José Villanueva","San Matías","San Pablo Tacachico","Talnique","Tamanique","Teotepeque","Tepecoyo","Zaragoza"]},
		{"dept":"San Salvador", "munis":["Aguilares","Apopa","Ayutuxtepeque","Cuscatancingo","Ciudad Delgado","El Paisnal","Guazapa","Ilopango","Mejicanos","Nejapa","Panchimalco","Rosario de Mora","San Marcos","San Martín","San Salvador","Santiago Texacuangos","Santo Tomás","Soyapango","Tonacatepeque"]},
		{"dept":"Cuscatlán", "munis":["Candelaria","Cojutepeque","El Carmen","El Rosario","Monte San Juan","Oratorio de Concepción","San Bartolomé Perulapía","San Cristóbal","San José Guayabal","San Pedro Perulapán","San Rafael Cedros","San Ramón","Santa Cruz Analquito","Santa Cruz Michapa","Suchitoto","Tenancingo"]},
		{"dept":"La Paz", "munis":["Cuyultitán","El Rosario","Jerusalén","Mercedes La Ceiba","Olocuilta","Paraíso de Osorio","San Antonio Masahuat","San Emigdio","San Francisco Chinameca","San Juan Nonualco","San Juan Talpa","San Juan Tepezontes","San Luis La Herradura","San Luis Talpa","San Miguel Tepezontes","San Pedro Masahuat","San Pedro Nonualco","San Rafael Obrajuelo","Santa María Ostuma","Santiago Nonualco","Tapalhuaca","Zacatecoluca"]},
		{"dept":"Cabañas", "munis":["Cinquera","Villa Dolores","Guacotecti","Ilobasco","Jutiapa","San Isidro","Sensuntepeque","Ciudad de Tejutepeque","Victoria"]},
		{"dept":"San Vicente", "munis":["Apastepeque","Guadalupe","San Cayetano Istepeque","San Esteban Catarina","San Ildefonso","San Lorenzo","San Sebastián","Santa Clara","Santo Domingo","San Vicente","Tecoluca","Tepetitán","Verapaz"]},
		{"dept":"Usulután", "munis":["Alegría","Berlín","California","Concepción Batres","El Triunfo","Ereguayquín","Estanzuelas","Jiquilisco","Jucuapa","Jucuarán","Mercedes Umaña","Nueva Granada","Ozatlán","Puerto El Triunfo","San Agustín","San Buenaventura","San Dionisio","San Francisco Javier","Santa Elena","Santa María","Santiago de María","Tecapán","Usulután"]},
		{"dept":"San Miguel", "munis":["Carolina","Chapeltique","Chinameca","Chirilagua","Ciudad Barrios","Comacarán","El Tránsito","Lolotique","Moncagua","Nueva Guadalupe","Nuevo Edén de San Juan","Quelepa","San Antonio","San Gerardo","San Jorge","San Luis de la Reina","San Miguel","San Rafael","Sesori","Uluazapa"]},
		{"dept":"Morazán", "munis":["Arambala","Cacaopera","Chilanga","Corinto","Delicias de Concepción","El Divisadero","El Rosario","Gualococti","Guatajiagua","Joateca","Jocoaitique","Jocoro","Lolotiquillo","Meanguera","Osicala","Perquín","San Carlos","San Fernando","San Francisco Gotera","San Isidro","San Simón","Sensembra","Sociedad","Torola","Yamabal","Yoloaiquín"]},
		{"dept":"La Unión", "munis":["Anamorós","Bolívar","Concepción de Oriente","Conchagua","El Carmen","El Sauce","Intipucá","La Unión","Lislique","Meanguera del Golfo","Nueva Esparta","Pasaquina","Polorós","San Alejo","San José","Santa Rosa de Lima","Yayantique","Yucuayquín"]}
	],
	addDepts: function(selectDeptId){
		
		var selectDept = document.getElementById(selectDeptId),
			deps = [];
			
		// get departments from data and sort them
		for(var i=0, t=this.data.length; i<t; i++){
			deps.push(this.data[i].dept);
		}
		
		deps.sort();

		// add departments to select element
		for(var j=0, t2=deps.length; j<t2; j++){
			utils.addSelectOption(selectDept, this.getDeptCode(deps[j]), deps[j]);
		}
		
		// create municipios selectbox and set id based on the departments id
		var selectMunis = document.createElement('select');
		selectMunis.setAttribute('id',selectDept.getAttribute('id')+'-munis');
		selectMunisCachedDisplay = selectMunis.style.display;
		selectMunis.style.display ='none';
		utils.insertAfter(selectMunis, selectDept);
		
		// store a reference to this object so it can be refered to, inside the event
		var that = this;
		
		// bind change event		
		selectDept.onchange = function(){
			// get municipios 
			var opt = this.value;
			if(opt>0){
				// clear selectbox 
				utils.clearSelect(selectMunis);
				utils.addSelectOption(selectMunis, '00', 'Municipio');
				// get munis
				var munis = that.data[--opt].munis;			
				for(var i = 0, t=munis.length;i<t;i++){
					var code = i+1;
					utils.addSelectOption(selectMunis, code > 9 ? code : '0' + code, munis[i]);
					selectMunis.style.display=selectMunisCachedDisplay;
				}
			}else{
				utils.clearSelect(selectMunis);
				selectMunis.style.display = 'none';
			}
		};
	},
	// returns the departamento
	getDept: function(id){
		if(typeof id === 'string'){	id = parseInt(id,10); }
		return ( id > 0 && id < 15 ) ? this.data[--id].dept : '';
	},
	// returns all municipios of a department in an array
	getMunis : function(deptId){
		return this.getDept(deptId)!=='' ? this.data[--deptId].munis : '';
	},
	// return numeric code of a departamento
	getDeptCode:function(dept){
		for(var i=0, t=this.data.length; i<t; i++){
			if(this.data[i].dept===dept){
				var code = ++i;
				return code>9 ? code : '0'+code;
			}
		}
	},
	getDeptMuni:function(code){
		if(code.match(/\d{4}/)){
			var deptCode = code.substring(0,2),
				muniCode = parseInt(code.substring(2),10) -1,
				dept = muni14.getDept(deptCode);
			if(dept!== '' && muniCode>=0){
				var munis = this.getMunis(deptCode);
				return muniCode < munis.length ? dept + ', ' + munis[muniCode] : '';
			}
		}
	}
};