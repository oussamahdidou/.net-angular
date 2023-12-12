using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class Operation
    {
        [Key]
        public string? Id { get; set; }
        public ICollection<Facture> Factures { get; set; }
        public string? name { get; set; }
        public string? description { get; set; }
        public bool? est_comptabilise { get; set; }
        public Company Company { get; set; }
        [ForeignKey(nameof(Company))]
        public string Company_id { get; set; }
        public DateTime? date { get; set; } = DateTime.Now;

    }
}
