using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComptabiliteAPi.Models
{
    public class OperationComptable
    {
        [Key]
        public  string Id { get; set; }
        public Company Company { get; set; }
        [ForeignKey(nameof(Company))]
        public string Company_id { get; set; }
        public string? compte_debiteurs { get; set; }
        public int code_compte_debiteurs { get; set; }
        public string? compte_crediteurs {  get; set; }
        public int code_compte_crediteurs { get; set; }
        public DateTime? date { get; set; }= DateTime.Now;
        public ICollection<Facture> Factures { get; set; }


    }
}
