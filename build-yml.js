// Export data into YAML format for Rails
var buildYAML=function(d){
	var out_dept = '', out_muni='';
	for(var i=0, t=d.length; i<t;i++){
		out_dept+= d[i].dept + ': ' +
			'\n id: ' + (i+1) + 
			'\n departamento: '+d[i].dept + '\n\n';
			
			for(var j=0,t2=d[i].munis.length;j<t2;j++){
				var muni_id = j+1; 
				out_muni+=d[i].dept +', ' + d[i].munis[j]+': ' +
						'\n departamento_id: ' + (i+1) +
						'\n id: ' + (i+1) +  (muni_id < 10 ? '0'+muni_id:muni_id) +
						'\n municipio: ' + d[i].munis[j] + '\n\n';
			}
	}
	
	return {
		departamentos: out_dept,
		municipios: out_muni
	};
};

window.onload =function(){        
	
		var output = buildYAML(muni14.data);
		document.getElementById('departamentos-yml').innerHTML = output.departamentos;
		document.getElementById('municipios-yml').innerHTML = output.municipios;

};
