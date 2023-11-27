using System.ComponentModel.DataAnnotations;

namespace ComptabiliteAPi.Models
{
    public class Libellation
    {
        [Key]
        public int id {  get; set; }
        [Required]
        public string id_Operation { get; set; }
        [Required]
        public string id_Facture { get; set; }
    }
}
