// Configuración electrónica
const configuracionElectronica = [
    ['1s', '',   '',   ''  ],
    ['2s', '2p', '',   ''  ],
    ['3s', '3p', '3d', ''  ],
    ['4s', '4p', '4d', '4f'],
    ['5s', '5p', '5d', '5f'],
    ['6s', '6p', '6d', ''  ],
    ['7s', '7p', '',   ''  ],
    ['8s', '',   '',   ''  ]
];

console.log("CONFIGURACIÓN ELECTRÓNICA");

for (let fila = 0; fila < configuracionElectronica.length; fila++) {
    let linea = '';
    let primerElemento = true;
    
    for (let columna = 0; columna < configuracionElectronica[fila].length; columna++) {
        const orbital = configuracionElectronica[fila][columna];
        
        if (orbital !== '') {
            if (!primerElemento) {
                linea += '  '; 
            }
            linea += orbital;
            primerElemento = false;
        }
    }
    
    console.log(linea);
}