function actualizarDispositivosSegunOrden(orden) {
  console.log('Orden recibida:', orden); // Imprimir la orden recibida en la consola

  const deviceKeywords = {
    'enciende el ventilador': {
      command: 'img/ventiladorON.gif',
      className: 'ventilador-image'
    },
    'apaga el ventilador': {
      command: 'img/ventiladorOFF.png',
      className: 'ventilador-image'
    },
    'enciende la luz de la recámara': {
      command: 'img/Foco_ON.png',
      className: 'recamara-luz-image'
    },
    'apaga la luz de la recámara': {
      command: 'img/Foco_OFF.png',
      className: 'recamara-luz-image'
    },
    'enciende la luz de la sala': {
      command: 'img/Foco_ON.png',
      className: 'sala-luz-image'
    },
    'apaga la luz de la sala': {
      command: 'img/Foco_OFF.png',
      className: 'sala-luz-image'
    },
    'enciende luces del jardín': {
      command: 'img/gardenlamp_ON.png',
      className: 'gardenlamp-image' // Clase específica para las gardenlamp
    },
    'apaga luces del jardín': {
      command: 'img/gardenlamp_OFF.png',
      className: 'gardenlamp-image' // Clase específica para las gardenlamp
    },
    'abre las cortinas': {
      command: 'img/CortinasOPEN.png',
      className: 'cortinas-image' // Clase específica para las cortinas
    },
    'cierra las cortinas': {
      command: 'img/CortinasCLOSE.png',
      className: 'cortinas-image' // Clase específica para las cortinas
    },
    'enciende las cámaras': {
      command: 'img/Camaras_ON.png',
      className: 'camaras-image' // Clase específica para las cámaras
    },
    'apaga las cámaras': {
      command: 'img/Camaras_OFF.png',
      className: 'camaras-image' // Clase específica para las cámaras
    },
    'activa la alarma': {
      command: 'activa la alarma ',
      className: 'alarma-image'
    },
    'apaga la alarma': {
      command: 'apaga la alarma',
      className: 'alarma-image'
    }
  };

  // Iterar sobre las keywords
  let keywordFound = false;
  for (const keyword in deviceKeywords) {
    if (orden === keyword) {
      keywordFound = true;
      const { command, className } = deviceKeywords[keyword];
      console.log(`Se detectó la palabra clave: ${keyword}`); // Imprimir la keyword encontrada en la consola
      console.log(`Comando a ejecutar: ${command}`);

      // Seleccionar y cambiar el estado de las imágenes específicas
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (className === 'alarma-image') {
          // Controlar la alarma
          controlarAlarma(command);
        } else {
          // Cambiar la imagen del dispositivo
          element.src = command;
        }
      }

      // Aquí podrías llamar a enviarOrdenA() si es necesario
      break; // Salir del bucle una vez que se ha encontrado una coincidencia
    }
  }

  if (!keywordFound) {
    console.log('Orden no reconocida:', orden); // Imprimir un mensaje si la orden no coincide con ninguna keyword
  }
}

// Esta función controla la alarma
function controlarAlarma(command) {
  const alarmSound = new Audio('img/alarm.mp3');
  if (command === 'activa la alarma') {
    // Activar la alarma y reproducir el sonido
    alarmSound.play();
  } else if (command === 'apaga la alarma') {
    // Desactivar la alarma y detener el sonido
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
}

// Esta función enviaría la orden aceptada a una API
// function enviarOrdenA(url, comando, imagen, usuario) {
//   // Implementa aquí la lógica para enviar la orden a la API
// }
