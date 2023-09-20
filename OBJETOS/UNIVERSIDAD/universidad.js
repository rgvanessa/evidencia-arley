class Usuario {
    constructor(nombre, segmento) {
      this.nombre = nombre;
      this.segmento = segmento;
    }
  }
  
  
  class ModuloAtencion {
    constructor(nombre) {
      this.nombre = nombre;
      this.usuariosAtendidos = [];
      this.traslados = 0;
    }
  
    atenderUsuario(usuario) {
      this.usuariosAtendidos.push(usuario);
    }
  
    trasladarUsuario(usuario, otroModulo) {
      const index = this.usuariosAtendidos.indexOf(usuario);
      if (index !== -1) {
        this.usuariosAtendidos.splice(index, 1);
        otroModulo.atenderUsuario(usuario);
        this.traslados++;
      }
    }
  
    estadisticas() {
      console.log(`Estadísticas del Módulo de Atención ${this.nombre}:`);
      console.log(`- Usuarios atendidos: ${this.usuariosAtendidos.length}`);
      console.log(`- Traslados realizados: ${this.traslados}`);
    }
  }
  
  // Creación de instancias de módulos de atención
  const moduloTerminal = new ModuloAtencion("Terminal para Llamada Telefónica");
  const moduloOficina = new ModuloAtencion("Oficina");
  
  // Creación de usuarios
  const usuario1 = new Usuario("Estudiante 1", "Estudiante");
  const usuario2 = new Usuario("Docente 1", "Docente");
  const usuario3 = new Usuario("Estudiante 2", "Estudiante");
  
  // Atender usuarios en los módulos
  moduloTerminal.atenderUsuario(usuario1);
  moduloOficina.atenderUsuario(usuario2);
  moduloTerminal.atenderUsuario(usuario3);
  
  // Transferir un usuario de un módulo a otro
  moduloTerminal.trasladarUsuario(usuario1, moduloOficina);
  
  // Generar estadísticas
  moduloTerminal.estadisticas();
  moduloOficina.estadisticas();
  