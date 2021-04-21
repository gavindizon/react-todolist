using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Task
    {   
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(32)")]
        public string taskName { get; set; }

        [Column(TypeName ="DateTime2")]
        public DateTime date { get; set; }

        [Column]
        public int priority { get; set; }

        [Column]
        public bool status { get; set; }

    }
}
