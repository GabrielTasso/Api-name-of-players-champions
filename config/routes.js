const express = require('express')
const routes = express.Router()


let jogadores_barcelona = [
    {'1' : {Nome: 'Marc-André ter Stegen', Idade: '30', Posição:'Goleiro', Nacionalidade:'Alemanha'}},
    {'2' : {Nome: 'Iñaki Peña', Idade: '23' , Posição:'Goleiro', Nacionalidade:'Espanha'}},
    {'3' : {Nome: 'Arnau Tenas', Idade: '21', Posição:'Goleiro', Nacionalidade:'Espanha'}},
    {'4' : {Nome: 'Ousmane Dembélé', Idade: '25', Posição:'Atacante', Nacionalidade:'França'}},
    {'5' : {Nome: 'Robert Lewandowski', Idade: '34', Posição:'Atacante', Nacionalidade:'Polônia'}},
    {'6' : {Nome: 'Ansu Fati', Idade: '19', Posição:'Atacante', Nacionalidade:'Espanha'}},
    {'7' : {Nome: 'Ferran Torres', Idade: '22', Posição:'Atacante', Nacionalidade:'Espanha'}},
    {'8' : {Nome: 'Memphis Depay', Idade: '28', Posição:'Atacante', Nacionalidade:'Holanda'}},
    {'9' : {Nome: 'Raphinha', Idade: '25', Posição:'Atacante', Nacionalidade:'Brasil'}},
    {'10' : {Nome: 'Sergio Busquets', Idade: '34', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'11' : {Nome: 'Pedri', Idade: '19', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'12' : {Nome: 'Franck Kessié', Idade: '25', Posição:'Meio', Nacionalidade:'Costa do Marfim'}},
    {'13' : {Nome: 'Frenkie de Jong', Idade: '25', Posição:'Meio', Nacionalidade:'Holanda'}},
    {'14' : {Nome: 'Gavi', Idade: '18', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'15' : {Nome: 'Pablo Torre', Idade: '19', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'16' : {Nome: 'Héctor Bellerín', Idade: '27', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'17' : {Nome: 'Gerard Piqué', Idade: '35', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'18' : {Nome: 'Ronald Araújo', Idade: '23', Posição:'Defesa', Nacionalidade:'Uruguai'}},
    {'19' : {Nome: 'Andreas Christensen', Idade: '26', Posição:'Defesa', Nacionalidade:'Dinamarca'}},
    {'20' : {Nome: 'Marcos Alonso', Idade: '31', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'21' : {Nome: 'Jordi Alba', Idade: '33', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'22' : {Nome: 'Sergi Roberto', Idade: '30', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'23' : {Nome: 'Jules Koundé', Idade: '23', Posição:'Defesa', Nacionalidade:'França'}},
    {'24' : {Nome: 'Eric García', Idade: '21', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'25' : {Nome: 'Álex Balde', Idade: '18', Posição:'Defesa', Nacionalidade:'Espanha'}}
]





let jogadores_liverpool = [
    
     {id: '1', Nome: "Alisson",Idade: "29", Posição:"Goleiro", Nacionalidade:"Brasil"},
     {id: '2' ,Nome: 'Adrián', Idade: '35' , Posição:'Goleiro',Nacionalidade:'Espanha' },
     {id: '3' ,Nome: 'Caoimhin Kelleher', Idade: '23',Posição:'Goleiro',Nacionalidade:'Irlanda'},
     {id: '4' , Nome: 'Harvey Davies', Idade: '19', Posição:'Goleiro', Nacionalidade:'Inglaterra'},
     {id: '5' , Nome: 'Joe Gomez', Idade: '25', Posição:'Defesa', Nacionalidade:'Inglaterra'},
     {id: '6' , Nome: 'Virgil van Dijk', Idade: '31', Posição:'Defesa', Nacionalidade:'Holanda'},
     {id: '7' , Nome: 'Ibrahima Konaté', Idade: '23', Posição:'Defesa', Nacionalidade:'França'},
     {id: '8' , Nome: 'Konstantinos Tsimikas', Idade: '26', Posição:'Defesa', Nacionalidade:'Grécia'},
     {id: '9' , Nome: 'Calvin Ramsay', Idade: '19', Posição:'Defesa', Nacionalidade:'Escócia'},
     {id: '10' , Nome: 'Andy Robertson', Idade: '28', Posição:'Defesa', Nacionalidade:'Escócia'},
     {id: '11' , Nome: 'Joël Matip', Idade: '31', Posição:'Defesa', Nacionalidade:'Camarões'},
     {id: '12' , Nome: 'Stefan Bajcetic', Idade: '17', Posição:'Defesa', Nacionalidade:'Espanha'},
     {id: '13' , Nome: 'Nathaniel Phillips', Idade: '25', Posição:'Defesa', Nacionalidade:'Inglaterra'},
     {id: '14' , Nome: 'Trent Alexander-Arnold', Idade: '23', Posição:'Defesa', Nacionalidade:'Inglaterra'},
     {id: '15' , Nome: 'Luke Chambers', Idade: '18', Posição:'Defesa', Nacionalidade:'Inglaterra'},

     {id: '16' , Nome: 'Fabinho', Idade: '28', Posição:'Meio', Nacionalidade:'Brasil'},
     {id: '17' , Nome: 'Thiago Alcántara', Idade: '31', Posição:'Meio', Nacionalidade:'Espanha'},
     {id: '18' , Nome: 'James Milner', Idade: '36', Posição:'Meio', Nacionalidade:'Inglaterra'},
     {id: '19' , Nome: 'Naby Keita', Idade: '27', Posição:'Meio', Nacionalidade:'Guinea'},
     {id: '20' , Nome: 'Jordan Henderson', Idade: '32', Posição:'Meio', Nacionalidade:'Inglaterra'},
     {id: '21' , Nome: 'Alex Oxlade-Chamberlain', Idade: '29', Posição:'Meio', Nacionalidade:'Inglaterra'},
     {id: '22' , Nome: 'Curtis Jones', Idade: '21', Posição:'Meio', Nacionalidade:'Inglaterra'},
     {id: '23' , Nome: 'Harvey Elliott', Idade: '19', Posição:'Meio', Nacionalidade:'Inglaterra'},
     {id: '24' , Nome: 'Fabio Carvalho', Idade: '20', Posição:'Meio', Nacionalidade:'Portugal'},
     {id: '25' , Nome: 'Arthur', Idade: '26', Posição:'Meio', Nacionalidade:'Brasil'},
     {id: '26' , Nome: 'Bobby Clark', Idade: '17', Posição:'Meio', Nacionalidade:'Inglaterra'},

     {id: '27' , Nome: 'Roberto Firmino', Idade: '30', Posição:'Atacante', Nacionalidade:'Brasil'},
     {id: '28' , Nome: 'Mohamed Salah', Idade: '30', Posição:'Atacante', Nacionalidade:'Egito'},
     {id: '29' , Nome: 'Diogo Jota', Idade: '25', Posição:'Atacante', Nacionalidade:'Portugal'},
     {id: '30' , Nome: 'Luis Díaz', Idade: '25', Posição:'Atacante', Nacionalidade:'Colômbia'},
     {id: '31' , Nome: 'Darwin Núñez', Idade: '23', Posição:'Atacante', Nacionalidade:'Uruguai'},
    
]



let jogadores_paris = [
    {'1' : {Nome: 'Keylor Navas', Idade: '35', Posição:'Goleiro', Nacionalidade:'Costa Rica'}},
    {'2' : {Nome: 'Sergio Rico', Idade: '29' , Posição:'Goleiro', Nacionalidade:'Espanha'}},
    {'3' : {Nome: 'Alexandre Letellier', Idade: '31', Posição:'Goleiro', Nacionalidade:'França'}},
    {'4' : {Nome: 'Gianluigi Donnarumma', Idade: '23', Posição:'Goleiro', Nacionalidade:'Itália'}},

    {'5' : {Nome: 'Achraf Hakim', Idade: '23', Posição:'Defesa', Nacionalidade:'Marrocos'}},
    {'6' : {Nome: 'Presnel Kimpembe', Idade: '27', Posição:'Defesa', Nacionalidade:'Franças'}},
    {'7' : {Nome: 'Sergio Ramos', Idade: '36', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'8' : {Nome: 'Marquinhos', Idade: '28', Posição:'Defesa', Nacionalidade:'Brasil'}},
    {'9' : {Nome: 'Juan Bernat', Idade: '29', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'10' : {Nome: 'Nuno Mendes', Idade: '20', Posição:'Defesa', Nacionalidade:'Portugal'}},
    {'11' : {Nome: 'Nordi Mukiele', Idade: '24', Posição:'Defesa', Nacionalidade:'França'}},
    {'12' : {Nome: 'El Chadaille Bitshiabu', Idade: '17', Posição:'Defesa', Nacionalidade:'França'}},

    {'13' : {Nome: 'Marco Verratti', Idade: '29', Posição:'Meio', Nacionalidade:'Itália'}},
    {'14' : {Nome: 'Fabián Ruiz', Idade: '26', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'15' : {Nome: 'Danilo Pereira', Idade: '31', Posição:'Meio', Nacionalidade:'Portugal'}},
    {'16' : {Nome: 'Vitinha', Idade: '22', Posição:'Meio', Nacionalidade:'Portugal'}},
    {'17' : {Nome: 'Renato Sanches', Idade: '25', Posição:'Meio', Nacionalidade:'Portugal'}},
    {'18' : {Nome: 'Pablo Sarabia', Idade: '30', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'19' : {Nome: 'Carlos Soler', Idade: '25', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'20' : {Nome: 'Warren Zaire-Emery', Idade: '16', Posição:'Meio', Nacionalidade:'França'}},

    {'21' : {Nome: 'Kylian Mbappé', Idade: '23', Posição:'Atacante', Nacionalidade:'França'}},
    {'22' : {Nome: 'Neymar', Idade: '30', Posição:'Atacante', Nacionalidade:'Brasil'}},
    {'23' : {Nome: 'Lionel Messi', Idade: '35', Posição:'Atacante', Nacionalidade:'Argentina'}},
    {'24' : {Nome: 'Hugo Ekitike', Idade: '20', Posição:'Atacante', Nacionalidade:'França'}}

]



let jogadores_Real_Madrid = [
    {'1' : {Nome: 'Thibaut Courtois', Idade: '30', Posição:'Goleiro', Nacionalidade:'Bélgica'}},
    {'2' : {Nome: 'Andriy Lunin', Idade: '23' , Posição:'Goleiro', Nacionalidade:'Ucrânia'}},
    {'3' : {Nome: 'Luis López', Idade: '21', Posição:'Goleiro', Nacionalidade:'Espanha'}},

    {'4' : {Nome: 'Dani Carvajal', Idade: '30', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'5' : {Nome: 'Éder Militão', Idade: '24', Posição:'Defesa', Nacionalidade:'Brasil'}},
    {'6' : {Nome: 'David Alaba', Idade: '30', Posição:'Defesa', Nacionalidade:'Áustria'}},
    {'7' : {Nome: 'Jesús Vallejo', Idade: '25', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'8' : {Nome: 'Nacho', Idade: '32', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'9' : {Nome: 'Álvaro Odriozola', Idade: '26', Posição:'Defesa', Nacionalidade:'Espanha'}},
    {'10' : {Nome: 'Antonio Rüdiger', Idade: '29', Posição:'Defesa', Nacionalidade:'Alemanha'}},
    {'11' : {Nome: 'Ferland Mendy', Idade: '27', Posição:'Defesa', Nacionalidade:'França'}},

    {'12' : {Nome: 'Toni Kroos', Idade: '32', Posição:'Meio', Nacionalidade:'Alemanha'}},
    {'13' : {Nome: 'Luka Modric', Idade: '37', Posição:'Meio', Nacionalidade:'Croácia'}},
    {'14' : {Nome: 'Eduardo Camavinga', Idade: '19', Posição:'Meio', Nacionalidade:'França'}},
    {'15' : {Nome: 'Federico Valverde', Idade: '24', Posição:'Meio', Nacionalidade:'Uruguai'}},
    {'16' : {Nome: 'Lucas Vázquez', Idade: '31', Posição:'Meio', Nacionalidade:'Espanha'}},
    {'17' : {Nome: 'Aurélien Tchouaméni', Idade: '22', Posição:'Meio', Nacionalidade:'França'}},
    {'18' : {Nome: 'Dani Ceballos', Idade: '26', Posição:'Meio', Nacionalidade:'	Espanha'}},

    {'19' : {Nome: 'Eden Hazard', Idade: '31', Posição:'Atacante', Nacionalidade:'Bélgica'}},
    {'20' : {Nome: 'Karim Benzema', Idade: '34', Posição:'Atacante', Nacionalidade:'França'}},
    {'21' : {Nome: 'Marco Asensio', Idade: '26', Posição:'Atacante', Nacionalidade:'Espanha'}},
    {'22' : {Nome: 'Vinícius Júnior', Idade: '22', Posição:'Atacante', Nacionalidade:'Brasil'}},
    {'23' : {Nome: 'Rodrygo', Idade: '21', Posição:'Atacante', Nacionalidade:'Brasil'}},
    {'24' : {Nome: 'Mariano', Idade: '29', Posição:'Atacante', Nacionalidade:'Dominican Republic'}}
]





//buscar dados do liverpool
routes.get('/liverpool', (req, res) => {
    return res.json(jogadores_liverpool)

})

//buscar dados do barcelona
routes.get('/barcelona', (req, res) => {
    return res.json(jogadores_barcelona)
})

//buscar dados do Real-Madrid
routes.get('/realmadrid', (req, res) => {
    return res.json(jogadores_Real_Madrid)
})

//Buscar Dados do Paris
routes.get('/paris', (req, res) => {
    return res.json(jogadores_paris)
})





module.exports = routes