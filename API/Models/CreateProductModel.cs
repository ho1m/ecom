using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CreateProductModel
    {

        public string Title { get; set;  }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }

    }
}
