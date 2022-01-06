
const dados = [
	{
	   "id":1,
	   "name":"Jaleco",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 801,10",
	   "available":true
	},
	{
	   "id":2,
	   "name":"Avental",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 50,01",
	   "available":false
	},
	{
	   "id":3,
	   "name":"Touca",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 30,50",
	   "available":true
	},
	{
	   "id":4,
	   "name":"Fronha",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 200,10",
	   "available":true
	},
	{
	   "id":5,
	   "name":"Embalagem",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 63,90",
	   "available":true
	},
	{
	   "id":6,
	   "name":"Porta talher",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 20,50",
	   "available":true
	},
	{
	   "id":7,
	   "name":"Porta absorvente",
	   "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
	   "price":"R$ 380,20",
	   "available":true
	},
]
function dadosAprovados(dados, available, price) {
	let aprovados = [];
	
	for (let i = 0; i < dados.length; i++) {
		let { id } = dados[i];
	array.forEach(element => {
		
	});(let i = 0; i < dados.length; i++) {
		let { available } = available[i];
	array.forEach(element => {
		
	}); (let i = 0; i < dados.length; i++) {
		let { price } = price[i];

		if (dados) {{
			aprovados.push(`ids do produto: ${id} && tem no estoque:${available} && valor:${price}`);
		}
	}

	return aprovados;
}

console.log(dadosAprovados(dados, 6));