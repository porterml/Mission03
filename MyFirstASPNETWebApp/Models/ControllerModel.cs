using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class CalculatorModel
    {
        [Range(0,100)]
        public int Assignment { get; set; }
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Range(0, 100)]
        public int Intex { get; set; }
        [Range(0, 100)]
        public int Project { get; set; }
        [Range(0, 100)]
        public int Exam { get; set; }
    }
}
