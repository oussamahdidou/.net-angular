using System.ComponentModel.DataAnnotations;

namespace ComptabiliteAPi.Models
{
    public class Company
    {
        [Key]
        public string? Lei { get; set; }
        public string? Name { get; set; }
        
    }
}
