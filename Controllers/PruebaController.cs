using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EjemplosAngular.Models;

namespace EjemplosAngular.Controllers
{
    [Route("api/prueba")]
    public class PruebaController : Controller
    {
        [HttpGet]
        public IActionResult FindNombres()
        {
            List<Persona> pruebas = new List<Persona>();
            Persona efren = new Persona()
            {
                Nombre = "Efren",
                ApellidoPaterno = "García",
                ApellidoMaterno = "Guarneros",
                Edad = 26
            };
            Persona ilse = new Persona()
            {
                Nombre = "Ilse Maryel",
                ApellidoPaterno = "Gaytán",
                ApellidoMaterno = "Gil",
                Edad = 26
            };
            Persona leon = new Persona()
            {
                Nombre = "León Alejandro",
                ApellidoPaterno = "García",
                ApellidoMaterno = "Gaytán",
                Edad = 2
            };
            pruebas.Add(efren);
            pruebas.Add(ilse);
            pruebas.Add(leon);
            return Ok(pruebas);
        }
    }
}
