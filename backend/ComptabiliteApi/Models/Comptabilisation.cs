using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class Comptabilisation
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [ForeignKey(nameof(OperationComptable))]
        public string Id_OperationComptable { get; set; }
        [Required]
        [ForeignKey(nameof(Facture))]
        public string id_Facture { get; set; }
    }
}
